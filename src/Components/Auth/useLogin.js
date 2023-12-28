import { useState, useEffect } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import useAPI from "../../api/useAPI";

const useLogin = (close) => {
  const api = useAPI();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState("login");

  const handleSignup = async () => {
    if (!checkBox) {
      setErrorMessage("Please accept terms & consitions.");
      return;
    }
    if (password != cnfPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      setIsLoading(true);
      await api
        .crud("POST", "user/register", {
          username: userName,
          password: password,
        })
        .then((res) => {
          if (res.status === 400) {
            setErrorMessage(res.username[0]);
          }
          if (res.status === 201) {
            sessionStorage.setItem("token", res.access);
            authContext.setIsLoggedIn(true);
            if (close) {
              close();
            } else {
              navigate("/kyc");
            }
          }
        })
        .catch((err) => {
          setErrorMessage("Something went wrong. please try again.");
        });
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setErrorMessage("");
    setIsLoading(true);
    await api
      .crud("POST", "user/login", { username: userName, password: password })
      .then((res) => {
        if (res.status === 200) {
          if (checkBox) {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
            localStorage.setItem("token", res.access);
            localStorage.setItem("id", res.id);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            sessionStorage.setItem("token", res.access);
            sessionStorage.setItem("id", res.id);
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

  const ForgetPasswordformdata = [
    [
      {
        label: "Username",
        type: "text",
        required: true,
        value: password,
        onChange: (e) => setUserName(e.target.value),
        maxLength: 50,
      },
    ],
  ];

  const Loginformdata = [
    [
      {
        label: "Username",
        type: "text",
        required: true,
        value: userName,
        onChange: (e) => {
          setErrorMessage("");
          setUserName(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Password",
        type: "password",
        required: true,
        value: password,
        onChange: (e) => {
          setErrorMessage("");
          setPassword(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Remember Me",
        type: "checkbox",
        required: false,
        value: checkBox,
        onChange: (e) => setCheckBox(e),
        maxLength: 50,
      },
    ],
  ];

  const Signupformdata = [
    [
      {
        label: "Username",
        type: "text",
        required: true,
        value: userName,
        onChange: (e) => {
          setErrorMessage("");
          setUserName(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Password",
        type: "password",
        required: true,
        value: password,
        onChange: (e) => {
          setErrorMessage("");
          setPassword(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "Confirm Password",
        type: "password",
        required: true,
        value: cnfPassword,
        onChange: (e) => {
          setErrorMessage("");
          setCnfPassword(e.target.value);
        },
        maxLength: 50,
      },
      {
        label: "I Accept the Terms and Conditions",
        type: "checkbox",
        value: checkBox,
        onChange: (e) => setCheckBox(e),
        maxLength: 50,
      },
    ],
  ];

  return {
    userName,
    setUserName,
    password,
    setPassword,
    handleLogin,
    isLoading,
    setIsLoading,
    Loginformdata,
    Signupformdata,
    ForgetPasswordformdata,
    handleSignup,
    errorMessage,
    setErrorMessage,
    currentPage,
    setCurrentPage,
    checkBox,
    close,
  };
};

export default useLogin;
