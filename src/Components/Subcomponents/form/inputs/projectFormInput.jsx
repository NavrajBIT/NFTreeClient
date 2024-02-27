import { useState } from "react";
import "./input.css";

import { IoIosAttach } from "react-icons/io";

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
        <p style={{ marginBottom: "2px" }}>
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
        <p style={{ marginBottom: "2px" }}>
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
        <p style={{ marginBottom: "2px" }}>{labelDisplay}</p>
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
        <p style={{ marginBottom: "2px" }}>{labelDisplay}</p>
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

  if (type == "file") {
    return (
      <div className="projectFormContainer">
        <div>{label}:</div>
        <div className="projectFormFileupload">
          <div>
            <p>
              {" "}
              {value
                ? value.split("/")[value.split("/").length - 1]
                : "Click to Upload"}
            </p>
            <IoIosAttach />
          </div>

          <input type="file" onChange={onChange} />
        </div>
      </div>
    );
  }
};

export default ProjectFormInput;
