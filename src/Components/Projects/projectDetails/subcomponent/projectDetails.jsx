import "./userView.css";
import LabelValueBox from "./labelValueBox";
import ProjectPageButton from "./projectButton";
import { useNavigate } from "react-router-dom";
const ProjectDetails = ({ isOwnerView, details }) => {
  const navigate = useNavigate();
  return (
    <div className="projectDetailsContainer">
      <div>
        <p
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Project Details
        </p>
      </div>
      <div className="projectDetailsMainBox">
        <div className="projectDetailsSubBoxFirst">
          <div className="projectDetailsSubBoxFirstSub">
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
            <LabelValueBox
              label="Total Plantation Area"
              value={details?.project?.area}
            />
            <LabelValueBox label="Project Age" value={details?.project?.age} />
            {details?.project?.type === 2 && (
              <LabelValueBox
                label="Donation CostPer Plant ($)"
                value={details?.project?.donation}
              />
            )}
            {details?.project?.type === 3 && (
              <LabelValueBox
                label="Investment Per Plant ($SOL)"
                value={details?.project?.donation}
              />
            )}
            <LabelValueBox
              label="Total Number Of Plants Planned"
              value={details?.project?.plant_planned}
            />
          </div>
        </div>
        <div className="projectDetailsSubBoxSecond">
          <div className="projectDetailsSubBoxSecondSub">
            <LabelValueBox
              label="Full Address"
              value={details?.project?.address}
            />
            <LabelValueBox label="State" value={details?.project?.city} />
            <LabelValueBox label="Country" value={details?.project?.country} />
            <LabelValueBox
              label="Area Pin Code"
              value={details?.project?.pin_code}
            />
          </div>
        </div>
      </div>
      <div className="projectDetails2ndMainBox">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "1.1rem",
              }}
            >
              Type of Plants
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                {details?.project?.species?.species?.map((specie, index) => (
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "1rem",
                    }}
                    key={`specie-label-${index}`}
                  >
                    {specie.plant}
                  </p>
                ))}
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                {details?.project?.species?.species?.map((specie, index) => (
                  <p
                    style={{
                      fontWeight: "300",
                      fontSize: "1rem",
                    }}
                    key={`specie-value-${index}`}
                  >
                    {specie.percentage}%
                  </p>
                ))}
              </div>
            </div>
          </div>
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
          {details?.project?.type === 3 && (
            <LabelValueBox
              label={"Upcoming Revenue Dirtribution Date"}
              value={details?.project?.revenue_dist_date}
            />
          )}
          {details?.project?.type === 3 && (
            <LabelValueBox
              label={"Expected Approximate ROI"}
              value={`${details?.project?.roi}%`}
            />
          )}
        </div>
      </div>
      {isOwnerView && (
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
      )}
    </div>
  );
};

export default ProjectDetails;
