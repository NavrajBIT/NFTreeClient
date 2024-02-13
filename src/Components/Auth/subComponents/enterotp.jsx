import Myform from "../../Subcomponents/form/myform";

export const Enterotp = ({ script }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
      }}
    >
      <Myform
        heading={"Verify Email"}
        formdata={script.Otpformdata}
        formButton="Verify"
        handleSubmit={script.verifyOtp}
        error={script.errorMessage}
      >
        <div>
          One time password (OTP) has been sent to{" "}
          <span>{script.userName}</span>
        </div>
      </Myform>
    </div>
  );
};
