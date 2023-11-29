// userController.js

const User = require("../models/User");

const multer = require("multer");
const upload = multer({ dest: "/app/uploads/" }); // Temporarily save files to '/app/uploads/' folder
const minioClient = require("../minioConfig"); // Assuming you have this set up as per previous instructions

// Handler for getting user profile
exports.getProfile = async (req, res, next) => {
  try {
    console.log("Get Profile Request:", req.user);
    const userId = req.user._id;
    console.log("Looking up user by ID:", userId);

    const user = await User.findById(userId);
    if (!user) {
      console.log("User not found for ID:", userId);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);
    res.json({ profile: user.profile });
  } catch (error) {
    console.error("Error in getProfile:", error);
    next(error);
  }
};
async function ensureBucketExists(bucketName) {
  try {
    let bucketCreated = false;
    // Check if bucket already exists
    const bucketExists = await minioClient.bucketExists(bucketName);
    if (!bucketExists) {
      await minioClient.makeBucket(bucketName);
      console.log("Bucket created");
      bucketCreated = true;
    }

    // Set the bucket policy to allow public read access
    const policy = JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: "*",
          Action: ["s3:GetObject"],
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    });

    await minioClient.setBucketPolicy(bucketName, policy);
    console.log("Bucket policy set to public");

    if (!bucketCreated) {
      console.log("Bucket already exists and policy is updated");
    }
  } catch (error) {
    console.error("Error creating bucket or setting policy:", error);
  }
}

// Handler for editing user profile
exports.editProfile = [
  upload.single("profilePicture"),
  async (req, res, next) => {
    try {
      console.log("Edit Profile Request:", req.user);
      const userId = req.user._id;
      console.log("Looking up user by ID for edit:", userId);

      const user = await User.findById(userId);
      if (!user) {
        console.log("User not found for ID:", userId);
        return res.status(404).json({ message: "User not found" });
      }

      console.log("User found. Current profile:", user.profile);
      console.log("Files received:", req.file);
      console.log("Requested changes:", req.body);

      // Handle profile picture upload if a file is received
      if (req.file) {
        console.log(`File uploaded: ${req.file.originalname}`);
        //const bucketName = 'user-profiles';
        const bucketName = `user-${userId}-profiles`;
        await ensureBucketExists(bucketName); // Ensure the bucket exists before uploading

        const objectName = `profile-pictures/${req.file.originalname}`;
        console.log(`Uploading to MinIO: ${bucketName}/${objectName}`);

        await minioClient.fPutObject(bucketName, objectName, req.file.path, {
          "Content-Type": req.file.mimetype,
        });

        console.log("Upload successful. Updating user profile picture URL.");
        user.profile.profilePicture = `${bucketName}/${objectName}`;
      }

      // Parse videoIntro JSON string before using it
      if (typeof req.body.videoIntro === "string") {
        try {
          req.body.videoIntro = JSON.parse(req.body.videoIntro);
        } catch (e) {
          return res.status(400).json({ message: "Invalid videoIntro format" });
        }
      }

      // Now, you can safely check and assign videoIntro
      if (
        req.body.videoIntro &&
        (req.body.videoIntro.platform || req.body.videoIntro.url)
      ) {
        user.profile.videoIntro = req.body.videoIntro;
      }

      // Apply other updates
      Object.keys(req.body).forEach((key) => {
        if (key !== "videoIntro" && req.body[key] !== undefined) {
          user.profile[key] = req.body[key];
        }
      });

      console.log("Saving updated profile...");
      const updatedUser = await user.save();
      console.log("Updated profile:", updatedUser.profile);

      res.json(updatedUser.profile); // Directly send the profile object

    } catch (error) {
      console.error("Error in editProfile:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
];

module.exports = exports;
