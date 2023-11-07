//  User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    fullName: String,
    profilePicture: String,
    bio: {
      type: String,
      maxlength: [2000, "The bio cannot exceed 2000 characters"],
    },
    roleTitle: {
      type: String,
      required: false, // Assuming the role title is required
    },
    location: {
      type: String,
      required: false, // Assuming the location is required
    },
    phone: {
      type: String,
      required: false, // Phone is not required by default
    },
    videoIntro: {
      platform: {
        type: String,
        required: false, // Explicitly marking it as not required
      },
      url: {
        type: String,
        required: false, // Explicitly marking it as not required
      },
    },
    projects: [
      {
        title: String,
        description: String,
        images: [String],
        videoDemo: {
          platform: String,
          url: String,
        },
        repositoryLinks: [String],
        technologies: [String],
        liveDemo: String,
      },
    ],
    skills: [
      {
        name: String,
        endorsements: [
          {
            endorsedBy: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User",
            },
            dateEndorsed: Date,
          },
        ],
      },
    ],
    achievements: [
      {
        badge: String,
        description: String,
        issuedBy: String,
        dateIssued: Date,
        verificationLink: String,
      },
    ],
  },
  skillsAssessment: {
    quizzesTaken: [
      {
        quizName: String,
        score: Number,
        percentile: Number,
        dateTaken: Date,
      },
    ],
  },
  testimonials: [
    {
      authorName: String,
      relationship: String,
      testimonial: String,
      dateGiven: Date,
    },
  ],
  analytics: {
    visitCounts: Number,
    visitorDemographics: [
      {
        country: String,
        visits: Number,
      },
    ],
  },
  repositories: [
    {
      platform: String,
      repoUrl: String,
    },
  ],
  settings: {
    privacy: String, // Keep existing privacy settings but you might want to extend this
    notifications: Boolean,
    // You can add additional settings here if needed
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  lastLogin: Date,
  // You may consider adding additional fields here if needed
});

// Middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
