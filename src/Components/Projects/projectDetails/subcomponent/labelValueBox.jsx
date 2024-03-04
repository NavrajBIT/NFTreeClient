const LabelValueBox = ({ label, value }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
        }}
      >
        <p
          style={{
            width: "80%",
            fontSize: "1.1rem",
            fontWeight: "500",
          }}
        >
          {label}
        </p>
      </div>

      <div
        style={{
          width: "50%",
        }}
      >
        <p
          style={{
            width: "100%",
            fontSize: "1rem",
            color: "rgba(0, 0, 0, 0.7)",
            wordBreak: "break-word",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default LabelValueBox;
