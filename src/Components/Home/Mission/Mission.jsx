import "./Mission.css";
import mission from "./assets/mission.png";

const Mission = () => {
  return (
    <div style={{ background: "var(--green-20)" }}>
      <div className="heroContainer">
        <MissionContent />
        <div
          style={{
            backgroundImage: `url(${mission})`,
          }}
          className="heroimageContainer heroImageDesktop"
        />
        <div
          style={{
            backgroundImage: `url(${mission})`,
          }}
          className="heroimageContainer heroImageLaptop"
        />
      </div>
    </div>
  );
};

export default Mission;

const MissionContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--padding-light)",
    }}
  >
    <div className="heroheading" style={{ fontSize: "3rem" }}>
      The Impact and Mission of NFTree
    </div>
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        textAlign: "justify",
        fontWeight: "bold",
      }}
    >
      At NFTree, we aim to pioneer a transformative intersection of technology,
      environmental sustainability, and community engagement and are committed
      to foster positive change, thus promoting a healthier planet.
    </div>
  </div>
);
