// PortfolioController.js
const User = require("../models/User");
const mongoose = require("mongoose");

exports.getPortfolio = async (req, res) => {
  // Log the incoming request
  console.log("Incoming request:", {
    headers: req.headers,
    params: req.params,
    body: req.body,
    user: req.user, // If you are using authentication middleware that adds the user to the request
  });

  try {
    const { identifier } = req.params;
    console.log("Identifier:", identifier); // Debug: Log the identifier

    let user;

    // Try to find by custom slug or share token
    user = await User.findOne({
      $or: [
        { "settings.profileSlug": identifier },
        { "settings.shareToken": identifier },
      ],
    });

    console.log("User found by slug or sharetoken:", user); // Debug: Log the user found

    // Check if the user was found by slug or share token
    if (!user) {
      // If no user was found, it could be an _id
      if (mongoose.Types.ObjectId.isValid(identifier)) {
        user = await User.findById(identifier);
        console.log("User found by ID:", user); // Debug: Log the user found by ID
      }

      // If still not found, return 404
      if (!user) {
        console.log("No user found, returning 404"); // Debug: Log when no user is found
        return res.status(404).send({ message: "Portfolio not found." });
      }
    }

    // If the user is authenticated and their ID matches the user data being accessed
    if (req.user && req.user._id.equals(user._id)) {
      console.log("Authenticated user matches the portfolio user"); // Debug: Log when user matches

      // Check if the portfolio is private
      if (user.settings.privacy === "private") {
        console.log("Portfolio is private, returning private data"); // Debug: Log when portfolio is private
        return res.json({
          isPrivate: user.settings.privacy === "private",
          message:
            "This portfolio is private but you are the owner, all fields are only visible to you while logged in.",
            dateJoined: user.dateJoined,
            profile: {
              fullName: user.profile.fullName,
              profilePicture: user.profile.profilePicture,
              bio: user.profile.bio,
              roleTitle: user.profile.roleTitle,
              location: user.profile.location,
              phone: user.profile.phone,
              videoIntro: user.profile.videoIntro,
              projects: user.profile.projects,
              skills: user.profile.skills,
              achievements: user.profile.achievements
            },
            skillsAssessment: user.skillsAssessment,
            testimonials: user.testimonials,
            analytics: user.analytics,
            repositories: user.repositories,
      
            resume: user.resume,
          // ... other fields you want to include
        });
      }

      // Check privacy settings for non-authenticated or different user
      if (
        user.settings.privacy === "private" &&
        identifier !== user.settings.shareToken
      ) {
        console.log("Portfolio is private, accessed by non-owner"); // Debug: Log when accessed by non-owner
        return res.status(403).send({ message: "This portfolio is private." });
      }

      // Return all data for the logged-in user, except sensitive fields
      console.log("Returning public data for the user"); // Debug: Log when returning public data
      return res.json({
        isPrivate: false,
        email: user.email,
        dateJoined: user.dateJoined,
        profile: {
          fullName: user.profile.fullName,
          profilePicture: user.profile.profilePicture,
          bio: user.profile.bio,
          roleTitle: user.profile.roleTitle,
          location: user.profile.location,
          phone: user.profile.phone,
          videoIntro: user.profile.videoIntro,
          projects: user.profile.projects,
          skills: user.profile.skills,
          achievements: user.profile.achievements,
        },
        skillsAssessment: user.skillsAssessment,
        testimonials: user.testimonials,
        analytics: user.analytics,
        repositories: user.repositories,
        resume: user.resume,
        // ... other fields you want to include
      });
    } else {
      // Handle non-authenticated users
      if (
        user.settings.privacy === "private" &&
        identifier !== user.settings.shareToken
      ) {
        console.log(
          "Portfolio is private, accessed by non-owner without authentication"
        );
        return res.status(403).send({ message: "This portfolio is private." });
      }

      // Return public data for non-authenticated users
      console.log("Returning public data for non-authenticated user");
      return res.json({
        isPrivate: false,
        dateJoined: user.dateJoined,
        profile: {
          fullName: user.profile.fullName,
          profilePicture: user.profile.profilePicture,
          bio: user.profile.bio,
          roleTitle: user.profile.roleTitle,
          location: user.profile.location,
          phone: user.profile.phone,
          videoIntro: user.profile.videoIntro,
          projects: user.profile.projects,
          skills: user.profile.skills,
          achievements: user.profile.achievements
        },
        skillsAssessment: user.skillsAssessment,
        testimonials: user.testimonials,
        analytics: user.analytics,
        repositories: user.repositories,
  
        resume: user.resume,
        // ... other public fields you want to include
      });
    }
  } catch (error) {
    console.error("Error in getPortfolio:", error); // Debug: Log any errors
    return res.status(500).send({ message: error.message });
  }
};
