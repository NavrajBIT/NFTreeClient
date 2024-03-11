import "../Auth.css";
import Input from "../../Subcomponents/form/inputs/input";
import Button from "../../Subcomponents/buttons/button";
import Checkbox from "../../Subcomponents/form/inputs/checkbox";
import { useNavigate } from "react-router-dom";

const Login = ({ script }) => {
  const navigate = useNavigate();
  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--padding-large)",
        gap: "var(--padding-light)",
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
        Login to BitBhoomi
      </div>
      <Input
        label="Email"
        type="email"
        required
        value={script.userName}
        onChange={(e) => script.setUserName(e.target.value)}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-button)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          label="Password"
          type="password"
          required
          value={script.password}
          onChange={(e) => script.setPassword(e.target.value)}
        />
        <div
          style={{
            width: "100%",
            maxWidth: "var(--max-width-button)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            title="forgot password"
            variant={"link"}
            onClick={() => navigate("/forgotpassword")}
          />
        </div>
      </div>
      <Checkbox
        label={"Remember Me"}
        checked={script.checkBox}
        onChange={(e) => script.setCheckBox((prev) => !prev)}
      />
      {script.errorMessage && (
        <div style={{ color: "var(--error)" }}>{script.errorMessage}</div>
      )}
      <Button title="Login" type={"submit"} variant={"green"} />
      <div>
        {"Don't have an Account? "}
        <span>
          <Button
            title={"Signup"}
            variant="link"
            onClick={() => {
              script.setCurrentPage("signupoptions");
            }}
          />
        </span>
      </div>
    </form>
  );
};

export default Login;
