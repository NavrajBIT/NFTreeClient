const CreateProjectOption = ({ setSelectedOption }) => {
  return (
    <div
      style={{
        minHeight: "var(--min-height-page)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "var(--padding-main)",
        padding: "var(--padding-main)",
        paddingTop: "var(--nav-height)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Create New Project
      </div>
      <div
        style={{
          display: "flex",
          gap: "var(--padding-main)",
          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        <OptionCard
          title="Monitoring Project"
          text="Projects aimed at tracking, analyzing or overseeing various aspects such as environmental changes, community progress or specific objectives."
          action={() => setSelectedOption("monitoring")}
        />
        <OptionCard
          title="Funding with Monitoring Project"
          text="Initiatives seeking financial support to realize their goals, whether for conservation, community development or environmental causes."
          action={() => setSelectedOption("funding")}
        />
      </div>
    </div>
  );
};

export default CreateProjectOption;

const OptionCard = ({ title, text, action }) => (
  <div
    style={{
      width: "100%",
      maxWidth: "var(--max-width-card)",
      background: "white",
      padding: "var(--padding-main)",
      borderRadius: "var(--border-radius-light)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--padding-main)",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "var(--green-30)",
      }}
    >
      {title}
    </div>
    <div style={{ textAlign: "justify" }}>{text}</div>
    <div className="primarybutton">
      <button onClick={action}>Create</button>
    </div>
  </div>
);
