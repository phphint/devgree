const { spawn } = require("child_process");
const redis = require("../redisClient");
const ResumeDataHandler = require("../services/ResumeDataHandler");
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data"); // Import form-data package

const importResume = async (req, res) => {
  const run_openai_app = true; // Set this to false to skip the execution

  const user = req.user;
  console.log("Authenticated User:", user);

    // Define the path to your Python script
    const firstScriptPath = path.resolve(__dirname, "./resume_parser.py");


  try {
    let resumeData;

    // Handling file upload
    if (req.file) {
      const filePath = path.resolve(req.file.path);
      console.log("File Path:", filePath); // Log the file path for debugging

      if (run_openai_app) {
        // Execute the first Python script and get the data
        resumeData = await runPythonScript(firstScriptPath, filePath);
        console.log("Type of resumeData:", typeof resumeData);
        console.log("Content of resumeData:", resumeData);

        // Send file to FastAPI service using form-data
        const form = new FormData();
        form.append("file", fs.createReadStream(filePath));
        const response = await axios.post(
          "http://fastapi:8000/parse-resume/",
          form,
          { headers: form.getHeaders() }
        );
        console.log("Response from FastAPI:", response.data); 

        // After all operations with the file
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log(`Successfully deleted file: ${filePath}`);
          }
        });
      }
    }
    // Handling direct JSON resume submission
    else if (req.body && req.body.resume) {
      resumeData = req.body.resume;
      console.log("Received JSON resume data:", resumeData);
    } 
    else {
      return res.status(400).send({ error: "No resume data provided" });
    }

    // Process the resume data
    const resumeHandler = new ResumeDataHandler(user.id, resumeData);
    await resumeHandler.processAndSaveResume();

    res.status(200).send({ message: "Resume processed successfully" });
  } catch (error) {
    console.error("Error in processing resume:", error);
    res.status(500).send({ error: "Error processing resume" });
  }
};

async function runPythonScript(scriptPath, filePath) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("nice", [
      "-n",
      "10",
      "python3",
      scriptPath,
      filePath,
    ]);
    let dataString = "";

    pythonProcess.stdout.on("data", (data) => {
      dataString += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      reject(new Error(data.toString()));
    });

    pythonProcess.on("close", (code) => {
      console.log(`child process exited with code ${code}`);
      if (code === 0) {
        console.log("Raw data string from Python script:", dataString);
        try {
          resolve(JSON.parse(dataString));
        } catch (error) {
          console.error("Error parsing JSON:", error);
          reject(error);
        }
      } else {
        reject(new Error("Non-zero exit code"));
      }
    });
  });
}

module.exports = {
  importResume,
};
