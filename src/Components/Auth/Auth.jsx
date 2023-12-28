import React, { useState } from "react";
import Login from "./subComponents/Login";
import Signup from "./subComponents/Signup";
import ForgetPassword from "./subComponents/ForgetPassword";
import useLogin from "./useLogin";
import LocalLoading from "../Subcomponents/loading/localloading";

export default function Auth({ close }) {
  const script = useLogin(close);

  const PageMap = {
    login: <Login script={script} />,
    signup: <Signup script={script} />,
    forgotpassword: <ForgetPassword script={script} />,
  };

  return (
    <>
      {PageMap[script.currentPage]}
      {script.isLoading && <LocalLoading />}
    </>
  );
}
