import { useNavigate } from "react-router";
import "./ErrorPage.css";
import errorBackgroundImg from "./img/error-background.svg";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      className="Error-container"
      style={{
        background: `url(${errorBackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "80px",
        backgroundSize: "contain",
      }}
    >
      {/* <img
        src={errorBackgroundImg}
        alt=""
        style={{ position: "absolute", zIndex: "-1", top:"80px"}}
      /> */}
      <h4>OOPS!</h4>
      <h4 style={{ fontSize: "clamp(7rem, 25vw, 10rem)" }}>404</h4>
      <h4 style={{ color: "var(--green-85)" }}>Something’s missing.</h4>
      <p
        style={{
          color: "var(--green-85)",
          fontSize: "larger",
          fontWeight: "600",
        }}
      >
        The page is missing or you assembled the link incorrectly.
      </p>
      <div style={{ padding: "30px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            color: "var(--green-110)",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaArrowLeftLong />
          <span> Go Back</span>
        </button>
      </div>
    </div>
  );
}
