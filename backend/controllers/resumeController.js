const { spawn } = require("child_process");
const redis = require("../redisClient");
const ResumeDataHandler = require("../services/ResumeDataHandler");
const path = require("path");

const importResume = async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ error: "No file uploaded" });
  }

  const user = req.user;
  console.log("Authenticated User:", user);

  const filePath = path.resolve(req.file.path);
  const firstScriptPath = path.resolve(__dirname, "./resume_parser.py");
  const secondScriptPath = path.resolve(
    __dirname,
    "./distilBERT-finetuned-resumes-sections.py"
  );

  try {
    // Execute the first Python script and get the data
    const firstScriptData = await runPythonScript(firstScriptPath, filePath);
    console.log("Type of firstScriptData:", typeof firstScriptData);
    console.log("Content of firstScriptData:", firstScriptData);
    const resumeHandler = new ResumeDataHandler(user.id, firstScriptData);
    await resumeHandler.processAndSaveResume();

    // Execute the second Python script and get the data
    const secondScriptData = await runPythonScript(secondScriptPath, filePath);
    if (Array.isArray(secondScriptData.soft_skills)) {
      const skillPromises = secondScriptData.soft_skills.map((skill) =>
        redis.zadd("skills", 0, skill)
      );
      await Promise.all(skillPromises);
    }

    res.status(200).send({ message: "Resume processed successfully" });
  } catch (error) {
    console.error("Error in script execution or processing:", error);
    res.status(500).send({ error: "Error processing resume" });
  }
};

async function runPythonScript(scriptPath, filePath) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn("python3", [scriptPath, filePath]);
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
