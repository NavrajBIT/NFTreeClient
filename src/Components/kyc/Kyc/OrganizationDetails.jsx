import React from "react";
import { TextField, Input, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import { OrganizationDetailsSchema } from "./KycSchema";

const uploadedFileInfo = {
  marginTop: "1rem",
  textAlign: "center",
  fontSize: "14px",
};

const organizationFormDetails = [
  { name: "orgName", placeholder: "Name of organization" },
  { name: "description", placeholder: "Description" },
  { name: "address", placeholder: "Address" },
  { name: "country", placeholder: "Country" },
  { name: "website", placeholder: "Website" },
  { name: "registrationId", placeholder: "Registration ID" },
  { name: "regProof", placeholder: "Upload Registration Proof", type: "file" },
];

const OrganizationDetails = ({
  steps,
  activeStep,
  handleBack,
  handleNext,
  kycDetails,
  setKycDetails,
  data,
}) => {
  const formik = useFormik({
    initialValues: {
      orgName: data.orgName,
      address: data.address,
      country: data.country,
      website: data.website,
      description: data.description,
      registrationId: data.registrationId,
      regProof: data.regProof,
    },
    validationSchema: OrganizationDetailsSchema,
    onSubmit: (values) => {
      console.log(`onsubmit runs`);
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
  //         [e.target.name]: e.target.value
  //     }));
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid item xs={12} sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <h1 style={{ margin: "auto", margin: "1rem auto" }}>
            Organization Details
          </h1>
          {organizationFormDetails.map((field, index) => (
            <Grid item xs={field.xs || 12} key={index}>
              {field.type === "file" ? (
                <>
                  <Input
                    id={field.name}
                    name={field.name}
                    type="file"
                    inputProps={{ accept: "image/*" }}
                    disableUnderline
                    style={{ display: "none" }}
                    onChange={(event) => {
                      formik.setFieldValue(
                        field.name,
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  <Button
                    variant="outlined"
                    component="label"
                    htmlFor={field.name}
                    sx={{ width: "100%" }}
                    className="outlinedBtn"
                  >
                    {field.placeholder}
                  </Button>
                  <p style={uploadedFileInfo}>
                    {formik.values.regProof
                      ? `${formik.values.regProof.name}`
                      : "No file selected"}
                  </p>
                  {formik.touched.regProof && formik.errors.regProof && (
                    <small>{formik.errors.regProof}</small>
                  )}
                </>
              ) : (
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
              )}
            </Grid>
          ))}
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

export default OrganizationDetails;
