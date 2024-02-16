import Otp from "../../Subcomponents/form/inputs/otp";
import Button from "../../Subcomponents/buttons/button";

const Enterotp = ({ script }) => {
  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--padding-large)",
        gap: "var(--padding-large)",
      }}
      type="submit"
      onSubmit={script.handleLogin}
    >
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "var(--text-green)",
        }}
      >
        One Time Password
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        Please enter the OTP sent to {script.userName}
      </div>
      <Otp length={4} value={script.otp} setValue={script.setOtp} />
      {script.errorMessage && (
        <div style={{ color: "var(--error)" }}>{script.errorMessage}</div>
      )}
      <Button title="Submit" variant={"green"} onClick={script.verifyOtp} />
    </form>
  );
};

export default Enterotp;
