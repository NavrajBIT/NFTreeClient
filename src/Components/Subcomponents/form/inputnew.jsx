import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Checkbox from "@mui/material/Checkbox";
import "./input.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ProjectFormInput from "./inputs/projectFormInput";
<<<<<<< HEAD
import { IoIosAttach } from "react-icons/io";
=======
import { IoMdAttach } from "react-icons/io";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

const Input = ({ inputData, error }) => {
  const [isSelected, setIsSelected] = useState(false);
  const inputref = useRef(null);

<<<<<<< HEAD
  // if (inputData.type === "file") {
  //   let filename = (function () {
  //     try {
  //       return inputData?.value?.split("/")[
  //         inputData?.value?.split("/").length - 1
  //       ];
  //     } catch {
  //       return "Uploaded Successfully.";
  //     }
  //   })();

  //   return (
  //     <div
  //       style={{
  //         width: "100%",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "space-between",
  //         border: "1px solid grey",
  //         cursor: "pointer",
  //         padding: "var(--padding-light) var(--padding-main)",
  //         borderRadius: "var(--border-radius)",
  //       }}
  //       onClick={() => inputref.current.click()}
  //     >
  //       <div>{inputData.label}:</div>
  //       <div>{inputData.value ? filename : "Click to Upload"}</div>

  //       <input
  //         type="file"
  //         ref={inputref}
  //         style={{ display: "none" }}
  //         onChange={inputData.onChange}
  //       />
  //       <AttachFileIcon />
  //     </div>
  //   );
  // }

=======
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
  if (inputData.type == "file") {
    var value = "Click to Upload";

    if (inputData.value == null) {
      value = "Click to Upload";
    } else if (typeof inputData.value == "string") {
      value = inputData.value;
    } else if (typeof inputData.value["name"] == "string") {
      value = inputData.value["name"];
    } else {
      value = "Click to Upload";
    }

    return (
<<<<<<< HEAD
      <div className="projectFormContainer">
        <div>{inputData.label}:</div>
        <div className="projectFormFileupload">
          <div>
            <p>{value}</p>
            <IoIosAttach />
=======
      <div className="projectFormContainer" style={{ marginBottom: "15px" }}>
        <div>
          <p
            style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}
          >
            {inputData.label}
            {inputData.required ? "*" : ""}
          </p>
        </div>
        <div className="projectFormFileupload">
          <div>
            <p>{value}</p>
            <IoMdAttach style={{ color: "black" }} size={20} />
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
          </div>

          <input type="file" onChange={inputData.onChange} />
        </div>
      </div>
    );
  }

  if (inputData.type === "checkbox") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          onChange={() => inputData.onChange(!inputData.value)}
          checked={inputData.value}
        />
        {inputData.label}
      </div>
    );
  }

  if (inputData.type === "select") {
    return (
<<<<<<< HEAD
      <div style={{ position: "relative" }}>
=======
      <div style={{ position: "relative", marginBottom: "15px" }}>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
        <ProjectFormInput
          label={inputData.label}
          type={inputData.type}
          required={inputData.required}
          value={inputData.value ? inputData.value : ""}
          onChange={inputData.onChange}
          options={inputData.options}
        />
      </div>
    );
  }

<<<<<<< HEAD
=======
  if (inputData.type === "walletAddress") {
    return (
      <div style={{ position: "relative", marginBottom: "15px" }}>
        <ProjectFormInput
          label={inputData.label}
          type={inputData.type}
          required={inputData.required}
          value={inputData.value}
          onChange={inputData.onChange}
          options={inputData.options.blockchainOptions}
          onTextChange={inputData.onTextChange}
        />
      </div>
    );
  }

  if (inputData.type === "socialMediaData") {
    return (
      <div style={{ position: "relative", marginBottom: "15px" }}>
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {inputData.label}
        </p>
        {inputData.options.socialMediaOptions.map((data) => {
          return (
            <div
              style={{
                display: "flex",
                margin: "6px 0",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  width: "25%",
                  fontSize: "medium",
                  color: "#404040",
                }}
              >
                {data.label}
              </p>
              <input
                type="text"
                className="projectFormInput"
                onChange={(e) => inputData.onChange(e, data.label)}
              />
            </div>
          );
        })}
      </div>
    );
  }

>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <ProjectFormInput
        label={inputData.label}
        type={inputData.type}
        required={inputData.required}
        value={inputData.value ? inputData.value : ""}
        onChange={inputData.onChange}
        rows={inputData.rows}
        options={inputData.options}
        placeholder={inputData.placeholder}
      />
      {inputData.multiline && (
        <CharCount maxCount={inputData.maxLength} value={inputData.value} />
      )}
      {inputData.select && <DropDownIcon isSelected={isSelected} />}
      {inputData.select && (
        <DropDownMenu
          isSelected={isSelected}
          inputData={inputData}
          setIsSelected={setIsSelected}
        />
      )}

<<<<<<< HEAD
      {inputData.errorField != "None" && (
        <div
          style={{
            color: "var(--error)",
            fontSize: "0.8rem",
            height: "15px",
          }}
        >
          {error ? "This field is required." : ""}
        </div>
      )}
=======
      <div
        style={{
          color: "var(--error)",
          fontSize: "0.8rem",
          height: "15px",
        }}
      >
        {error ? "This field is required." : ""}
      </div>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
    </div>
  );
};

export default Input;

const CharCount = ({ maxCount, value, error }) => {
  const length = value ? value.length : 0;
  return (
    <div
      style={{
        position: "absolute",
        bottom: "var(--padding-large)",
        right: "var(--padding-light)",
      }}
    >
      {length}/{maxCount}
    </div>
  );
};

const DropDownIcon = ({ isSelected }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "var(--padding-light)",
        transform: "translateY(-40%)",
      }}
    >
      {isSelected ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
    </div>
  );
};

const DropDownMenu = ({ isSelected, inputData, setIsSelected }) => {
  if (!isSelected) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: "0%",
        top: "100%",

        background: "white",
        width: "fit-content",
        minWidth: "100%",
        borderRadius: "var(--border-radius-light)",
        display: "flex",
        flexDirection: "column",
        zIndex: 50,
      }}
    >
      {inputData.options.map((option, index) => {
        return (
          <div
            key={"drop-down-" + index + "-" + option.label}
            className="menuitem"
            onClick={() => {
              inputData.onChange(option);
              setIsSelected(false);
            }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
