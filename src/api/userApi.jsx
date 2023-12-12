import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "user/";

const performAction = async (endpoint, formData) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const register = async (formData) => {
  const data = {
    username: formData.email,
    password: formData.password,
    first_name: formData.name.split(" ")[0],
    last_name: formData.name.split(" ")[1],
  };

  try {
    const response = await performAction("register", data);
    return response;
  } catch (error) {
    return error;
  }
};

const login = async (formData) => {
  const data = {
    username: formData.email,
    password: formData.password,
  };

  try {
    const response = await performAction("login", data);

    sessionStorage.setItem("token", response.data.access);
    sessionStorage.setItem("id", response.data.id);
    return response;
  } catch (error) {
    return error;
  }
};

const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
};

const googleLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const googleResponse = await axios.get(
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
        console.log(googleResponse);

        const authResponse = await performAction("auth", data);
        console.log(authResponse);
        sessionStorage.setItem("token", authResponse.data.token);
        sessionStorage.setItem("id", authResponse.data.id);
        setIsLoggedIn(true);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    },
  });

  return login;
};

export { login, register, googleLogin, logout };
