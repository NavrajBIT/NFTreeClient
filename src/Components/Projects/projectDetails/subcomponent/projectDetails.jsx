import {useEffect, useState} from "react";
import "./userView.css";
import PropTypes from "prop-types";
import LabelValueBox from "./labelValueBox";

const ProjectDetails = ({details}) => {
  const [projectage, setProjectage] = useState("");

  useEffect(() => {
    if (details?.project?.planting_date) {
      const date = new Date(details.project.planting_date);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      const diffMonths = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );
      setProjectage(`${diffYears} Years ${diffMonths} Months`);
    }
  }, [details?.project?.planting_date]);

  return (
    <div style={{padding: "5%"}}>
      <h1 className='projectHeading'>Project Details</h1>
      <div
        style={{
          display: "flex",
          padding: "30px 0"
        }}
        className='Responsiveflex900'>
        <div
          style={{
            width: "50%",
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
          <LabelValueBox
            label='Project Type'
            value={
              details?.project?.type === 1
                ? "Monitoring & Reporting"
                : details?.project?.type === 2
                ? "Donation & Monitoring"
                : "Investment & Monitoring"
            }
          />
          <LabelValueBox
            label='Project Type (Category)'
            value={details?.project?.project_type}
          />
          {details?.project?.type == 3 && (
            <LabelValueBox
              label='Investment Type'
              value={details?.project?.investment_type}
            />
          )}
          <LabelValueBox
            label='Total Plantation Area (hect.)'
            value={details?.project?.area}
          />
          <LabelValueBox
            label='Project Age'
            value={projectage}
          />
          <LabelValueBox
            label='Planting Date'
            value={details?.project?.planting_date}
          />
          <LabelValueBox
            label='Estimated Carbon Credits'
            value={details?.project?.estimated_carbon_credits}
          />
          <LabelValueBox
            label='Estimated Survival Rate'
            value={details?.project?.estimated_survival_rate}
          />
          {details?.project?.type === 2 && (
            <LabelValueBox
              label='Donation Cost Per Plant ($)'
              value={details?.project?.donation}
            />
          )}
          <LabelValueBox
            label={`Cost Per Plant ${details?.project?.currency}`}
            value={details?.project?.donation}
          />
          <LabelValueBox
            label='Total Number Of Plants Planned'
            value={details?.project?.plant_planned}
          />
          <LabelValueBox
            label='Phase'
            value={details?.project?.phase}
          />
          <LabelValueBox
            label='Donation Method'
            value={details?.project?.donation_method}
          />
        </div>
        <div
          style={{
            width: "50%",
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
          <LabelValueBox
            label='Project Coordinates'
            value={details?.project?.coordinates}
          />
          <LabelValueBox
            label='Address'
            value={details?.project?.address}
          />
          <LabelValueBox
            label='City'
            value={details?.project?.city}
          />
          <LabelValueBox
            label='Country'
            value={details?.project?.country}
          />
          <LabelValueBox
            label='PIN Code'
            value={details?.project?.pin_code}
          />
          {details?.project?.type === 3 && (
            <>
              <LabelValueBox
                label='Revenue Distribution Details'
                value={details?.project?.revenue_dist_details}
              />
              <LabelValueBox
                label='Revenue Distribution Date'
                value={details?.project?.revenue_dist_date}
              />
              <LabelValueBox
                label='ROI'
                value={details?.project?.roi}
              />
            </>
          )}
          <LabelValueBox
            label='Carbon Credit Enabled'
            value={details?.project?.carbonCredit_enabled ? "Yes" : "No"}
          />
        </div>
      </div>
      <div
        style={{
          padding: "30px 0"
        }}>
        <div
          style={{
            padding: "0 5%",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}>
          <h2 className='projectHeading'>Plant Species</h2>
          {details?.project?.species?.species.map((species, index) => (
            <LabelValueBox
              key={`species-${index}`}
              label={species.plant}
              value={`${species.percentage}%`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  details: PropTypes.shape({
    project: PropTypes.shape({
      type: PropTypes.number,
      project_type: PropTypes.string,
      investment_type: PropTypes.string,
      area: PropTypes.number,
      planting_date: PropTypes.string,
      estimated_carbon_credits: PropTypes.string,
      estimated_survival_rate: PropTypes.string,
      donation: PropTypes.number,
      currency: PropTypes.string,
      plant_planned: PropTypes.number,
      phase: PropTypes.number,
      donation_method: PropTypes.number,
      coordinates: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      pin_code: PropTypes.string,
      revenue_dist_details: PropTypes.string,
      revenue_dist_date: PropTypes.string,
      roi: PropTypes.string,
      carbonCredit_enabled: PropTypes.bool,
      species: PropTypes.shape({
        species: PropTypes.arrayOf(
          PropTypes.shape({
            plant: PropTypes.string,
            percentage: PropTypes.number
          })
        )
      })
    })
  })
};

export default ProjectDetails;
