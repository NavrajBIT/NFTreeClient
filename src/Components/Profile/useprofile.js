import { useState, useEffect } from "react";
import useAPI from "../../api/useAPI";

const useprofile = () => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setuser] = useState(null);
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [kyc, setKyc] = useState(null);
  const [editprofilePopup, setEditprofilePopup] = useState(false);
  const [editorganizationPopup, setEditorganizationPopup] = useState(false);
  const [myprojects, setMyprojects] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [nftData, setNftData] = useState(null);

  const endpoints = [
    { endpoint: "user", state: setuser },
    { endpoint: "user/account", state: setAccount },
    { endpoint: "user/organization", state: setOrganization },
  ];

  useEffect(() => {
    endpoints.map((endpoint) => {
      poppulateData(endpoint.endpoint, endpoint.state);
    });
    poppulateData("project/myproject", setMyprojects, true);
    poppulateData("project/transaction", setTransactions, true);
    poppulateData("project/nfts", setNftData, true);
  }, [isLoggedIn]);

  const poppulateData = async (endpoint, setState, isArray) => {
    setIsLoading(true);
    await api
      .crud("GET", endpoint)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && !isArray) setState(res[0]);
        if (res.status === 200 && isArray) setState(res);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const uploadProfilepic = async (file) => {
    console.log(file);
    const fileName = file.name.replace(/\s+/g, "_");
    if (
      fileName.endsWith(".png") ||
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".jpeg")
    ) {
      const newFile = new File([file], fileName, { type: file.type });

      const formdata = new FormData();
      formdata.append("picture", newFile);
      const endpoint = `user/account/${account.id}`;
      setIsLoading(true);
      await api
        .crud("PATCH", endpoint, formdata, true)
        .then((res) => {})
        .catch((err) => alert("Could not upload image."));
      await poppulateData("user", setuser);
      setIsLoading(false);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return {
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    setIsLoading,
    user,
    account,
    setAccount,
    email,
    organization,
    setOrganization,
    kyc,
    editprofilePopup,
    setEditprofilePopup,
    poppulateData,
    uploadProfilepic,
    editorganizationPopup,
    setEditorganizationPopup,
    myprojects,
    setMyprojects,
    transactions,
    nftData,
  };
};

export default useprofile;
