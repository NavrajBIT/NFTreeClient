import LabelValueBox from "./labelValueBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";

const ProjectOwnerDetails = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  const socials =
    details?.project?.owner?.organization?.social_links?.split(",");
  return (
    <div className="projectOwnerDetailsContainer">
      <div>
        <h1 className="projectHeading">Owner Details</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3rem 2rem",
        }}
        className="Responsiveflex1150 projectOwnerSectionPadding"
      >
        <div style={{ width: "45%" }}>
          <div>
            <p className="projectOwnerSubHeading">Organization details</p>
          </div>
          <div
            className="projectOwnerSection"
            style={{
              backgroundImage:
                "linear-gradient(243.83deg, #D4F6D6 0%, #FFFFFF 97.91%)",
            }}
          >
            <LabelValueBox
              label="Name"
              value={details?.project?.owner?.organization?.name}
            />
            <LabelValueBox
              label="Description"
              value={details?.project?.owner?.organization?.description}
            />{" "}
            <LabelValueBox
              label="Address"
              value={details?.project?.owner?.organization?.address}
            />{" "}
            <LabelValueBox
              label="Country"
              value={details?.project?.owner?.organization?.country}
            />{" "}
            <LabelValueBox
              label="Area Code"
              value={details?.project?.owner?.organization?.pin_code}
            />{" "}
            <LabelValueBox
              label="Website"
              value={details?.project?.owner?.organization?.website}
            />{" "}
            <LabelValueBox
              label="Reg. Id"
              value={details?.project?.owner?.organization?.reg_id}
            />
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                >
                  Social Media
                </p>
              </div>
              <div className="socialMediaIcons">
                <img src="/Component 6.png" alt="Instagram" />
                <img src="/Component 7.png" alt="LinkedIn" />
                <img src="/Component 8.png" alt="Twitter" />
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{
            background: "rgba(54, 142, 0, 0.4)",
            width: "2px",
            border: "none",
          }}
        />

        <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <div>
            <p className="projectOwnerSubHeading">Representative details</p>
          </div>
          <div
            className="projectOwnerSection"
            style={{
              backgroundImage:
                "background: linear-gradient(62.13deg, #D1F6D4 24.4%, #FFFFFF 98.67%)",
              padding: "20px",
              flexGrow: "1",
              justifyContent: "center",
              padding: "5% 15%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                margin: "5% 0",
                gap: "10px",
              }}
              className="Responsiveflex900"
            >
              <img
                src={`http://localhost:8000${details?.project?.owner?.representative?.picture}`}
                alt="profile"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid green",
                }}
                onError={(e) => {
                  console.log(e);
                  e.target.src = "/userprofile.png";
                }}
              />

              <h1 style={{ fontWeight: "400" }}>
                {details?.project?.owner?.representative?.first_name}{" "}
                {details?.project?.owner?.representative?.last_name}
              </h1>
            </div>
            <LabelValueBox
              label="E-mail"
              value={details?.project?.owner?.representative?.email}
            />{" "}
            <LabelValueBox
              label="Phone"
              value={details?.project?.owner?.representative?.phone}
            />{" "}
            <LabelValueBox
              label="Designation"
              value={details?.project?.owner?.representative?.designation}
            />
            <LabelValueBox
              label="NIN"
              value={details?.project?.owner?.representative?.nin}
            />
            <LabelValueBox
              label="Wallet"
              value={details?.project?.owner?.representative?.wallet}
            />
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
