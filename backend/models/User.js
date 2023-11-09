//  User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Professional Development subdocument schema
const professionalDevelopmentSchema = new mongoose.Schema({
    activityType: {
      type: String,
      enum: ['Course', 'Book', 'Seminar', 'Webinar', 'Workshop', 'Conference', 'Certification', 'Other'],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    provider: {
      type: String, // The institution or platform that provided the activity
    },
    description: {
      type: String,
      maxlength: [2000, "The description cannot exceed 2000 characters"],
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    certification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement",
        required: false // Make it optional, as not all professional development activities will have a certification
      },
  });

// Resume subdocument schema
const resumeSchema = new mongoose.Schema({
  objective: {
    type: String,
    maxlength: [1000, "The objective cannot exceed 1000 characters"],
  },
  education: [
    {
      institution: String,
      degree: String,
      fieldOfStudy: String,
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  workExperience: [
    {
      company: String,
      title: String,
      location: String,
      startDate: Date,
      endDate: Date,
      current: {
        type: Boolean,
        default: false,
      },
      description: String,
    },
  ],
  // Reuse the 'skills' array from the user model
  skills: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
    default: [],
  },
  // Reuse the 'projects' array from the user model
  projects: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
    default: [],
  },
  // Reuse the 'achievements' array from the user model for certifications
  certifications: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Achievement" }],
    default: [],
  },
  volunteerWork: [
    {
      organization: String,
      role: String,
      cause: String, // e.g., Environment, Human Rights, Education
      startDate: Date,
      endDate: Date,
      description: String,
    },
  ],
  languages: [
    {
      language: String,
      proficiency: String, // e.g., Native, Fluent, Professional, Elementary
    },
  ],
  interests: [String], // e.g., Chess, Programming, Blogging
});



// Visibility subdocument schema
const visibilitySchema = new mongoose.Schema({
  myProfile: { type: Boolean, default: true },
  myProjects: { type: Boolean, default: true },
  skills: { type: Boolean, default: true },
  certificationsBadges: { type: Boolean, default: true },
  portfolioAnalytics: { type: Boolean, default: true },
  testimonialsReferences: { type: Boolean, default: true },
  unifiedCodeDisplay: { type: Boolean, default: true },
  resume: { type: Boolean, default: true },
});

// ShareToken subdocument schema
const shareTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
  visibility: {
    type: visibilitySchema,
    default: () => ({}), // Default to all true as defined in visibilitySchema
  },
});

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
  // Inside userSchema
  settings: {
    privacy: {
      type: String,
      enum: ["public", "private"],
      default: "private",
    },
    notifications: Boolean,
    profileSlug: {
      type: String,
      unique: true,
      sparse: true,
    },
    shareTokens: [shareTokenSchema], // Now each shareToken has its own visibility settings
    // ... other settings ...
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  lastLogin: Date,
  // You may consider adding additional fields here if needed
});

// Add the resume field to the userSchema
userSchema.add({
    resume: resumeSchema,
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
