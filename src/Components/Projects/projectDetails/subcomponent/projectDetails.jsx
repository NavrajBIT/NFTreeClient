import "./userView.css";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import LabelValueBox from "./labelValueBox";

const ProjectDetails = ({details}) => {
  const [projectage, setProjectage] = useState(0);

  useEffect(() => {
    if (details?.project?.planting_date) {
      const [month, year] = details.project.planting_date.split("/");
      const plantingDate = new Date(year, month - 1);
      const today = new Date();
      const ageInMonths =
        (today.getFullYear() - plantingDate.getFullYear()) * 12 +
        (today.getMonth() - plantingDate.getMonth());
      setProjectage(ageInMonths / 12);
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
            value={`${details?.project?.area} HA`}
          />
          <LabelValueBox
            label='Project Age'
            value={details?.project?.age + " Years"}
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
          <LabelValueBox
            label='Social Impact'
            value={details?.project?.social_impact || "Creating jobs and livelihoods"}
          />
          <LabelValueBox
            label='Plantation Common in Area'
            value={details?.project?.is_common_in_area ? "Yes" : "No"}
          />
          <LabelValueBox
            label='Average Girth'
            value={details?.project?.girth || "50cm"}
          />
          <LabelValueBox
            label='Average Height'
            value={details?.project?.average_height || "5 Meters"}
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
          <LabelValueBox
            label='Commercial Benefits Received'
            value={details?.project?.received_commercial_benefit ? "Yes" : "Not Yet"}
          />
          <LabelValueBox
            label='Local Community Involvement'
            value={
              details?.project?.local_community_involved ||
              "Yes(Management & Forest Guards)"
            }
          />
          <LabelValueBox
            label='Carbon Credit Owner'
            value={
              details?.project?.carbon_credit_owner ||
              "National Agency of the Great Green Wall"
            }
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
      age: PropTypes.string,
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
      }),
      social_impact: PropTypes.string,
      is_common_in_area: PropTypes.bool,
      received_commercial_benefit: PropTypes.bool,
      local_community_involved: PropTypes.string,
      carbon_credit_owner: PropTypes.string,
      girth: PropTypes.string,
      average_height: PropTypes.string
    })
  })
};

export default ProjectDetails;
