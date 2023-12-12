import React, { useState, useEffect, useContext } from "react";

const AuthContext = React.createContext();
import useAPI from "../api/useAPI";

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const api = useAPI();
  const [authUser, setAuthUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") != null) {
      setIsLoggedIn(true);
    }
    poppulateUser();
  }, [isLoggedIn]);

  const poppulateUser = () => {
    api
      .crud("GET", "user/account")
      .then((res) => {
        if (res.status === 200) {
          setAuthUser(res[0]);
          poppulateProfilePic();
        }
      })
      .catch((err) => {});
  };

  const poppulateProfilePic = () => {
    api
      .crud("GET", "user/avatar")
      .then((res) => {
        if (res.status === 200) setAvatar(res[0]);
      })
      .catch((err) => console.log(err));
  };

  const value = {
    authUser,
    setAuthUser,
    avatar,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
