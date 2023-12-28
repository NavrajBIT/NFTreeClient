import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();
import useAPI from "../api/useAPI";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const api = useAPI();
  const [avatar, setAvatar] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");

    const isSessionToken =
      sessionToken && sessionToken !== "undefined" && sessionToken !== "null";
    const isLocalToken =
      localToken && localToken !== "undefined" && localToken !== "null";

    if (isSessionToken || isLocalToken) {
      setIsLoggedIn(true);
      poppulateProfilePic();
    }
  }, [isLoggedIn]);

  const poppulateProfilePic = () => {
    api
      .crud("GET", "user/avatar")
      .then((res) => {
        if (res.status === 200) setAvatar(res[0]);
      })
      .catch((err) => console.log(err));
  };

  const value = {
    avatar,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
