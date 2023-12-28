import FormStepper from "./FormStepper";
import Myform from "../../Subcomponents/form/myform";

const OtpForm = ({ script }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", padding: "var(--padding-main) 0px" }}>
        <FormStepper step={1} />
      </div>

      <Myform
        heading={"Verify Email"}
        formdata={script.otpFormData}
        formButton={
          script.primaryChange || script.emailChange ? "Save" : "Next"
        }
        handleSubmit={async () => {
          script.verifyEmail();
        }}
        error={script.error}
      >
        <div>OTP has been sent to {script?.emailDetails?.email}</div>
      </Myform>
    </div>
  );
};

export default OtpForm;
