import { useState } from "react";
import "./input.css";

const Input = ({ label, type, required, value, onChange, maxLength }) => {
  const labelDisplay = required ? `${label}*` : label;
  const [isFocused, setIsFocused] = useState(false);

  const isLabel = isFocused || (value && value.length > 0);

  return (
    <div
      className="inputcontainer"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <input
        placeholder={isLabel ? "" : labelDisplay}
        type={type}
        className="input"
        required={required}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {isLabel && <Label label={labelDisplay} />}
    </div>
  );
};

export default Input;

const Label = ({ label }) => {
  return <div className="label">{label}</div>;
};
