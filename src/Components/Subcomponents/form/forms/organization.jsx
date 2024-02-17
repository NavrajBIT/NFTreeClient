import Myform from "../myformnew";
import useAPI from "../../../../api/useAPI";
import { useState, useEffect } from "react";
import Auth from "../../../Auth/Auth";
import Loading from "../../loading/loading";

const Organization = ({ submit, backStep }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserdata] = useState(null);

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
          updateData("description", e.target.value);
        },
        maxLength: 500,
        multiline: true,
        rows: 4,
        required: true,
      },
      {
        label: "Address",
        type: "text",
        value: userData?.address,
        onChange: (e) => {
          updateData("address", e.target.value);
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
        type: "text",
        value: userData?.social_links,
        onChange: (e) => {
          updateData("social_links", e.target.value);
        },
        maxLength: 1000,
        required: true,
        multiline: true,
        rows: 4,
      },
    ],
  ];

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;

  return (
    <Myform
      heading={"Organization Details"}
      formdata={accountFormData}
      formButton={isComplete() ? "Next" : "Save"}
      back={back}
      handleSubmit={async () => {
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
