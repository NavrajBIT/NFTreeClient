import { useState, useEffect, useRef } from "react";
import ProjectFormInput from "../inputs/projectFormInput";
import userprofile from "./image/userprofile.png";
import { GrFormNextLink } from "react-icons/gr";
import "./forms.css";

const Representative = ({ submit, data, setData }) => {
  const [error, setError] = useState("");
  const profilepicrref = useRef(null);

  const userKeys = ["designation", "phone", "nin", "nin_proof"];

  const updateData = (key, value) => {
    setError("");
    setData((prev) => {
      let newData = { ...prev };
      newData[key] = value;
      return newData;
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let isValid = true;
    userKeys.map((key) => {
      if (!data[key] || data[key] == "") {
        isValid = false;
        if (key === "nin_proof") setError("Please Upload NIN Proof");
        // else if (key === "picture") setError("Please Upload Profile Picture");
        else setError("* All fields are required.");
      }
    });
    if (isValid) submit();
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
        onSubmit={submitForm}
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
              value={data?.designation}
              onChange={(e) => updateData("designation", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="Phone"
              type="text"
              // onlyNumber={true}
              required
              value={data?.phone}
              onChange={(e) => updateData("phone", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="National Identification Number (NIN)"
              type="text"
              required
              value={data?.nin}
              onChange={(e) => updateData("nin", e.target.value)}
              maxLength="50"
            />
            <ProjectFormInput
              label="National Identification Number Proof"
              type="file"
              required
              value={data?.nin_proof?.name}
              onChange={(e) => {
                updateData("nin_proof", e.target.files[0]);
              }}
              maxLength="35"
            />

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
                  data?.picture
                    ? URL.createObjectURL(data.picture)
                    : userprofile
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              onClick={() => {
                profilepicrref.current.click();
              }}
            >
              <input
                type="file"
                style={{ display: "none" }}
                ref={profilepicrref}
                onChange={(e) => {
                  updateData("picture", e.target.files[0]);
                }}
              />
            </div>
            <br />
            <label className="profileName">Click to Upload Photo</label>
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
    </>
  );
};

export default Representative;
