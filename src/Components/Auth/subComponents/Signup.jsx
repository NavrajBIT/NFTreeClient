import GoogleLogin from "./GoogleLogin";
import "../Auth.css";
import Myform from "../../Subcomponents/form/myform";
import { Enterotp } from "./enterotp";

const Signup = ({ script }) => {
  if (script.isOtp) return <Enterotp script={script} />;
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
        heading={"Signup"}
        formdata={script.Signupformdata}
        formButton="Signup"
        handleSubmit={script.handleSignup}
        error={script.errorMessage}
      >
        <GoogleLogin script={script} isSignUp={true} />
        <div style={{ textAlign: "center" }}>
          Already have an Account?{" "}
          <span className="link" onClick={() => script.setCurrentPage("login")}>
            Signin
          </span>
        </div>
      </Myform>
    </div>
  );
};

export default Signup;
