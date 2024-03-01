import Herocontainer from "../Subcomponents/containers/herocontainer";
import imgsrc from "./assets/fp.png";
import Button from "../Subcomponents/buttons/button";
import { useNavigate } from "react-router-dom";
import OpenInput from "../Subcomponents/form/inputs/openInput";
import { useState } from "react";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  return (
    <Herocontainer
      style={{
        alignItems: "center",
        background: "var(--bg-green-gradient)",
      }}
      innerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="formcontainer"
        style={{
          boxShadow: "0 0 20px -6px var(--bg-dark)",
        }}
      >
        <Illustration />

        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "var(--padding-large)",
            gap: "var(--padding-large)",
          }}
          type="submit"
          //   onSubmit={script.handleLogin}
        >
          <div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "var(--text-black)",
              }}
            >
              Forgot your Password?
            </div>
            <div
              style={{
                fontSize: "13px",
                fontWeight:"400",
                color:"#3D462C",
                marginTop:"1rem"
              }}
            >
              No worries, we'll send you reset instructions.
            </div>
          </div>
          <OpenInput
            label="Email address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            <Button title={"Reset Password"} variant={"green"} />
            <div style={{
              fontSize:"13px",
              fontWeight:"400",
              color:'#3D462CCC',
              marginTop:"1rem",
            }}>
              Did you remember your password?{" "}
              <span>
                <Button
                  title="Try logging In"
                  variant={"link"}
                  onClick={() => navigate("/login")}
                />
              </span>
            </div>
          </div>
        </form>
      </div>
    </Herocontainer>
  );
};

export default Forgotpassword;

const Illustration = () => {
  return (
    <div className="illustration" style={{ background: "transparent" }}>
      <img src={imgsrc} alt="OTP" />
    </div>
  );
};
