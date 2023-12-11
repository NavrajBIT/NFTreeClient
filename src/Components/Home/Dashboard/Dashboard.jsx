export default function Dashboard() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--green-20)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          margin: "auto",
          padding: "var(--padding-main)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "var(--padding-main)",
        }}
      >
        <KPICard kpi={{ heading: "Total Projects", value: 1000 }} />
        {/* <KPICard kpi={{ heading: "Total Users", value: 1000 }} /> */}
        <KPICard kpi={{ heading: " Total Trees Monitored", value: 10000 }} />
      </div>
    </div>
  );
}

const KPICard = ({ kpi }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-card)",
        background: "white",
        borderRadius: "var(--border-radius)",
        padding: "var(--padding-main)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-light)",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{kpi.heading}</div>{" "}
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "900",
          color: "var(--green-30)",
        }}
      >
        {kpi.value}
      </div>
    </div>
  );
};
