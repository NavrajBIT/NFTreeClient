import { useNavigate } from "react-router";
import "./ErrorPage.css";
<<<<<<< HEAD
import errorBackgroundImg from "./img/error-background.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
=======
// import errorBackgroundImg from "./img/error-background.svg";
// import { FaArrowLeftLong } from "react-icons/fa6";
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
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
=======
    <div>
      <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
      <div
        className="Error-container"
      >
        <h4 className="oops">OOPS!</h4>
        <h4 className="erNum">404</h4>
        <h4 className="missing">Something’s missing.</h4>
        <p  className="errorPara">
          The page is missing or you assembled the link incorrectly.
        </p>
        <div style={{ padding: "30px" }}>
          <button
            onClick={() => navigate(-1)}
            className="errorButton"
          >
            <img src="/Arrow.svg" />
            <span> Go Back</span>
          </button>
        </div>
>>>>>>> 0bf9333728cf8ef7c6a66aaf11cf535cb419fafe
      </div>
    </div>
  );
}
