const User = require("../models/User"); // Adjust path as necessary

class ResumeDataHandler {
  constructor(userId, resumeData) {
    this.userId = userId;
    const stringifiedData = JSON.stringify(resumeData);
    this.resumeData = JSON.parse(stringifiedData);
    console.log("Keys in resumeData:", Object.keys(this.resumeData));
    console.log(
      "Resume data received in ResumeDataHandler:",
      this.resumeData.resume
    );
  }

  async processAndSaveResume() {
    console.log(
      "this.resumeData.resume data before processing:",
      this.resumeData.resume
    );
    console.log("Resume data before processing:", this.resumeData);

    // Explicitly checking for null or undefined
    if (
      this.resumeData.resume === null ||
      this.resumeData.resume === undefined
    ) {
      console.error("this.resumeData.resume is null or undefined");
      throw new Error(
        "Invalid resume data - this.resumeData.resume is null or undefined"
      );
    }

    if (!this.resumeData.resume) {
      throw new Error("Invalid resume data");
    }
    try {
      console.log(
        "Starting to process and save resume for user ID:",
        this.userId
      );

      const user = await User.findById(this.userId);
      if (!user) {
        throw new Error("User not found");
      }

      console.log("Found user. Processing resume data:", this.resumeData);

      this.processPersonalDetails(user);
      this.processEducation(user);
      this.processWorkExperience(user);
      this.processSkills(user);
      this.processProjects(user);
      this.processCertifications(user);
      this.processLanguages(user);

      await user.save();
    } catch (error) {
      console.error("Error processing and saving resume:", error);
    }
  }

  processPersonalDetails(user) {
    console.log(
      "Processing personal details:",
      this.resumeData.resume.personalDetails
    );

    console.log(
      "Processing personal details:",
      this.resumeData.resume.personalDetails
    );
    console.log("Processing personal details:", this.resumeData.resume);
    console.log(
      "User object before updating personal details:",
      JSON.stringify(user, null, 2)
    );

    const pd = this.resumeData.resume.personalDetails;
    if (pd) {
      console.log("Phone:", pd.phone);
      console.log("Location:", pd.location);

      user.profile.phone = pd.phone || user.profile.phone;
      user.profile.location = pd.location || user.profile.location;
      console.log("Updated user personal details:", user.profile);
    } else {
      console.log("No personal details found in resume data.");
    }
  }

  processEducation(user) {
    // Ensure user.resume is initialized
    if (!user.resume) {
      user.resume = {}; // or set it to some default structure if necessary
    }

    if (
      this.resumeData.resume &&
      Array.isArray(this.resumeData.resume.education)
    ) {
      user.resume.education = this.resumeData.resume.education.map((edu) => ({
        institution: edu.institution,
        degree: edu.degree,
        fieldOfStudy: edu.fieldOfStudy,
        startDate: edu.startDate,
        endDate: edu.endDate,
        description: edu.description,
      }));
    }
  }

  processWorkExperience(user) {
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.workExperience)) {
      user.resume.workExperience = this.resumeData.resume.workExperience.map((exp) => ({
        company: exp.company,
        title: exp.title,
        location: exp.location,
        startDate: exp.startDate,
        endDate: exp.endDate,
        current: Boolean(exp.current), // Ensure it's a boolean
        description: exp.description,
      }));
    }
  }
  

  processSkills(user) {
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.skills)) {
      user.resume.skills = this.resumeData.resume.skills.map(skill => ({
        name: skill.name,
        level: skill.level,
        yearsOfExperience: skill.yearsOfExperience,
      }));
    }
  }

  processProjects(user) {
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.projects)) {
      user.resume.projects = this.resumeData.resume.projects.map(project => ({
        title: project.title,
        description: project.description,
        role: project.role,
        technologies: project.technologies,
        startDate: project.startDate,
        endDate: project.endDate,
        url: project.url
      }));
    }
  }
  

  processCertifications(user) {
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.certifications)) {
      user.resume.certifications = this.resumeData.resume.certifications.map(cert => ({
        name: cert.name,
        authority: cert.authority,
        dateObtained: cert.dateObtained,
        validUntil: cert.validUntil,
        credentialID: cert.credentialID,
        credentialURL: cert.credentialURL
      }));
    }
  }
  

  processLanguages(user) {
    if (
      this.resumeData.resume &&
      Array.isArray(this.resumeData.resume.languages)
    ) {
      user.resume.languages = this.resumeData.resume.languages.map((lang) => ({
        language: lang.language,
        proficiency: lang.proficiency,
      }));
    }
  }

  processRepositories(user) {
    // Check if the repositories data is present and is an array
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.repositories)) {
      user.repositories = this.resumeData.resume.repositories.map(repo => ({
        platform: repo.platform,
        repoUrl: repo.repoUrl
        // Add other necessary fields here
      }));
    } else {
      console.log("No repository data found in resume data.");
    }
  }

  processTestimonials(user) {
    // Check if the testimonials data is present and is an array
    if (this.resumeData.resume && Array.isArray(this.resumeData.resume.testimonials)) {
      user.testimonials = this.resumeData.resume.testimonials.map(testimonial => ({
        authorName: testimonial.authorName,
        relationship: testimonial.relationship,
        testimonial: testimonial.testimonial,
        dateGiven: testimonial.dateGiven
        // Add other necessary fields here
      }));
    } else {
      console.log("No testimonials data found in resume data.");
    }
  }
  
  

  // ... other processing functions for additional sections, if any.
}

module.exports = ResumeDataHandler;
