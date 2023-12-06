import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { login, register, googleLogin } from "../../api/userApi";
import googlelogo from "./img/google-login.png";
import "./Auth.css";

const Auth = ({ close }) => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(true);
  const [isError, setIsError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  const { setIsLoggedIn } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    authFunctions();
  }, [isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkValidation();
    authFunctions();
  };

  const authFunctions = async () => {
    handleErrorMessage();
    let apiRespond;
    if (isError === null) {
      apiRespond = await (isRegistered ? login(formData) : register(formData));

      try {
        isRegistered;
        if (isRegistered) {
          handleErrorMessage(apiRespond.response.data.detail);
          setFormData((prevData) => ({
            ...prevData,
            password: "",
          }));
        } else {
          handleErrorMessage(apiRespond.response.data.username[0]);
        }
      } catch (error) {
        if (!isRegistered) {
          setIsRegistered(true);
          setFormData({
            name: "",
            email: "",
            password: "",
            cnfPassword: "",
          });
          setTimeout(() => {
            document.getElementsByClassName("formHead")[0].innerHTML =
              "Account Created<br>Login to Continue";
          }, 1);
        } else {
          setIsLoggedIn(true);

          if (close) {
            close();
          } else {
            navigate("/home");
          }
        }
      }
    }
  };

  const handleGoogleLogin = googleLogin();

  const validEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

  const checkValidation = () => {
    let customErrorMessage = null;
    const { name, email, password, cnfPassword } = formData;

    if (!isRegistered && (name.length < 5 || name.length > 20)) {
      customErrorMessage = "Name is required and should be 5-20 Characters";
    } else if (!validEmail.test(email)) {
      customErrorMessage = "Please Enter a Valid Email";
    } else if (password.length < 8) {
      customErrorMessage = "Password should be minimum 8 characters long";
    } else if (!isRegistered && password !== cnfPassword) {
      customErrorMessage = "Unmatched Password and Confirm Password";
    } else if (
      !isRegistered &&
      !document.getElementById("tccheckbox").checked
    ) {
      customErrorMessage = "Please Accept Terms and Conditions first";
    }

    setIsError(customErrorMessage);
  };

  const handleErrorMessage = (newError = isError) => {
    const errorText = document.getElementsByClassName("errorText")[0];
    errorText.innerText = newError || "";
    if (newError) {
      setTimeout(() => {
        errorText.innerText = "";
      }, 4000);
    }
  };

  return (
    <div className="form-container" style={{ minHeight: "700px" }}>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <h1 className="formHead">
            {isRegistered ? "Sign In To Your Account" : "Create Free Account"}
          </h1>
          <div className="form-input">
            {!isRegistered && (
              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {!isRegistered && (
              <input
                type="password"
                name="cnfPassword"
                placeholder="Confirm Password"
                value={formData.cnfPassword}
                onChange={handleInputChange}
              />
            )}
          </div>
          <span className="errorText">{isError}</span>
          <div className="form-checkbox">
            <div className="checkBoxDiv">
              <input type="checkbox" id="tccheckbox" />
              <span>
                {isRegistered ? (
                  "Remember me"
                ) : (
                  <p>
                    I agree with the <a href="#">Terms & Conditions</a> of
                    NFTree
                  </p>
                )}
              </span>
            </div>
            {isRegistered && (
              <Link to="/forget-password">Forgot password?</Link>
            )}
          </div>
          <div className="primarybutton" style={{ marginBottom: "10px" }}>
            <button type="submit" className="submit-button">
              {isRegistered ? "Sign in" : "Sign up"}
            </button>
          </div>
        </form>
        <div className="primarybutton" style={{ marginBottom: "30px" }}>
          {isRegistered && (
            <button className="googleLoginBtn" onClick={handleGoogleLogin}>
              <img src={googlelogo} alt="Google Login" />
              Sign in with Google
            </button>
          )}
        </div>
        <div className="switch-option">
          <span>
            {isRegistered
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
          </span>
          <a
            onClick={() => {
              setIsRegistered(!isRegistered);
              setFormData({
                name: "",
                email: "",
                password: "",
                cnfPassword: "",
              });
            }}
            style={{ cursor: "pointer" }}
          >
            {isRegistered ? "Signup" : "Signin"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
