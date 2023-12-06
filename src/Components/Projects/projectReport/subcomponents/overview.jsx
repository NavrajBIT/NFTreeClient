const Overview = ({ script }) => {
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
        Overview
      </div>
      <Detail label={"Project Name"} value={script?.project?.name} />
      <Detail label={"Plantation Area"} value={script?.project?.area} />
      <Detail label={"Type of Plants"} value={script?.project?.plant_types} />
      <Detail label={"No. of Plants"} value={script?.project?.plant_planned} />
      <Detail
        label={"Location"}
        value={script?.project?.city + ", " + script?.project?.country}
      />
    </div>
  );
};

export default Overview;

const Detail = ({ label, value }) => {
  return (
    <div style={{ display: "flex", gap: "var(--padding-light)" }}>
      <div style={{ width: "10rem" }}>{label}</div> : <div>{value}</div>
    </div>
  );
};
