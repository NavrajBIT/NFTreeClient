import React from "react";

const Impact = ({ script }) => {
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
        Environmental Impact
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-main)",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Detail
          label={
            <>
              CO<sub>2</sub> Emission
            </>
          }
          value={script?.report?.co2_absorption + " kg"}
        />
        <Detail
          label={
            <>
              O<sub>2</sub> Emission
            </>
          }
          value={script?.report?.oxygen_emission + " kg"}
        />
      </div>
    </div>
  );
};

export default Impact;

const Detail = ({ label, value }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--padding-light)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "150px",
          height: "150px",
          background: "var(--green-30)",
          borderRadius: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {value}
      </div>
      <div
        style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        {label}
      </div>
    </div>
  );
};
