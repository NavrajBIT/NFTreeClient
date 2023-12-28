import { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Grid, Button } from "@mui/material";

const FormStepper = ({ step = 0 }) => {
  const [activeStep, setActiveStep] = useState(step);

  const steps = [
    " Basic Details",
    "Organization Details",
    "Representative Details",
    "FinalForm",
  ];

  return (
    <Stepper
      activeStep={activeStep}
      orientation="horizontal"
      sx={{ margin: "auto", maxWidth: "var(--max-width-form)" }}
    >
      {steps.map((label, index) => (
        <Step key={index} onClick={() => stepperClick(index)}>
          <StepLabel

          // className={`${index === activeStep ? 'activeStepper' : ''}`}
          />
        </Step>
      ))}
    </Stepper>
  );
};

export default FormStepper;
