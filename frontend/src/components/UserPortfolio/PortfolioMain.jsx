import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const getPlatformIcon = (platform) => {
    const icons = {
      GitHub: "fab fa-github",
      GitLab: "fab fa-gitlab",
      Bitbucket: "fab fa-bitbucket",
      "Azure DevOps": "fas fa-code-branch", // Default to a generic code-related icon
      "AWS CodeCommit": "fab fa-aws",
      "Google Cloud Source Repositories": "fab fa-google",
      "Atlassian Stash": "fab fa-bitbucket", // Now known as Bitbucket Server
      // Add more platforms and corresponding icons here
    };
    return icons[platform] || "fas fa-code-branch"; // Default icon for platforms without a specific icon
  };

  const { profile, resume, repositories } = useSelector(
    (state) => state.userPortfolio.data
  );

  const languages =
    resume?.languages
      ?.map((lang) => `${lang.language} (${lang.proficiency})`)
      .join(", ") ?? "Languages not available";
  const fullName = profile?.fullName ?? "Name not available";
  const bio = profile?.bio ?? "Bio not available";
  const roleTitle = profile?.roleTitle ?? "Role not specified";
  const profilePictureUrl = `http://localhost:9000/${profile?.profilePicture}`;

  const formatDate = (date) => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="container my-4">
      {/* Flex Container */}
      <div className="d-flex flex-wrap justify-content-between">
        {/* Personal Information */}
        <div className="row mb-4">
          {/* Bio Column */}
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{bio}</p>
              </div>

              {/* Skills as Bootstrap Badges */}

              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <b className="card-title">Skills</b>
                    <div>
                      {resume?.skills?.map((skill) => (
                        <span key={skill._id} className="badge bg-primary me-2">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Picture Column */}
          {profile?.profilePicture && (
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="img-fluid mb-3"
                  />
                  {/* Message Button */}
                  <button type="button" className="btn btn-primary w-100">
                    <i className="fas fa-envelope me-2"></i> Message{" "}
                    {profile?.fullName}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Work Experience */}
        <div className="row mb-4">
          {/* Left Column with 'Coming Soon' Text */}
          {resume?.education && resume.education.length > 0 && (
            <div className="col-md-6">
              {/* Projects */}
              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Projects</h3>
                    {resume?.projects?.map((project) => (
                      <div key={project._id}>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Education</h3>
                    {resume.education.map((edu) => (
                      <div key={edu._id}>
                        <h4>{edu.institution}</h4>
                        <p>{edu.degree}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Repositories */}

              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Repositories</h4>
                    {repositories?.map((repo) => (
                      <span
                        key={repo._id}
                        className="badge bg-secondary me-2 mb-2"
                      >
                        <i
                          className={`${getPlatformIcon(repo.platform)} me-2`}
                        ></i>
                        <a
                          href={repo.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none text-white"
                        >
                          {repo.platform}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column with Work Experience */}
          <div className="col-md-6">
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">Work Experience</h4>
      {resume?.workExperience?.map((exp) => (
        <div key={exp._id} className="border-bottom pb-3 mb-3">
          <b>
            {exp.title} at {exp.company}
          </b>
          <p className="text-muted text-small my-0">
            {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
          </p>
          <p className="my-0">{exp.description.split(".")[0] + '...'}</p>
        </div>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default UserInfo;
