import { Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { BasicDetailsSchema } from "./KycSchema";

const accountFormDetails = [
  { name: "firstName", placeholder: "First name" },
  { name: "lastName", placeholder: "Last name" },
  { name: "email", placeholder: "Email" },
  { name: "phone", placeholder: "Phone" },
];

const BasicDetails = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
  setKycDetails,
  data,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    },
    validationSchema: BasicDetailsSchema,
    onSubmit: (values) => {
      setKycDetails((prev) => ({
        ...prev,
        ...values,
      }));
      handleNext();
    },
  });

  // const handleInputChange = (e) => {
  //     setKycDetails((prev) => ({
  //         ...prev,
  //         [e.target.name]: e.target.value || e.target.files[0],
  //     }));
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid item xs={12} sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <h1 style={{ margin: "auto", margin: "0 auto 1rem" }}>
            Basic Details
          </h1>
          {accountFormDetails.map((field, index) => {
            return (
              <Grid item xs={12} key={index}>
                <TextField
                  name={field.name}
                  placeholder={field.placeholder}
                  variant="outlined"
                  size="small"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field.name]}
                  error={
                    formik.touched[field.name] &&
                    Boolean(formik.errors[field.name])
                  }
                  helperText={
                    formik.touched[field.name] && formik.errors[field.name]
                  }
                  fullWidth
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        mt={3}
        mb={5}
        sx={{
          display: activeStep === 3 ? "none" : "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Button
          sx={{
            width: "45%",
          }}
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
          className="filledBtn"
        >
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button
            sx={{ width: "45%" }}
            variant="contained"
            className="filledBtn"
          >
            Submit
          </Button>
        ) : (
          <Button
            sx={{ width: "45%" }}
            variant="contained"
            type="submit"
            // onClick={handleNext}
            className="filledBtn"
          >
            Next
          </Button>
        )}
      </Grid>
    </form>
  );
};

export default BasicDetails;
