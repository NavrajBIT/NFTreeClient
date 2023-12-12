import { useEffect, useState } from "react";
import { Box, Stepper, Step, StepLabel, Grid, Button } from "@mui/material";
import BasicDetails from "./BasicDetails";
import OrganizationDetails from "./OrganizationDetails";
import RepresentativeDetails from "./RepresentativeDetails";
import FinalForm from "./FinalForm";
import { kycStatus } from "../../../api/projectApi";
import useAPI from "../../../api/useAPI";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";

const steps = [
  " Basic Details",
  "Organization Details",
  "Representative Details",
  "FinalForm",
];

const Kyc = () => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [kycDetails, setKycDetails] = useState({ firstName: "LOL" });
  const [kycState, setKycState] = useState({});

  const handleBack = () => {
    activeStep > 0 && setActiveStep((prevStep) => prevStep - 1);
  };
  const handleNext = () => {
    activeStep < 3 && setActiveStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    fetchStatus();
    poppulateUserData();
  }, [isLoggedIn]);

  const fetchStatus = async () => {
    try {
      const respond = await kycStatus();
      setKycState(respond.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const poppulateUserData = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "user/account")
      .then((res) => {
        if (res.status === 200)
          setKycDetails((prev) => {
            let newvalues = {
              ...prev,
              firstName: res[0].first_name,
              lastName: res[0].last_name,
              phone: res[0].phone,
            };
            return newvalues;
          });
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });

    await api
      .crud("GET", "user/email")
      .then((res) => {
        if (res.status === 200)
          setKycDetails((prev) => {
            let newvalues = {
              ...prev,
              email: res[0].email,
            };
            return newvalues;
          });
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });

    await api
      .crud("GET", "user/organization")
      .then((res) => {
        if (res.status === 200)
          setKycDetails((prev) => {
            let newvalues = {
              ...prev,
              orgName: res[0].name,
              address: res[0].address,
              country: res[0].country,
              website: res[0].website,
              description: res[0].description,
              registrationId: res[0].reg_id,
            };
            return newvalues;
          });
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });

    await api
      .crud("GET", "user/organization")
      .then((res) => {
        if (res.status === 200)
          setKycDetails((prev) => {
            let newvalues = {
              ...prev,
              orgName: res[0].name,
              address: res[0].address,
              country: res[0].country,
              website: res[0].website,
              description: res[0].description,
              registrationId: res[0].reg_id,
            };
            return newvalues;
          });
      })
      .catch((err) => {
        if (err === 401) {
          setIsLoggedIn(false);
        }
      });

    setIsLoading(false);
  };

  if (isLoading) return <Loading />;

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
        return (
          <FinalForm
            data={kycDetails}
            fetchStatus={fetchStatus}
            setIsLoading={setIsLoading}
          />
        );
      default:
        return <div>404: Not Found</div>;
    }
  };

  const stepperClick = (index) => {
    // setActiveStep(index);
  };

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

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
