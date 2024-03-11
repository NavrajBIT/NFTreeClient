import Myform from "../myformnew";
import useAPI from "../../../../api/useAPI";
import { useState, useEffect } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import { GrLinkNext } from "react-icons/gr";

const Organization = ({ submit, backStep, data }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserdata] = useState(null);
  const [socialError, setSocialError] = useState("");
  const [walletError, setWalletError] = useState("");

  const socialMediaOptions = [
    {
      label: "LinkedIn",
      value: 1,
    },
    {
      label: "Instagram",
      value: 2,
    },
    {
      label: "Twitter",
      value: 3,
    },
  ];

  const blockchainOptions = [
    { label: "Select Blockchain", value: "", disabled: true, selected: true },
    {
      label: "Solana",
      value: 1,
    },
  ];

  useEffect(() => {
    poppulateUser();
  }, [isLoggedIn]);

  const isComplete = () => {
    let status = true;

    if (userData) {
      Object.keys(userData).map((key) => {
        if (!userData[key] || userData[key] === "") {
          status = false;
        }
      });
    }

    return status;
  };

  const poppulateUser = async () => {
    setIsLoading(true);

    await api
      .crud("GET", "user/organization")
      .then((res) => {
        if (res.status === 200) showUserData(res[0]);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const showUserData = (savedData) => {
    if (Object.keys(data.organization).length === 0) {
      for (let i in savedData) {
        if (!(i === "id" || i === "user")) {
          savedData[i] = null;
        }
      }
    } else {
      savedData["wallet"] = data.organization.wallet;
      savedData["social_links"] = data.organization.social_links;
    }

    setUserdata(savedData);
  };

  const updateData = (key, value) => {
    setUserdata((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const handleSubmit = async (e) => {
    if (isLoading) return;

    setIsLoading(true);
    console.log(userData);
    let apiData = { ...userData };
    delete apiData.nin_proof;
    delete apiData.picture;
    delete apiData.signed_note;
    apiData.social_links = JSON.stringify(apiData.social_links);

    await api
      .crud("PATCH", `user/organization/${userData.id}`, apiData)
      .then((res) => {
        console.log(res);
        if (res.status >= 200 && res.status <= 299) {
          poppulateUser();
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });

    await api
      .crud("PATCH", `user/account/${userData.id}`, {
        wallet: JSON.stringify(apiData.wallet),
      })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          poppulateUser();
        }
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) setIsLoggedIn(false);
      });

    setIsLoading(false);
  };

  const back = () => {};

  const accountFormData = [
    [
      {
        label: "Name of the Organization",
        type: "text",
        value: userData?.name,
        onChange: (e) => {
          updateData("name", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Description",
        type: "text",
        value: userData?.description,
        onChange: (e) => {
          e.target.value.length <= 500 &&
            updateData("description", e.target.value);
        },
        maxLength: 500,
        multiline: true,
        rows: 4,
        required: true,
      },

      {
        label: "Wallet Address",
        type: "walletAddress",
        required: true,
        value: userData?.wallet,
        walletError: walletError,
        onChange: (e) => {
          updateData("wallet", {
            [blockchainOptions[e.target.value].value]: "",
          });
        },

        onTextChange: (e) => {
          setWalletError("");
          if (userData?.wallet) {
            const key = Object.keys(userData.wallet)[0];

            updateData("wallet", {
              [key]: e.target.value,
            });
          }
        },

        required: true,
        options: { blockchainOptions },
      },

      {
        label: "Address",
        type: "text",
        value: userData?.address,
        onChange: (e) => {
          e.target.value.length <= 500 && updateData("address", e.target.value);
        },
        maxLength: 500,
        multiline: true,
        rows: 4,
        required: true,
      },
      {
        label: "Country",
        type: "text",
        value: userData?.country,
        onChange: (e) => {
          updateData("country", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Area Code",
        type: "text",
        value: userData?.pin_code,
        onChange: (e) => {
          updateData("pin_code", e.target.value);
        },
        maxLength: 50,
        required: true,
      },
      {
        label: "Website",
        type: "text",
        value: userData?.website,
        onChange: (e) => {
          updateData("website", e.target.value);
        },
        maxLength: 100,
        required: true,
      },
      {
        label: "Registration Id",
        type: "text",
        value: userData?.reg_id,
        onChange: (e) => {
          updateData("reg_id", e.target.value);
        },
        maxLength: 50,
        required: true,
      },

      {
        label: "Social Media Links (atleast one link is mandatory)*",
        type: "socialMediaData",
        value: userData?.social_links,
        onChange: (e, label) => {
          setUserdata((prev) => ({
            ...prev,
            social_links: {
              ...prev.social_links,
              [label.toLowerCase()]: e.target.value,
            },
          }));

          setSocialError("");
        },
        required: true,
        options: { socialMediaOptions },
        socialMediaError: socialError,
      },
    ],
  ];

  if (!isLoggedIn) return <AuthPopup close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;

  const validateSocialMedia = () => {
    for (let i in userData.social_links) {
      if (userData.social_links == null) {
        setSocialError("atleast one social media link is required");
      } else if (userData.social_links[i] != "") {
        return true;
      }
    }
    setSocialError("atleast one social media link is required");
    return false;
  };

  const validateWallet = () => {
    const key = userData?.wallet && Object.keys(userData.wallet);
    if (userData.wallet == null) {
      setWalletError("wallet and address are required");
    } else if (userData.wallet[key] != "") {
      return true;
    }
    setWalletError("wallet and address are required");
    return false;
  };

  return (
    <Myform
      heading={"Organization Details"}
      formdata={accountFormData}
<<<<<<< HEAD
      formButton={isComplete() ? "Next" : "Save"}
      back={back}
=======
      formButton={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <p>Next</p>
          <GrLinkNext />
        </div>
      }
      back={backStep}
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      handleSubmit={async () => {
        if (validateSocialMedia() && validateWallet()) {
          await handleSubmit();
          if (isComplete()) {
            submit(userData);
          } else {
            setError("Please complete the form.");
          }
        }
      }}
      error={error}
    />
  );
};

export default Organization;
