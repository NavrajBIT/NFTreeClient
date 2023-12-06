import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const PrimaryDetails = ({ script }) => {
  return (
    <div className="primarycontainer">
      <ProfilePic script={script} />
      <Details script={script} />
      <EditButton script={script} />
    </div>
  );
};

export default PrimaryDetails;

const EditButton = ({ script }) => {
  return (
    <div
      className="secondarybutton"
      style={{
        position: "absolute",
        top: "var(--padding-main)",
        right: "var(--padding-main)",
      }}
    >
      <button onClick={() => script.setEditprofilePopup(true)}>
        <EditIcon />
      </button>
    </div>
  );
};

const ProfilePic = ({ script }) => {
  const [isHovered, setisHovered] = useState(false);
  const inputref = useRef(null);
  const src = script?.profilePic?.picture
    ? script?.profilePic?.picture
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  return (
    <div
      style={{
        height: "var(--profile-pic-diameter)",
        width: "var(--profile-pic-diameter)",
        background: "var(--green-30)",
        borderRadius: "var(--profile-pic-diameter)",
        backgroundImage: `url("${src}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
      onClick={() => inputref.current.click()}
    >
      {isHovered && (
        <div className="profilepicedit">
          <div>Click to edit</div>
        </div>
      )}
      <input
        type="file"
        ref={inputref}
        onChange={(e) => script.uploadProfilepic(e.target.files[0])}
        style={{ display: "none" }}
      />
    </div>
  );
};

const Details = ({ script }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        {!script?.account?.first_name && "Anonymous"}
        {script?.account?.first_name} {script?.account?.last_name}
      </div>
      <div style={{ width: "fit-content" }}>
        <DataDisplay label="Phone" value={script?.account?.phone} />
        <DataDisplay label="Email" value={script?.email?.email} />
        <DataDisplay label="Wallet" value={script?.account?.wallet} />
        <DataDisplay
          label="KYC"
          value={script?.kyc?.status === "Approved" ? "Approved" : "Unverified"}
        />
      </div>
      <KYCButton script={script} />
    </div>
  );
};

const DataDisplay = ({ label, value }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      gap: "var(--padding-light)",
    }}
  >
    <div>{label}</div>:<div>{value}</div>
  </div>
);

const KYCButton = ({ script }) => {
  const navigate = useNavigate();
  if (script?.kyc?.status === "Approved") return null;

  return (
    <div className="primarybutton">
      <button onClick={() => navigate("/kyc")}>Apply For KYC</button>
    </div>
  );
};
