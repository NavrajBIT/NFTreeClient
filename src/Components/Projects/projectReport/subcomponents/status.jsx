import React from "react";

const Status = ({ script }) => {
  let diversity = 1;

  try {
    diversity = script.project.plant_types.split(",").length;
  } catch (e) {}

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "white",
        borderRadius: "var(--border-radius)",
        padding: "var(--padding-main)",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Status
      </div>
      <Detail label={"Species Diversity"} value={diversity} />
      <Detail label={"Tree age"} value={script?.report?.trees_age} />
      <Detail label={"Tree Growth"} value={script?.report?.trees_growth} />
    </div>
  );
};

export default Status;

const Detail = ({ label, value }) => {
  return (
    <div style={{ display: "flex", gap: "var(--padding-light)" }}>
      <div style={{ width: "10rem" }}>{label}</div> : <div>{value}</div>
    </div>
  );
};
