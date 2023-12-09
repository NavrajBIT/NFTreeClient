import { useNavigate } from "react-router-dom";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeIcon from "@mui/icons-material/Home";

const NoKYC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--padding-main)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          background: "var(--blank-light)",
          padding: "var(--padding-main)",
          borderRadius: "var(--border-radius)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--padding-main)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", color: "var(--green-30)" }}>
          Oops! Your KYC Appears to be Incomplete or Unverified
        </div>
        <img src="/kyc.png" alt="kyc" />
        <div style={{ fontSize: "1rem", color: "var(--green-30)" }}>
          Please get your KYC Approved to proceed further.
        </div>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--padding-light)",
          }}
        >
          <div className="secondarybutton">
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Home <HomeIcon />
            </button>
          </div>
          <div className="primarybutton">
            <button
              onClick={() => {
                navigate("/kyc");
              }}
            >
              KYC <ChecklistIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoKYC;
