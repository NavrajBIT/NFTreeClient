import "./input.css";
import { useState } from "react";

const OpenMultiline = ({
  label,
  type,
  required,
  value,
  onChange,
  maxLength,
  rows,
}) => {
  const labelDisplay = required ? `${label}*` : label;
  const [isFocused, setIsFocused] = useState(false);

  const isLabel = isFocused || (value && value.length > 0);
  return (
    <div
      className="inputcontainer"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <textarea
        placeholder={isLabel ? "" : labelDisplay}
        type={type}
        className="openinput"
        required={required}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        rows={rows}
      />
      {isLabel && <Label label={labelDisplay} />}
      <TextLength value={value} maxLength={maxLength} />
    </div>
  );
};

export default OpenMultiline;

const Label = ({ label }) => {
  return <div className="label">{label}</div>;
};

const TextLength = ({ value, maxLength }) => {
  const length = value ? value.toString().length : 0;
  return (
    <div className="textlength">
      {length}/{maxLength}
    </div>
  );
};
