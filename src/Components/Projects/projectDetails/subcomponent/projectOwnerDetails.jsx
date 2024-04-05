import { useEffect, useState } from "react";
import LabelValueBox from "./labelValueBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";

const ProjectOwnerDetails = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    setSocialMedia((prev) => {
      try {
        return JSON.parse(details?.project?.org_social_links);
      } catch {
        return null;
      }
    });
  }, [details]);

  console.log(socialMedia);

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
        <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <div>
            <p className="projectOwnerSubHeading">Organization details</p>
          </div>
          <div
            className="projectOwnerSection"
            style={{
              backgroundImage:
                "linear-gradient(243.83deg, #D4F6D6 0%, #FFFFFF 97.91%)",
              flexGrow: "1",
            }}
          >
            <LabelValueBox label="Name" value={details?.project?.org_name} />
            <LabelValueBox
              label="Description"
              value={details?.project?.org_description}
            />{" "}
            <LabelValueBox
              label="Address"
              value={details?.project?.org_address}
            />{" "}
            <LabelValueBox
              label="Country"
              value={details?.project?.org_country}
            />{" "}
            <LabelValueBox
              label="Area Code"
              value={details?.project?.org_pin_code}
            />{" "}
            <LabelValueBox
              label="Website"
              value={details?.project?.org_website}
            />{" "}
            <LabelValueBox
              label="Reg. Id"
              value={details?.project?.org_reg_id}
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
                {socialMedia?.instagram && (
                  <a href={socialMedia?.instagram} target="_blank">
                    {" "}
                    <img src="/Component 6.png" alt="Instagram" />
                  </a>
                )}
                {socialMedia?.linkedin && (
                  <a
                    href={socialMedia?.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src="/Component 7.png" alt="LinkedIn" />
                  </a>
                )}
                {socialMedia?.twitter && (
                  <a href={socialMedia?.twitter} target="_blank">
                    {" "}
                    <img src="/Component 8.png" alt="Twitter" />
                  </a>
                )}
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
                src={details?.project?.picture}
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
            <LabelValueBox label="Phone" value={details?.project?.phone} />{" "}
            <LabelValueBox
              label="Designation"
              value={details?.project?.designation}
            />
            <LabelValueBox label="NIN" value={details?.project?.nin} />
            {/* <LabelValueBox
              label="Wallet"
              value={details?.project?.owner?.representative?.wallet}
            /> */}
          </div>
        </div>
      </div>
      {/* {isOwnerView && (
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
      )} */}
    </div>
  );
};
export default ProjectOwnerDetails;
