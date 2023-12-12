import React from "react";
import { TextField, Grid, Button } from "@mui/material";
import Input from "@mui/material/Input";
import { useFormik } from "formik";
import { RepresentativeDetailsSchema } from "./KycSchema";

const uploadedFileInfo = {
  marginTop: "1rem",
  textAlign: "center",
  fontSize: "14px",
};

const RepresentativeDetails = ({
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
      designation: data.designation,
      signedNote: data.signedNote,
    },
    validationSchema: RepresentativeDetailsSchema,
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
  //         [e.target.name]: e.target.value
  //     }));
  // }

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    // setKycDetails((prev) => ({
    //     ...prev,
    //     signedNote: file,
    // }));
    formik.setFieldValue("signedNote", file);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid item xs={12} sx={{ padding: "20px" }}>
        <Grid container spacing={2}>
          <h1 style={{ margin: "auto", margin: "1rem auto" }}>
            Representative Details
          </h1>

          <Grid item xs={12}>
            <TextField
              name="designation"
              placeholder="Designation of the representative"
              variant="outlined"
              size="small"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.designation}
              error={
                formik.touched.designation && Boolean(formik.errors.designation)
              }
              helperText={
                formik.touched.designation && formik.errors.designation
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="file-input"
              name="signedNote"
              type="file"
              inputProps={{ accept: "image/*" }}
              disableUnderline
              style={{ display: "none" }}
              onChange={handleFileInput}
            />
            <Button
              variant="outlined"
              component="label"
              htmlFor="file-input"
              sx={{ width: "100%" }}
              className="outlinedBtn"
            >
              Upload Signed Note
            </Button>
            {/* <p style={uploadedFileInfo}>{kycDetails?.signedNote ? `${kycDetails?.signedNote?.name}` : 'No file selected'}</p> */}
            <p style={uploadedFileInfo}>
              {formik.values.signedNote
                ? `${formik.values.signedNote.name}`
                : "No file selected"}
            </p>
            {formik.touched.signedNote && formik.errors.signedNote && (
              <small>{formik.errors.signedNote}</small>
            )}
          </Grid>
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

export default RepresentativeDetails;
