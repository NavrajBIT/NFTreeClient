import useAPI from "../../../../api/useAPI";
import { useState, useEffect, useRef } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import ProjectFormInput from "../inputs/projectFormInput";
import userprofile from "./image/userprofile.png";
import { GrLinkNext } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "./forms.css";

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
      delete userData.signed_note;
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

  if (!isLoggedIn) return <AuthPopup close={() => setIsLoggedIn(true)} />;

  if (isLoading) return <Loading />;

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
      <div
        style={{
          fontWeight: "600",
          color: "var(--heading-color)",
          width: "86%",
          margin: "auto",
          marginBottom: "var(--padding-light)",
        }}
      >
        Representative Details
        <p
          style={{
            border: "1px solid #E6E6E6",
            margin: "var(--padding-light) 0 0",
            width: "58%",
          }}
        />
      </div>
      <form
        style={{
          display: "flex",
          minHeight: "var(--min-height-form)",
          width: "90%",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            margin: "auto",
            flexWrap: "wrap-reverse",
          }}
        >
          <div
            style={{
              flex: "60%",
              padding: "0 var(--padding-main)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
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

            <ProjectFormInput
              label="NIN Proof"
              type="file"
              required
              value={ninproof}
              onChange={(e) => uploadFile(e.target.files[0], "nin_proof")}
              maxLength="50"
            />

            {/* <div
            style={{ display: "flex", gap: "var(--padding-large)" }}
            className="responsiveFlex"
          >
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
          </div> */}
            <div style={{ color: "red", height: "30px" }}>{error}</div>
          </div>
          <div
            style={{
              flex: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "170px",
                width: "170px",
                background: "#C4D1AC",
                borderRadius: "var(--profile-pic-diameter)",
                backgroundImage: `url(${
                  userData?.picture != undefined
                    ? userData.picture
                    : userprofile
                })`,
                backgroundSize: `${
                  userData?.picture != undefined ? "cover" : "60%"
                }`,
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
            <br />
            <p
              style={{
                fontWeight: "500",
                marginBottom: "var(--padding-large)",
              }}
            >
              Upload Profile Picture
            </p>
          </div>
        </div>
        <button
          style={{
            padding: "var(--padding-light)",
            background: "#354A12",
            width: "var(--project-button-small)",
            borderRadius: "5px",
            marginBottom: "100px",
            color: "white",
            borderColor: "transparent",
            marginLeft: "var(--padding-main)",
            marginBottom: "3rem",
          }}
          onClick={submitForm}
        >
          {isComplete() ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p>Next</p>
              <GrFormNextLink size={30} />
            </div>
          ) : (
            "Save"
          )}
        </button>
      </form>
    </>
  );
};

export default Representative;
