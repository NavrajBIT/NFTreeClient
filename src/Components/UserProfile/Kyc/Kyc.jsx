import { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Grid, Button } from "@mui/material";
import BasicDetails from "./BasicDetails";
import OrganizationDetails from "./OrganizationDetails";
import RepresentativeDetails from "./RepresentativeDetails";
import FinalForm from "./FinalForm";
import { kycStatus } from "../../../api/projectApi";

const steps = [
  " Basic Details",
  "Organization Details",
  "Representative Details",
  "FinalForm",
];

const Kyc = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [kycDetails, setKycDetails] = useState({});
  const [kycState, setKycState] = useState({});

  const handleBack = () => {
    activeStep > 0 && setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    activeStep < 3 && setActiveStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const respond = await kycStatus();
        setKycState(respond.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchStatus();
  }, []);

  const formContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BasicDetails
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            setKycDetails={setKycDetails}
            data={kycDetails}
          />
        );
      case 1:
        return (
          <OrganizationDetails
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            kycDetails={kycDetails}
            setKycDetails={setKycDetails}
            data={kycDetails}
          />
        );
      case 2:
        return (
          <RepresentativeDetails
            steps={steps}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            kycDetails={kycDetails}
            setKycDetails={setKycDetails}
            data={kycDetails}
          />
        );
      case 3:
        return <FinalForm data={kycDetails} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  const stepperClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div style={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: activeStep === 3 ? "85%" : "600px",
          margin: "0rem auto 3rem auto",
          padding: 2,
        }}
      >
        {kycState.is_applied == true && (
          <div className="kyc-wrapper">
            {kycState.status != "Approved" && (
              <h3>You have already applied for KYC</h3>
            )}
            <h3>Your KYC Status is {kycState.status}</h3>
            {kycState.status != "Approved" && (
              <h3>Please wait for some time</h3>
            )}
          </div>
        )}
        <Stepper
          sx={{ maxWidth: "600px", margin: "auto" }}
          activeStep={activeStep}
          orientation="horizontal"
        >
          {steps.map((label, index) => (
            <Step key={index} onClick={() => stepperClick(index)}>
              <StepLabel

              // className={`${index === activeStep ? 'activeStepper' : ''}`}
              />
            </Step>
          ))}
        </Stepper>
        <Grid
          container
          sx={{
            padding: "3rem",
            background: "white",
            borderRadius: "1rem",
            mt: 5,
          }}
        >
          {formContent(activeStep)}
        </Grid>
      </Box>
    </div>
  );
};

export default Kyc;
