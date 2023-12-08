import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import "./input.css";

const Input = ({ inputData, error }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <TextField
        id="outlined-basic"
        label={inputData.label}
        variant="outlined"
        type={inputData.type}
        fullWidth
        required={inputData.required}
        multiline={inputData.multiline}
        rows={inputData.rows}
        value={inputData.value ? inputData.value : ""}
        onChange={inputData.onChange}
        onClick={() => setIsSelected((prev) => !prev)}
        // onFocus={() => setIsSelected(true)}
        // onBlur={() => setIsSelected(false)}
        error={error}
        autoComplete={inputData.select ? "off" : "on"}
        inputProps={{
          maxLength: inputData.maxLength,
          style: {
            cursor: inputData.select && "context-menu",
          },
        }}
        InputProps={{
          style: {
            borderRadius: "var(--border-radius)",
            background: "white",
            cursor: "context-menu",
          },
          startAdornment: inputData.icon ? (
            <InputAdornment position="start">{inputData.icon}</InputAdornment>
          ) : null,
        }}
      />
      {inputData.multiline && (
        <CharCount
          maxCount={inputData.maxLength}
          value={inputData.value}
          error={error}
        />
      )}
      {inputData.select && <DropDownIcon isSelected={isSelected} />}
      {inputData.select && (
        <DropDownMenu
          isSelected={isSelected}
          inputData={inputData}
          setIsSelected={setIsSelected}
        />
      )}
      {error && (
        <div
          style={{
            color: "var(--error)",
            fontSize: "0.8rem",
          }}
        >
          This field is required.
        </div>
      )}
    </div>
  );
};

export default Input;

const CharCount = ({ maxCount, value, error }) => (
  <div
    style={{
      position: "absolute",
      bottom: error ? "var(--padding-main)" : "var(--padding-light)",
      right: "var(--padding-light)",
    }}
  >
    {value.length}/{maxCount}
  </div>
);

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
