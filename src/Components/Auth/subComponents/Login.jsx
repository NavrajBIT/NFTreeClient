import GoogleLogin from "./GoogleLogin";
import "../Auth.css";
import Myform from "../../Subcomponents/form/myform";

const Login = ({ script }) => {
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
        heading={"Login"}
        formdata={script.Loginformdata}
        formButton="Login"
        handleSubmit={script.handleLogin}
        error={script.errorMessage}
      >
        <GoogleLogin script={script} />
        {/* <div style={{ textAlign: "center" }}>
          Forgot Password?{" "}
          <span
            className="link"
            onClick={() => script.setCurrentPage("forgotpassword")}
          >
            Click Here
          </span>
        </div> */}
        <div style={{ textAlign: "center" }}>
          Don't have an Account?{" "}
          <span
            className="link"
            onClick={() => script.setCurrentPage("signup")}
          >
            Signup
          </span>
        </div>
      </Myform>
    </div>
  );
};

export default Login;
