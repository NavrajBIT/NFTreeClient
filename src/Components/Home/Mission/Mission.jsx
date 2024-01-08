import "./Mission.css";
import mission from "./assets/mission.png";
import img1 from "../assets/home-img-1.png";
import img2 from "../assets/home-img-2.png";

const Mission = () => {
  return (
    <div
      style={{
        background: "var(--green-10)",
        minHeight: "var(--min-height-section)",
      }}
    >
      <div
        className="heroContainer"
        style={{
          background: "var(--green-10)",
          minHeight: "var(--min-height-section)",
        }}
      >
        <MissionContent />
        <div
          className="homeimg"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            flexWrap: "wrap",
          }}
        >
          <img
            src={img1}
            alt="img1"
            style={{ width: "var(--home-card-image)", alignSelf: "flex-end" }}
          />
          <img
            src={img2}
            alt="img2"
            style={{ width: "var(--home-card-image)", alignSelf: "flex-start" }}
          />
        </div>
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
      height: "100%",
      justifyContent: "space-around",
      padding: "var(--padding-main)",
    }}
  >
    <div
      className="heroheading"
      style={{
        fontSize: "3rem",
        color: "var(--green-100)",
        fontWeight: "bold",
      }}
    >
      The Impact and Mission of BITbhoomi
    </div>
    <br />
    <br />

    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        textAlign: "justify",
        color: "var(--green-100)",
      }}
    >
      At BITbhoomi, we aim to pioneer a transformative intersection of
      technology, environmental sustainability, and community engagement and are
      committed to foster positive change, thus promoting a healthier planet.
    </div>
  </div>
);
