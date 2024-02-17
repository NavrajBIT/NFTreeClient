import Myform from "../myformnew";
import useAPI from "../../../../api/useAPI";
import { useState, useEffect, useRef } from "react";
import Auth from "../../../Auth/Auth";
import Loading from "../../loading/loading";
import ProjectFormInput from "../inputs/projectFormInput";
import { BiSolidUser } from "react-icons/bi";

import userprofile from "./image/userprofile.png";

const Representative = ({ submit }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserdata] = useState(null);
  const profilepicrref = useRef(null);

  useEffect(() => {
    poppulateUser();
  }, [isLoggedIn]);

  const isComplete = () => {
    let status = true;
    if (userData) {
      delete userData.wallet;
      // let newUserData = userData.map((data) => {
      //   console.log(data);
      // });
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
      .crud("GET", "user/account")
      .then((res) => {
        console.log(res);
        if (res.status === 200) setUserdata(res[0]);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const ninproof = userData?.nin_proof;
  const signed_note = userData?.signed_note;

  const updateData = (key, value) => {
    setUserdata((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const uploadFile = async (file, key) => {
    setIsLoading(true);
    let formdata = new FormData();
    formdata.append(key, file);
    await api
      .crud("PATCH", `user/account/${userData.id}`, formdata, true)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          poppulateUser();
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
    handleSubmit();
  };

  const handleSubmit = async (e) => {
    if (isLoading) return;

    setIsLoading(true);
    let apiData = { ...userData };
    delete apiData.nin_proof;
    delete apiData.picture;
    delete apiData.signed_note;
    await api
      .crud("PATCH", `user/account/${userData.id}`, apiData)
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

  // const accountFormData = [
  //   [
  //     {
  //       label: "Designation",
  //       type: "text",
  //       value: userData?.designation,
  //       required: true,
  //       onChange: (e) => {
  //         updateData("designation", e.target.value);
  //       },
  //       maxLength: 100,
  //     },
  //     {
  //       label: "Phone",
  //       type: "text",
  //       value: userData?.phone,
  //       onChange: (e) => {
  //         updateData("phone", e.target.value);
  //       },
  //       maxLength: 100,
  //       required: true,
  //     },
  //     {
  //       label: "National Identification Number(NIN)",
  //       type: "text",
  //       value: userData?.nin,
  //       onChange: (e) => {
  //         updateData("nin", e.target.value);
  //       },
  //       maxLength: 100,
  //       required: true,
  //     },
  //     {
  //       label: "NIN Proof",
  //       type: "file",
  //       value: ninproof,
  //       onChange: (e) => {
  //         uploadFile(e.target.files[0], "nin_proof");
  //       },
  //     },
  //     {
  //       label: "Signed Note",
  //       type: "file",
  //       value: signed_note,
  //       onChange: (e) => {
  //         uploadFile(e.target.files[0], "signed_note");
  //       },
  //     },
  //   ],
  // ];

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;

  const src = userData?.picture
    ? userData?.picture
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";

  const submitForm = async () => {
    await handleSubmit();
    if (isComplete()) {
      submit();
    } else {
      setError("Please complete the form.");
    }
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          minHeight: "var(--min-height-form)",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "60%",
            padding: "0 var(--padding-main)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "var(--green-80)",
            }}
          >
            Representative Details
            <p
              style={{
                border: "1px solid #E6E6E6",
                margin: "var(--padding-light) 0 0",
              }}
            />
          </div>

          <ProjectFormInput
            label="Designation"
            type="text"
            required
            value={userData?.designation}
            onChange={(e) => updateData("designation", e.target.value)}
            maxLength="50"
          />
          <ProjectFormInput
            label="Phone"
            type="text"
            required
            value={userData?.phone}
            onChange={(e) => updateData("phone", e.target.value)}
            maxLength="50"
          />
          <ProjectFormInput
            label="National Identification Number (NIN)"
            type="text"
            required
            value={userData?.nin}
            onChange={(e) => updateData("nin", e.target.value)}
            maxLength="50"
          />

          <div style={{ display: "flex", gap: "50px" }}>
            <ProjectFormInput
              label="NIN Proof"
              type="file"
              required
              value={ninproof}
              onChange={(e) => uploadFile(e.target.files[0], "nin_proof")}
              maxLength="50"
            />
            <ProjectFormInput
              label="Signed Note"
              type="file"
              required
              value={signed_note}
              onChange={(e) => uploadFile(e.target.files[0], "signed_note")}
              maxLength="50"
            />
          </div>
          <button
            style={{
              padding: "var(--padding-light)",
              background: "#354A12",
              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
            }}
            onClick={submitForm}
          >
            {isComplete() ? "Next " : "Save"}
          </button>
        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <div
            style={{
              height: "var(--profile-pic-diameter)",
              width: "var(--profile-pic-diameter)",
              background: "#C4D1AC",
              borderRadius: "var(--profile-pic-diameter)",
              backgroundImage: `url("${
                userData ? userData.picture : userprofile
              }")`,
              backgroundSize: `${userData ? "cover" : "60%"}`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={() => profilepicrref.current.click()}
          >
            <input
              type="file"
              style={{ display: "none" }}
              ref={profilepicrref}
              onChange={(e) => uploadFile(e.target.files[0], "picture")}
            />
          </div>
          <div>Upload Profile Picture</div>
        </div>
      </form>

      {/* <Myform
        heading={"Representative Details"}
        formdata={accountFormData}
        formButton={isComplete() ? "Next >>" : "Save"}
        handleSubmit={async () => {
          await handleSubmit();
          if (isComplete()) {
            submit();
          } else {
            setError("Please complete the form.");
          }
        }}
        error={error}
      >
        <div
          style={{
            height: "var(--profile-pic-diameter)",
            width: "var(--profile-pic-diameter)",
            background: "var(--green-30)",
            borderRadius: "var(--profile-pic-diameter)",
            backgroundImage: `url("${src}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "var(--green-10)",
            margin: "auto",
          }}
          onClick={() => profilepicrref.current.click()}
        >
          <div>Profile Pic</div>
          Click to Upload
          <input
            type="file"
            style={{ display: "none" }}
            ref={profilepicrref}
            onChange={(e) => uploadFile(e.target.files[0], "picture")}
          />
        </div>
      </Myform> */}
    </>
  );
};

export default Representative;
