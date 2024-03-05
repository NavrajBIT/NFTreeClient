import { useState } from "react";
import "./input.css";

import { IoMdAttach } from "react-icons/io";
import { IoAttachSharp } from "react-icons/io5";

const ProjectFormInput = ({
  label,
  type,
  required,
  value,
  onChange,
  maxLength,
  rows,
  options,
  placeholder,
  onTextChange,
}) => {
  const labelDisplay = required && label ? `${label}*` : label;
  const requiredPlaceholder =
    required && placeholder ? `${placeholder}*` : placeholder;
  const [isFocused, setIsFocused] = useState(false);

  const isLabel = isFocused || (value && value.length > 0);

  if (rows > 1) {
    return (
      <div
        className="projectFormContainer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {labelDisplay ? labelDisplay : ""}
        </p>
        <textarea
          type={type}
          className="projectFormInput"
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          maxLength={maxLength}
        />
      </div>
    );
  }

  if (type == "text" || type == "number") {
    return (
      <div
        className="projectFormContainer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {labelDisplay == undefined ? "" : labelDisplay}
        </p>
        <input
          type={type}
          className="projectFormInput"
          required={required}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          placeholder={requiredPlaceholder}
        />
      </div>
    );
  }

  if (type == "date") {
    return (
      <div
        className="projectFormContainer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {labelDisplay}
        </p>
        <input
          type={type}
          className="projectFormInput"
          required={required}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
    );
  }

  if (type == "select") {
    return (
      <div
        className="projectFormContainer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {labelDisplay}
        </p>
        <select
          type={type}
          className="projectFormInput"
          required={required}
          onChange={onChange}
          style={{ background: "white" }}
        >
          {options.map((option) => {
            return <option value={option.value}>{option.label}</option>;
          })}
        </select>
      </div>
    );
  }

  if (type == "walletAddress") {
    return (
      <div
        className="projectFormContainer"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {labelDisplay}
        </p>
        <div style={{ display: "flex", gap: "30px" }}>
          <select
            type={type}
            className="projectFormInput"
            required={required}
            onChange={onChange}
            style={{ background: "white", width: "35%" }}
          >
            {options.map((option) => {
              return (
                <option
                  value={option.value}
                  disabled={option.disabled}
                  selected={option.selected}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
          <input
            type="text"
            className="projectFormInput"
            required={required}
            value={value}
            onChange={onTextChange}
          />
        </div>
      </div>
    );
  }

  if (type == "file") {
    return (
      <div className="projectFormContainer">
        <p style={{ marginBottom: "2px", fontWeight: "500", color: "#404040" }}>
          {label}
          {required && "*"}
        </p>
        <div className="projectFormFileupload">
          <div>
            <p>
              {" "}
              {value
                ? value.split("/")[value.split("/").length - 1]
                : "Click to Upload"}
            </p>
            <IoAttachSharp style={{ color: "black" }} size={24} />
          </div>

          <input type="file" onChange={onChange} />
        </div>
      </div>
    );
  }
};

export default ProjectFormInput;
