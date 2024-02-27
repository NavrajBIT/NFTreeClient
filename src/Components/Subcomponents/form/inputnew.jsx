import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useRef, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Checkbox from "@mui/material/Checkbox";
import "./input.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ProjectFormInput from "./inputs/projectFormInput";
import { IoIosAttach } from "react-icons/io";

const Input = ({ inputData, error }) => {
  const [isSelected, setIsSelected] = useState(false);
  const inputref = useRef(null);

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
      <div className="projectFormContainer">
        <div>{inputData.label}:</div>
        <div className="projectFormFileupload">
          <div>
            <p>{value}</p>
            <IoIosAttach />
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
      <div style={{ position: "relative" }}>
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

      <div
        style={{
          color: "var(--error)",
          fontSize: "0.8rem",
          height: "15px",
        }}
      >
        {error ? "This field is required." : ""}
      </div>
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
