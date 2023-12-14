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
  const profilePictureUrl = profile?.profilePicture
  ? `${process.env.REACT_APP_S3_BASE_URL}/${profile.profilePicture}`
  : null;

  const formatDate = (date) => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="container bg-grey">
      {/* Flex Container */}
      <div className=" justify-content-between w-100">
        {/* Personal Information */}
        <div className="row flex-row">
          {/* Bio Column */}
          <div
            className="col-12 col-md d-flex flex-column align-items-end ps-0 "
            style={{ marginBottom: "-2px" }}
          >
            <div className="card">
              <div className="card-body mb-0 pb-3">
                <b className="card-title">About</b>

                <p className="card-text">{bio}</p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md d-flex flex-column align-items-end ps-0 pe-1"
            style={{ marginBottom: "-2px" }}
          >
            <div className="card">
              {/* Skills as Bootstrap Badges */}

              <div className="mb-4">
                <div className="">
                  <div className="card-body mt-0 pt-3 pb-0">
                    <b className="card-title ">Skills</b>
                    <div>
                      {resume?.skills?.map((skill) => (
                        <span key={skill._id} className="badge bg-primary me-2">
                          {skill.name}
                        </span>
                      ))}
                    </div>

                    <div className="mb-3 mt-2">
                      <b className="card-title">Repos</b>

                      <div className="">
                        {repositories?.map((repo) => (
                          <span
                            key={repo._id}
                            className="badge bg-secondary me-2 mb-2"
                          >
                            <i
                              className={`${getPlatformIcon(
                                repo.platform
                              )} me-2`}
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
                    {/* Download Resume Button */}
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary w-100"
                    >
                      <i className="fas fa-download me-2"></i> Download Resume
                    </button>

                
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Picture Column */}
          {profile?.profilePicture && (
            <div className="col-12 col-md d-flex flex-column align-items-start pe-0 ps-2"
            style={{ marginBottom: "-2px" }}
            >
              <div className="card">
                <div className="card-body text-center">
                  <img
                    src={profilePictureUrl}
                    alt="Profile"
                    className="img-fluid mb-3"
                  />

                  {/* Container for buttons */}
                      {/* Message Button */}

                      <button
                      type="button"
                      className="btn btn-sm btn-primary w-100 mt-3"
                    >
                      <i className="fas fa-envelope me-2 "></i> Message
                    </button>
                </div>

                {/* Repositories */}
              </div>
            </div>
          )}
        </div>

        <div
          class="row bg-dark text-white p-3 small gx-2"
          style={{ marginLeft: "-16px", marginRight: "-16px" }}
        >
          <div class="col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col">
            <i class="fas fa-certificate me-2"></i> Devgree Ethical Hacker
            Assessment
            <div>
              <hr></hr>
              <i class="fas fa-check-circle me-1"></i>Passed on 01/01/2021
            </div>
          </div>

          <div class="col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col">
            <i class="fas fa-certificate me-2"></i> Devgree Network Associate
            Assessment
            <div>
              <hr></hr>
              <i class="fas fa-check-circle me-1"></i>Passed on 02/01/2021
            </div>
          </div>

          <div class="col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col">
            <i class="fas fa-certificate me-2"></i> Devgree: Data Analyst
            Assessment
            <div>
              <hr></hr>
              <i class="fas fa-check-circle me-1"></i>Passed on 03/01/2021
            </div>
          </div>

          <div class="col-md-3 m-2 p-2 custom-border bg-custom text-center custom-col">
            <i class="fas fa-certificate me-2"></i> Devgree Solutions Assessment
            <div>
              <hr></hr>
              <i class="fas fa-check-circle me-1"></i>Passed on 04/01/2021
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="row  bg-dark">
          {/* Left Column with 'Coming Soon' Text */}
          {resume?.education && resume.education.length > 0 && (
            <div className="col-md-6 ps-0 pe-0">
              {/* Projects */}
              <div className="mb-0">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Projects</h4>
                    {resume?.projects?.map((project) => (
                      <div key={project._id}>
                        <a className="text-green" href="">{project.title}</a>
                       <p> <span class="badge bg-primary me-2">JavaScript</span><span class="badge bg-primary me-2">ReactJS</span><span class="badge bg-primary me-2">Node.js</span><span class="badge bg-primary me-2">PHP</span><span class="badge bg-primary me-2">MySQL</span><span class="badge bg-primary me-2">MongoDB</span><span class="badge bg-primary me-2">AWS Lambda</span><span class="badge bg-primary me-2">Laravel</span><span class="badge bg-primary me-2">MVC</span><span class="badge bg-primary me-2">OOP</span><span class="badge bg-primary me-2">Bootstrap</span><span class="badge bg-primary me-2">Express.js</span><span class="badge bg-primary me-2">REST</span><span class="badge bg-primary me-2">SQLite</span><span class="badge bg-primary me-2">GraphQL</span><span class="badge bg-primary me-2">passport.js</span><span class="badge bg-primary me-2">APIs</span>
                       </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Education</h4>
                    {resume.education.map((edu) => (
                      <div key={edu._id}>
                        <b>{edu.institution}</b>
                        <p>{edu.degree}</p>
                        <hr></hr>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div class="responsive-iframe">
                <iframe
                  src="https://www.youtube.com/embed/gyFaBZ_BQhc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Right Column with Work Experience */}
          <div className="col-md-6  pe-0 ps-0 mt-3">
            <div className="card bg-green text-white">
              <div className="card-body">
                <b className="card-title">Employment History</b>
                {resume?.workExperience?.map((exp) => (
                  <div key={exp._id} className="border-bottom pb-3 mb-3">
                    <b>
                      {exp.title} at {exp.company}
                    </b>
                    <p className="text-small my-0">
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current ? "Present" : formatDate(exp.endDate)}
                    </p>
                    <p className="my-0 small">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col bg-dark text-white">
          <h2 className="text-center my-4">Testimonials</h2>
          <div className="d-flex justify-content-center align-items-start flex-wrap">
            {/* Verified Testimonial 1 */}
            <div className="card m-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Jane Doe</h5>
                <h6 className="card-subtitle mb-2 text-success">
                  Verified Reference
                </h6>
                <p className="card-text">
                  "Their professionalism and attention to detail are unmatched.
                  Fantastic work!"
                </p>
                <div className="text-warning">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>

            {/* Unverified Testimonial 2 */}
            <div className="card m-2" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">John Smith</h5>
                <p className="card-text">
                  "I had a great experience working with this team. Their
                  creativity is top-notch!"
                </p>
                {/* No stars for unverified testimonials */}
              </div>
            </div>

            {/* More testimonials follow... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
