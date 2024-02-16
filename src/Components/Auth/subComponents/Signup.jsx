import "../Auth.css";
import Input from "../../Subcomponents/form/inputs/input";
import Button from "../../Subcomponents/buttons/button";
import Checkbox from "../../Subcomponents/form/inputs/checkbox";
import { useNavigate } from "react-router-dom";

const Signup = ({ script }) => {
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
      onSubmit={script.handleSignup}
    >
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "var(--text-green)",
        }}
      >
        Log in to BitBhoomi
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-light)",
          width: "100%",
          maxWidth: "var(--max-width-button)",
        }}
      >
        <Input
          label="First Name"
          type="text"
          required
          value={script.firstname}
          onChange={(e) => script.setFirstname(e.target.value)}
          maxLength="50"
        />
        <Input
          label="Last Name"
          type="text"
          required
          value={script.lastname}
          onChange={(e) => script.setLastname(e.target.value)}
          maxLength="50"
        />
      </div>
      <Input
        label="Email"
        type="email"
        required
        value={script.userName}
        onChange={(e) => script.setUserName(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        required
        value={script.password}
        onChange={(e) => script.setPassword(e.target.value)}
      />
      <Input
        label="Confirm Password"
        type="password"
        required
        value={script.cnfPassword}
        onChange={(e) => script.setCnfPassword(e.target.value)}
      />

      <Checkbox
        label={<TermsConditions />}
        checked={script.checkBox}
        onChange={(e) => script.setCheckBox((prev) => !prev)}
      />
      {script.errorMessage && (
        <div style={{ color: "var(--error)" }}>{script.errorMessage}</div>
      )}
      <Button title="Signup" type={"submit"} variant={"green"} />
      <div>
        {"Already have an Account? "}
        <span>
          <Button
            title={"Login"}
            variant="link"
            onClick={() => {
              script.setCurrentPage("loginoptions");
            }}
          />
        </span>
      </div>
    </form>
  );
};

export default Signup;

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div>
      I agree with{" "}
      <span>
        <Button
          title="Terms & Conditions"
          variant={"link"}
          onClick={() => navigate("/tnc")}
        />
      </span>
    </div>
  );
};
