import "./profile.css";
const ProfilePicture = ({ script }) => {
  return (
    <div className="profileMainDiv">
      <div className="profileSubContainer">
        <div className="coverPicContainer">
          <div className="profilePicContainer">
            <img
              src={script.account?.picture}
              alt="profile pic"
              style={{
                borderRadius: "50%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
            />
            <p
              style={{
                marginTop: "10px",
                fontSize: "22px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {script?.user?.first_name} {script?.user?.last_name}
            </p>
            <p
              style={{
                fontSize: "17px",
                textAlign: "center",
              }}
            >
              {script?.account?.designation}
            </p>
            <p
              style={{
                fontSize: "13px",
                textAlign: "center",
              }}
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
                <span onClick={() => window.open(script?.account?.nin_proof)}>
                  uploaded File
                </span>
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
                  onClick={() => window.open(script?.account?.signed_note)}
                >
                  Signed Note from Organization:
                </span>{" "}
                <span onClick={() => window.open(script?.account?.signed_note)}>
                  upload File
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
