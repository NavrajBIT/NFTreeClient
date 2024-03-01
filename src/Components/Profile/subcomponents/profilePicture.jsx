import "./profile.css";
const ProfilePicture = ({ script }) => {
  return (
    <div className="profileMainDiv">
      <div className="profileSubContainer">
        <div className="coverPicContainer">
          <div className="profilePicContainer">
            <div style={{ zIndex: "-1" }}>
              <img
                src={script.account?.picture}
                alt="profile pic"
              />
            </div>
            <p className="PName"
            >
              {script?.user?.first_name} {script?.user?.last_name}
            </p>
            <p
              className="PDesignation"
            >
              {script?.account?.designation}
            </p>
            <p
              className="PEmail"

            >
              {script?.user?.email}
            </p>
          </div>
        </div>
        <div className="personalDetailsMainBox">
          <div className="organizationDetails">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                Organization
              </p>
              <img
                src="Edit2.png"
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
                style={{
                  fontWeight: "600",
                }}
              >
                {script?.organization?.name}
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                }}
              >
                {script?.user?.organization?.description}
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Website:
                </span>
                {script?.user?.website}
              </p>
              <p
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
                  fontSize: "1.2rem",
                  fontWeight: "700",
                }}
              >
                Profile Info
              </p>
              <img
                src="Edit2.png"
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
                  Ph no:
                </span>{" "}
                <span>{script?.account?.phone}</span>
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  National Identification Number(NIN):
                </span>{" "}
                <span>{script?.account?.nin}</span>
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  display:'flex',
                  gap:'5px'
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                  onClick={() => window.open(script?.account?.nin_proof)}
                >
                  {" "}
                  Proof of NIN:
                </span>{" "}
                <span style={{gap:"5px", display:'flex',alignItems:'center'}} onClick={() => window.open(script?.account?.nin_proof)}>
                  upload File<img src="/upload.png" />
                </span>
              </p>
              <p
                style={{
                  marginTop: "0.5rem",
                  display:'flex',
                  gap:'5px'
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                  }}
                  onClick={() => window.open(script?.account?.signed_note)}
                >
                  Signed Note from Organization:
                </span>{" "}
                <span  style={{gap:"5px", display:'flex',alignItems:'center'}} onClick={() => window.open(script?.account?.signed_note)}>
                  upload File<img src="/upload.png" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
