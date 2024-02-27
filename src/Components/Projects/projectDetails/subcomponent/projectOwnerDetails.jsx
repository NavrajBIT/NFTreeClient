import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";

const ProjectOwnerDetails = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  const socials =
    details?.project?.owner?.organization?.social_links?.split(",");
  return (
    <div className="projectOwnerDetailsContainer">
      <div>
        <p
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Project Owner Details
        </p>
      </div>
      <div className="projectOwnerDetails">
        <div className="orgDetailsContainer">
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "1.3rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Organization details
          </p>
          <div className="orgDetailsBox">
            <div className="orgLabelBox">
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Name
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.name}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Description
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.description}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Address
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.address}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Country
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.country}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Area Code
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.pin_code}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Website
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.website}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Reg ID
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.organization?.reg_id}
                </p>
              </div>

              <div className="socialMediaIconsBox">
                <div style={{ display: "flex" }}>
                  <p
                    style={{
                      width: "50%",
                      fontSize: "1rem",
                    }}
                  >
                    Socials
                  </p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {socials?.map((link, index) => (
                      <img
                        src="/Component 6.png"
                        alt="insta"
                        key={`project-social-${index}`}
                        onClick={() => window.open(link)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="repDetailsContainer">
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "1.3rem",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Representative details
          </p>
          <div className="repDetailsBox">
            <div className="repProfile">
              <div
                style={{
                  width: "50%",
                }}
              >
                <img
                  src={
                    details?.project?.owner?.representative?.picture
                      ? `http://localhost:8000${details?.project?.owner?.representative?.picture}`
                      : "/profilePics.png"
                  }
                  alt="profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "1.3rem",
                  }}
                >
                  {details?.project?.owner?.representative?.first_name}{" "}
                  {details?.project?.owner?.representative?.last_name}
                </p>
              </div>
            </div>
            <div className="repLabelBox">
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.representative?.email}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Phone
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.representative?.phone}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Designation
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.representative?.designation}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  NIN
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.representative?.nin}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                  }}
                >
                  Wallet
                </p>
                <p
                  style={{
                    width: "50%",
                    fontSize: "1rem",
                    color: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {details?.project?.owner?.representative?.wallet}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOwnerView && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <ProjectPageButton
            text="Edit Owner Details"
            icon={"/EditIcon.png"}
            onClick={() => navigate("/profile")}
          />
        </div>
      )}
    </div>
  );
};
export default ProjectOwnerDetails;
