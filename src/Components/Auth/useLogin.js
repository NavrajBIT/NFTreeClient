import { useState, useEffect } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import useAPI from "../../api/useAPI";

const useLogin = (close) => {
  const api = useAPI();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState("loginoptions");
  const [otp, setOtp] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!checkBox) {
      setErrorMessage("Please accept terms & conditions.");
      return;
    }
    if (password != cnfPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      setIsLoading(true);
      await api
        .crud("POST", "user/register", {
          email: userName,
        })
        .then((res) => {
          if (res.status === 200) {
            setCurrentPage("otp");
          }
        })
        .catch((err) => {
          setErrorMessage("Something went wrong. please try again.");
        });
      setIsLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await api
      .crud("POST", "user/verify", {
        email: userName,
        otp: otp,
        password: password,
        first_name: firstname,
        last_name: lastname,
      })
      .then((res) => {
        if (res.status === 200) {
          setErrorMessage("");
          setCurrentPage("login");
        }
        if (res.status === 404) {
          setErrorMessage("Invalid OTP. Please try again.");
        }
      })
      .catch((err) => {
        setErrorMessage("Something went wrong. please try again.");
      });
    setIsLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    await api
      .crud("POST", "user/login", { username: userName, password: password })
      .then((res) => {
        if (res.status === 200) {
          if (checkBox) {
            sessionStorage.removeItem("token");
            localStorage.setItem("token", res.access);
          } else {
            localStorage.removeItem("token");
            sessionStorage.setItem("token", res.access);
          }
          authContext.setIsLoggedIn(true);
          if (close) {
            close();
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => {
        if (err === 401) setErrorMessage("Invalid Credentials!");
        else setErrorMessage("Something went wrong. Please try again.");
      });
    setIsLoading(false);
  };

  return {
    userName,
    setUserName,
    password,
    setPassword,
    handleLogin,
    isLoading,
    setIsLoading,
    handleSignup,
    errorMessage,
    setErrorMessage,
    currentPage,
    setCurrentPage,
    checkBox,
    setCheckBox,
    close,
    otp,
    setOtp,
    verifyOtp,
    cnfPassword,
    setCnfPassword,
    firstname,
    setFirstname,
    lastname,
    setLastname,
  };
};

export default useLogin;
