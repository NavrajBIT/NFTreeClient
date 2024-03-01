import Button from "../../Subcomponents/buttons/button";
import GoogleLogin from "./GoogleLogin";

const LoginOptions = ({ script, isSignup }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--padding-large)",
        gap: "var(--padding-main)",
      }}
    >
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "var(--text-green)",
        }}
      >
        {isSignup ? "Sign Up for BitBhoomi" : "Login to BitBhoomi"}
      </div>
      <GoogleLogin script={script} isSignUp={isSignup} />
      <div>Or</div>
      <Button
        title="Continue with Email"
        variant="white"
        onClick={() =>
          script.setCurrentPage((prev) => {
            if (isSignup) return "signup";
            return "login";
          })
        }
      />
      <div>
        {isSignup ? "Already have an Account? " : "Don't have an Account? "}
        <span>
          <Button
            title={isSignup ? "Login" : "Signup"}
            variant="link"
            onClick={() => {
              if (isSignup) {
                script.setCurrentPage("loginoptions");
              } else {
                script.setCurrentPage("signupoptions");
              }
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default LoginOptions;
