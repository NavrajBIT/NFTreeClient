import "./userView.css";
import LabelValueBox from "./labelValueBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";
const ProjectDetails = ({ isOwnerView, details }) => {
  console.log(details?.project?.date);
  let projectage = "00/00/0000";

  if (details?.project?.date) {
    const dateOfBirth = new Date(details?.project?.date);
    const currentDate = new Date();
    const differenceMs = currentDate - dateOfBirth;
    const ageInYears = differenceMs / (1000 * 60 * 60 * 24 * 365.25);
    const years = Math.floor(ageInYears);
    const months = Math.floor((ageInYears - years) * 12);
    const days = Math.floor((ageInYears - years) * 365.25 - months * 30.4375);
    const formattedAge = `${months} months`;
    projectage = formattedAge;
  }

  return (
    <div style={{ padding: "5%" }}>
      <h1 className="projectHeading">Project Details</h1>
      <div
        style={{
          display: "flex",
          padding: "30px 0",
        }}
        className="Responsiveflex900"
      >
        <div
          style={{
            width: "50%",
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <LabelValueBox
            label="Project Type"
            value={
              details?.project?.type === 1
                ? "Monitoring & Reporting"
                : details?.project?.type === 2
                ? "Donation & Monitoring"
                : "Investment & Monitoring"
            }
          />
          {details?.project?.type == 3 && (
            <LabelValueBox
              label="Investment Type"
              value={details?.project?.investment_type}
            />
          )}
          <LabelValueBox
            label="Total Plantation Area (hect.)"
            value={details?.project?.area}
          />
          <LabelValueBox label="Project Age" value={projectage} />
          {details?.project?.type === 2 && (
            <LabelValueBox
              label="Donation CostPer Plant ($)"
              value={details?.project?.donation}
            />
          )}

          <LabelValueBox
            label={`Cost Per Plant ${details?.project?.currency}`}
            value={details?.project?.donation}
          />

          <LabelValueBox
            label="Total Number Of Plants Planned"
            value={details?.project?.plant_planned}
          />
        </div>
        <hr
          style={{
            background: "rgba(54, 142, 0, 0.4)",
            width: "2px",
            border: "none",
          }}
        />
        <div
          style={{
            width: "50%",
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* <LabelValueBox
            label="Full Address"
            value={details?.project?.address}
          /> */}
          <LabelValueBox label="State" value={details?.project?.city} />
          <LabelValueBox label="Country" value={details?.project?.country} />
          {/* <LabelValueBox
            label="Area Pin Code"
            value={details?.project?.pin_code}
          /> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "space-evenly",
        }}
      >
        <p className="projectsDetailAttribute">Type of Plants</p>

        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {details?.project?.species?.species?.map((specie, index) => (
            <div style={{ display: "flex" }}>
              <p
                style={{
                  fontWeight: "300",
                  fontSize: "1rem",
                  width: "55%",
                  textTransform: "capitalize",
                }}
                key={`specie-label-${index}`}
              >
                {specie.plant}
              </p>
              <p
                style={{
                  fontWeight: "300",
                  fontSize: "1rem",
                }}
              >
                {" "}
                {specie.percentage}%
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          padding: "30px 0",
        }}
      >
        <div
          style={{
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <LabelValueBox
            label={"Project Coordinates"}
            value={details?.project?.coordinates}
          />

          {details?.project?.type === 3 && (
            <LabelValueBox
              label={"Revenue Distribution Details"}
              value={details?.project?.revenue_dist_details}
            />
          )}
          {/* {details?.project?.type === 3 && (
            <LabelValueBox
              label={"Upcoming Revenue Dirtribution Date"}
              value={details?.project?.revenue_dist_date}
            />
          )} */}
          {details?.project?.type === 3 && (
            <LabelValueBox
              label={"Expected Carbon Credits"}
              value={`${details?.project?.expected_carbon_credits}`}
            />
          )}
        </div>
      </div>
      {/* {isOwnerView && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ProjectPageButton
            text="Edit Report"
            icon={"/EditIcon.png"}
            onClick={() => navigate(`/myprojects/${details?.projectId}/update`)}
          />
        </div>
      )} */}
    </div>
  );
};

export default ProjectDetails;
