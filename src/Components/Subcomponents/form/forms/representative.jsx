<<<<<<< HEAD
import Myform from "../myformnew";
=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
import useAPI from "../../../../api/useAPI";
import { useState, useEffect, useRef } from "react";
import AuthPopup from "../../../Auth/authPopup";
import Loading from "../../loading/loading";
import ProjectFormInput from "../inputs/projectFormInput";
<<<<<<< HEAD
import { BiSolidUser } from "react-icons/bi";

import userprofile from "./image/userprofile.png";
=======
import userprofile from "./image/userprofile.png";
import { GrLinkNext } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import "./forms.css";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

const Representative = ({ submit, data }) => {
  const api = useAPI();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserdata] = useState(null);
  const profilepicrref = useRef(null);
  const [NINError, setNINError] = useState("");

  useEffect(() => {
    poppulateUser();
  }, [isLoggedIn]);

  const isComplete = () => {
    let status = true;
<<<<<<< HEAD
    if (userData) {
      delete userData.wallet;
<<<<<<< HEAD
      // let newUserData = userData.map((data) => {
      //   console.log(data);
      // });
=======

>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      Object.keys(userData).map((key) => {
        if (!userData[key] || userData[key] === "") {
=======

    let newData = { ...userData };

    if (newData) {
      delete newData.wallet;
      delete newData.signed_note;
      delete newData.picture;

      Object.keys(newData).map((key) => {
        if (!newData[key] || newData[key] === "") {
>>>>>>> 90afaeffda289e03a467a116030ffa34676e2974
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
        if (res.status === 200) showUserData(res[0]);
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const showUserData = (savedData) => {
    if (Object.keys(data.representative).length === 0) {
      for (let i in savedData) {
        if (!(i === "id" || i === "user")) {
          savedData[i] = null;
        }
      }
    }

    setUserdata(savedData);
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
          setUserdata((prevdata) => ({ ...prevdata, [key]: file }));
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });

    setIsLoading(false);
    // handleSubmit();
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

<<<<<<< HEAD
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
=======
  if (!isLoggedIn) return <AuthPopup close={() => setIsLoggedIn(true)} />;
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

  if (isLoading) return <Loading />;

  const submitForm = async (e) => {
    e.preventDefault();

    if (userData.nin_proof == null) {
      setNINError("Upload NIN proof");
    } else {
      await handleSubmit();
      if (isComplete()) {
        submit(userData);
      } else {
        setError("Please complete the form.");
      }
    }
  };

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
<<<<<<< HEAD
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "var(--green-80)",
=======
          fontWeight: "600",
          color: "var(--heading-color)",
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
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
<<<<<<< HEAD
=======
            width: "58%",
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
          }}
        />
      </div>
      <form
        style={{
          display: "flex",
          minHeight: "var(--min-height-form)",
          width: "90%",
          margin: "auto",
<<<<<<< HEAD
          flexWrap: "wrap-reverse",
=======
          flexDirection: "column",
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
        }}
        onSubmit={submitForm}
      >
        <div
          style={{
<<<<<<< HEAD
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

          <div style={{ display: "flex", gap: "var(--padding-large)" }}>
=======
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
              value={userData?.designation == null ? "" : userData.designation}
              onChange={(e) => updateData("designation", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="Phone"
              type="text"
              onlyNumber={true}
              required
              value={userData?.phone == null ? "" : userData.phone}
              onChange={(e) => updateData("phone", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="National Identification Number (NIN)"
              onlyNumber={true}
              type="text"
              required
              value={userData?.nin == null ? "" : userData.nin}
              onChange={(e) => updateData("nin", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="NIN Proof"
              type="file"
              required
              value={ninproof}
              onChange={(e) => {
                setNINError("");
                uploadFile(e.target.files[0], "nin_proof");
              }}
              maxLength="50"
            />
            <div style={{ color: "var(--error)" }}>{NINError}</div>
            {/* <div
            style={{ display: "flex", gap: "var(--padding-large)" }}
            className="responsiveFlex"
          >
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
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
<<<<<<< HEAD
          </div>
          <div style={{ color: "red", height: "30px" }}>{error}</div>
          <button
            style={{
              padding: "var(--padding-light)",
              background: "#354A12",
              width: "var(--project-button-small)",
              borderRadius: "5px",
              marginTop: "var(--padding-large)",
              marginBottom: "100px",
              color: "white",
              borderColor: "transparent",
            }}
            onClick={submitForm}
          >
            {isComplete() ? "Next " : "Save"}
          </button>
        </div>
        <div
          style={{
            flex: "40%",
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
=======
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
                    ? typeof userData.picture == "string"
                      ? userData.picture
                      : URL.createObjectURL(userData.picture)
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
              Upload Profile Pic
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
          type="submit"
        >
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
        </button>
      </form>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
    </>
  );
};

export default Representative;
