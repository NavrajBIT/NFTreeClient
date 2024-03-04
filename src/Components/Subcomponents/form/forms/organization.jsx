import Myform from "../myformnew";
import useAPI from "../../../../api/useAPI";
import { useState, useEffect } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import { GrLinkNext } from "react-icons/gr";

const Organization = ({ submit, backStep }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserdata] = useState(null);

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
    {
      label: "Near",
      value: 2,
    },
    {
      label: "Bitcoin",
      value: 3,
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
        console.log(res);
        if (res.status === 200) setUserdata(res[0]);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
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
    let apiData = { ...userData };
    delete apiData.nin_proof;
    delete apiData.picture;
    delete apiData.signed_note;
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
        console.log(res);
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
        value: userData?.wallet
          ? userData.wallet[Object.keys(userData.wallet)[0]]
          : "",

        onChange: (e) => {
          // console.log(e.target.value, blockchainOptions[e.target.value]);
          updateData("wallet", {
            [blockchainOptions[e.target.value].value]: "",
          });
        },

        onTextChange: (e) => {
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
        label: "Social Media Links",
        type: "socialMediaData",
        value: userData?.social_links,
        onChange: (e, label) => {
          updateData("sociallinks", {
            ...userData.sociallinks,
            [label.toLowerCase()]: e.target.value,
          });
        },
        options: { socialMediaOptions },
      },
    ],
  ];

  if (!isLoggedIn) return <AuthPopup close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;

  return (
    <Myform
      heading={"Organization Details"}
      formdata={accountFormData}
<<<<<<< HEAD
      formButton={isComplete() ? "Next" : "Save"}
      back={back}
=======
      formButton={
        isComplete() ? (
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
        ) : (
          "Save"
        )
      }
      back={backStep}
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      handleSubmit={async () => {
        const newUserData = userData;
        newUserData.social_links = JSON.stringify(newUserData.sociallinks);
        delete newUserData.sociallinks;
        setUserdata(newUserData);
        console.log(newUserData);
        await handleSubmit();
        if (isComplete()) {
          submit();
        } else {
          setError("Please complete the form.");
        }
      }}
      error={error}
    />
  );
};

export default Organization;
