import React, { useEffect, useState } from "react";
import Login from "./subComponents/Login";
import Signup from "./subComponents/Signup";
import useLogin from "./useLogin";
import LocalLoading from "../Subcomponents/loading/localloading";
import Herocontainer from "../Subcomponents/containers/herocontainer";
import ill1 from "./img/ill1.png";
import ill2 from "./img/ill2.png";
import ill3 from "./img/ill3.png";
import otpimg from "./img/otp.png";
import LoginOptions from "./subComponents/loginOptions";
import Enterotp from "./subComponents/enterotp";

export default function Auth({ close }) {
  const script = useLogin(close);

  const PageMap = {
    loginoptions: <LoginOptions script={script} />,
    signupoptions: <LoginOptions script={script} isSignup />,
    login: <Login script={script} />,
    signup: <Signup script={script} />,
    otp: <Enterotp script={script} />,
  };

  return (
    <Herocontainer
      style={{
        alignItems: "center",
      }}
      innerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="formcontainer">
        {script.currentPage === "otp" ? <OTPIllustration /> : <Illustration />}

        {PageMap[script.currentPage]}
      </div>
      {script.isLoading && <LocalLoading />}
    </Herocontainer>
  );
}

const Illustration = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => {
        if (prev === 3) return 1;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="illustration">
      {selectedImage === 1 && <img src={ill1} alt="Login" />}
      {selectedImage === 2 && <img src={ill2} alt="Login" />}
      {selectedImage === 3 && <img src={ill3} alt="Login" />}
    </div>
  );
};
const OTPIllustration = () => {
  return (
    <div className="illustration">
      <img src={otpimg} alt="OTP" />
    </div>
  );
};
