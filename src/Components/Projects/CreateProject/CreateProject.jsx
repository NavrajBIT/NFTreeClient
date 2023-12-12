import React, { useEffect, useState } from "react";
import Loading from "../../Subcomponents/loading/loading";
import NoKYC from "../../Subcomponents/noKycPage/nokyc";
import useAPI from "../../../api/useAPI";
import Auth from "../../Auth/Auth";
import CreateProjectOption from "./CreateProjectOption";
import Createform from "./createform";

function CreateProject() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isKycComplete, setIsKycComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const api = useAPI();

  useEffect(() => {
    checkKycStatus();
  }, [isLoggedIn]);

  const checkKycStatus = async () => {
    setIsLoading(true);
    await api
      .crud("GET", "user/kyc")
      .then((res) => {
        if (res.status === 200) {
          if (res[0].status === "Approved") setIsKycComplete(true);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };
  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;
  if (!isKycComplete) return <NoKYC />;

  if (!selectedOption)
    return <CreateProjectOption setSelectedOption={setSelectedOption} />;

  return (
    <Createform
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
}

export default CreateProject;
