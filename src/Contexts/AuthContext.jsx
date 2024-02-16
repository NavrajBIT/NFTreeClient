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
      poppulateUserData();
    }
  }, [isLoggedIn]);

  const poppulateUserData = () => {
    api
      .crud("GET", "user/account")
      .then((res) => {
        if (res.status === 200) setAvatar(res[0].picture);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const value = {
    avatar,
    isLoggedIn,
    setIsLoggedIn,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
