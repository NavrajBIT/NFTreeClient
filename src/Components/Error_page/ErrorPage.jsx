import { useNavigate } from "react-router";
import "./ErrorPage.css";
// import errorBackgroundImg from "./img/error-background.svg";
// import { FaArrowLeftLong } from "react-icons/fa6";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
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
      </div>
    </div>
  );
}
