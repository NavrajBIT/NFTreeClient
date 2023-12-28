import "../Auth.css";
import Myform from "../../Subcomponents/form/myform";

const ForgetPassword = ({ script }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      dsfgdf
      <Myform
        heading={"Forget Password"}
        formdata={script.ForgetPasswordformdata}
        formButton="Reset Password"
        handleSubmit={script.handleLogin}
      ></Myform>
      {/* <LocalLoading /> */}
    </div>
  );
};

export default ForgetPassword;
