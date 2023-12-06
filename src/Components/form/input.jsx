import { TextField } from "@mui/material";

const Input = ({ inputData, error }) => {
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
        error={error}
        inputProps={{
          maxLength: inputData.maxLength,
        }}
        InputProps={{
          style: { borderRadius: "var(--border-radius)" },
        }}
      />
      {inputData.multiline && (
        <CharCount
          maxCount={inputData.maxLength}
          value={inputData.value}
          error={error}
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
