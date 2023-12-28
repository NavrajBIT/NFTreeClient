import { useGoogleLogin } from "@react-oauth/google";
import GoogleIcon from "@mui/icons-material/Google";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";

const GoogleLogin = ({ script, isSignUp }) => {
  const api = useAPI();
  const authContext = useAuth();
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      script.setIsLoading(true);
      try {
        const googleResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );

        const data = {
          access_token: response.access_token,
          provider: "google-oauth2",
        };
        console.log(data);
        await api
          .crud("POST", "user/auth", data)
          .then((res) => {
            if (res.status === 200) {
              if (isSignUp) {
                sessionStorage.setItem("token", res.access);
                authContext.setIsLoggedIn(true);
                if (script.close) {
                  script.close();
                } else {
                  navigate("/kyc");
                }
              } else {
                if (script.checkBox) {
                  sessionStorage.removeItem("token");
                  localStorage.setItem("token", res.token);
                } else {
                  localStorage.removeItem("token");
                  sessionStorage.setItem("token", res.token);
                }
                authContext.setIsLoggedIn(true);
                if (script.close) {
                  script.close();
                } else {
                  navigate("/");
                }
              }
            }
          })
          .catch((err) => {
            script.setErrorMessage("Something went wrong. Please try again.");
          });
      } catch (err) {
        console.log(err);
      }
      script.setIsLoading(false);
    },
  });

  return (
    <div className="primarybutton">
      <button onClick={login}>
        <GoogleIcon />
        {isSignUp ? "Signup" : "Login"} with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
