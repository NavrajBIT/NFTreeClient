import EditIcon from "@mui/icons-material/Edit";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import useAPI from "../../../api/useAPI";
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
  const src = script?.account?.picture
    ? script?.account?.picture
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

// phone = models.CharField(max_length=15, blank=True, null=True)
// wallet = models.CharField(max_length=100, blank=True, null=True)
// designation = models.CharField(max_length=100, blank=True, null=True)
// nin = models.CharField(max_length=100, blank=True, null=True)  #national Id number
// signed_note = models.FileField(upload_to=fileupload, blank=True, null=True)
// picture = models.ImageField(upload_to=fileupload, blank=True, null=True)
// nin_proof

const Details = ({ script }) => {
  const navigate = useNavigate();
  const api = useAPI();
  const connectWallet = () => {
    if (!window.bit) navigate("/wallet");
    else {
      window.bit
        .connect()
        .then(async (res) => {
          script.setIsLoading(true);
          await api
            .crud("PATCH", `user/account/${script.account.id}`, {
              wallet: res,
            })
            .then((res) => {
              console.log(res);
              if (res.status >= 200 && res.status <= 299) {
                script.poppulateData("user/account", script.setAccount);
              }
            })
            .catch((err) => {
              if (err === 401) script.setIsLoggedIn(false);
            });

          script.setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
          wordBreak: "break-all",
        }}
      >
        {!script?.user?.first_name && "Anonymous"}
        {script?.user?.first_name} {script?.user?.last_name}
      </div>
      <div style={{ width: "fit-content" }}>
        <DataDisplay label="Designation" value={script?.account?.designation} />
        <DataDisplay label="Email" value={script?.user?.email} />
        <DataDisplay label="Phone" value={script?.account?.phone} />

        <DataDisplay
          label="National Identification Number(NIN)"
          value={script?.account?.nin}
        />
        <DataDisplay
          label="Proof of NIN"
          value={script?.account?.nin_proof}
          isFile
        />
        <DataDisplay
          label="Signed note from Organization"
          value={script?.account?.signed_note}
          isFile
        />
        {script?.account?.wallet ? (
          <DataDisplay label="Wallet" value={script?.account?.wallet} />
        ) : (
          <div className="secondarybutton">
            <button onClick={connectWallet}>Connect Wallet</button>
          </div>
        )}
      </div>
    </div>
  );
};

const DataDisplay = ({ label, value, isFile }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      gap: "var(--padding-light)",
      alignItems: "center",
    }}
  >
    <div>{label}</div>:
    <div style={{ wordBreak: "break-all" }}>
      {isFile ? <FileButton file={value} /> : value}
    </div>
  </div>
);

const FileButton = ({ file }) => {
  if (!file) return "---";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // border: "1px solid grey",
        // padding: "var(--padding-light)",
        // borderRadius: "var(--border-radius)",
        cursor: "pointer",
        fontSize: "0.85rem",
      }}
      onClick={() => window.open(file)}
    >
      Uploaded File
      <FileOpenIcon style={{ fontSize: "1.5rem" }} />
    </div>
  );
};
