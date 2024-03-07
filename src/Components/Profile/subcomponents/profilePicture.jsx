import "./profile.css";
const ProfilePicture = ({ script }) => {
  const defaultProfilePicture = "/user.svg";
  // const hasProjects = script?.myprojects && script.myprojects.length === 0;


  return (
    <div className="profileMainDiv">
      <div className="profileSubContainer">
        <div className="coverPicContainer">
          <div className="profilePicContainer">
            <div className="profilePic">
              <img
                src={script.account?.picture || defaultProfilePicture}
                alt="profile pic"
              />
            </div>
            <p className="PName">
              {script?.user?.first_name} {script?.user?.last_name}
            </p>
            <p className="PDesignation">
              {script?.account?.designation}
            </p>
            <p className="PEmail">
              {script?.user?.email}
            </p>
          </div>
        </div>
{/* 
        {!hasProjects && (
          <div className="personalDetailsMainBox">
            <div className="organizationDetails">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // alignItems: "center"
                }}
              >
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "700",
                  }}
                >
                  Organization
                </p>
                <img
                  className="orgImg"
                  src="/Edit2.png"
                  alt="Edit"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </div>

              <div>
                <p
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {script?.organization?.name}
                </p>
                <p
                // style={{
                //   marginTop: "0.5rem",
                // }}
                >
                  {script?.organization?.description}
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Website:
                  </span>
                  {script?.organization?.website}
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Address:
                  </span>{" "}
                  <span>{script?.organization?.address}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Country:
                  </span>{" "}
                  <span>{script?.organization?.country}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Area Code:
                  </span>{" "}
                  <span>{script?.organization?.pin_code}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Reg. Id:
                  </span>{" "}
                  <span>{script?.organization?.reg_id}</span>
                </p>
              </div>
            </div>
            <div className="personalDetails">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "700",
                  }}
                >
                  Profile Info
                </p>
                <img
                  src="/Edit2.png"
                  alt="Edit"
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "1rem",
                }}
              >
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Email:
                  </span>{" "}
                  <span>{script?.user?.email}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Designation:
                  </span>{" "}
                  <span>{script?.account?.designation}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Phone no:
                  </span>{" "}
                  <span>{script?.account?.phone}</span>
                </p>
                <p
                  className="personalP"
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    NIN:
                  </span>{" "}
                  <span>{script?.account?.nin}</span>
                </p>
              </div>
            </div>
          </div>
        )}
        {hasProjects && (
          <div className="noProjectsMessage">
        
          </div>
        )}  
       */}
       
      </div>
    </div>
  );
};

export default ProfilePicture;
