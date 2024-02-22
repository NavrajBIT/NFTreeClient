import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import "../profile.css";

const OrganizationDetails = ({ script }) => {
  const socials = script?.organization?.social_links
    ? script?.organization?.social_links.split(",")
    : [];
  return (
    <div
      className="primarycontainer orgInfo"
      style={{ flexWrap: "wrap", gap: "var(--padding-large)" }}
    >
      <div
        style={{
          flex: "65%",
          border: "1px solid #cfcece",
          borderRadius: "var(--border-radius-light)",
          padding: "var(--padding-light)",
          background: "white",
          position: "relative",
        }}
      >
        <div style={{ padding: "var(--padding-light) 0" }}>
          <h1>Organization</h1>
        </div>

        <div style={{ padding: "var(--padding-light) 0" }}>
          <p
            style={{
              fontSize: "x-large",
              fontWeight: "500",
              paddingBottom: "5px",
            }}
          >
            {script?.organization?.name}
          </p>
          <p> {script?.organization?.description}</p>
        </div>

        <div style={{ padding: "var(--padding-light) 0" }}>
          <p>
            <span>Website: </span>
            {script?.organization?.website}
          </p>
          <p>
            <span>Address: </span>
            {script?.organization?.address}
          </p>
          <p>
            <span>Country: </span>
            {script?.organization?.country}
          </p>
          <p>
            <span>Area Code: </span>
            {script?.organization?.pin_code}
          </p>
          <p>
            <span>Reg. Id: </span>
            {script?.organization?.reg_id}
          </p>
        </div>
        <EditButton script={script} type="org" />
      </div>

      <div
        style={{
          flex: "30%",
          border: "1px solid #cfcece",
          borderRadius: "var(--border-radius-light)",
          padding: "var(--padding-light)",
          background: "white",
          position: "relative",
        }}
      >
        <div style={{ padding: "var(--padding-light) 0" }}>
          <h1>Profile Info</h1>
        </div>

        <div style={{ padding: "var(--padding-light) 0" }}>
          <p>
            <span>Ph no: </span>
            {script?.account?.phone}
          </p>
          <p>
            <span>National Identification Number(NIN): </span>
            {script?.account?.nin}
          </p>
          <p>
            <span>Proof of NIN: </span>
            <a href={script?.account?.nin_proof}>Nin Proof</a>
          </p>
          <p>
            <span>Signed Note from Organization: </span>

            <a href={script?.account?.signed_note}>Signed Note</a>
          </p>
        </div>
        <EditButton script={script} type="profile" />
      </div>

      {/* <div className="primarycontainer" style={{ flexDirection:  "column" }}>
        <div
          style={{
            fontSize:  "2rem",
            fontWeight:  "700",
            color:  "var(--green-30)",
          }}
        >
          Organization
        </div>
        <div
          style={{
            fontSize:  "1.5rem",
            fontWeight:  "700",
          }}
        >
          {script?.organization?.name}
        </div>
        <div>{script?.organization?.description}</div>
        <div>
          <DataDisplay label="Website" value={script?.organization?.website} />
          <DataDisplay label="Country" value={script?.organization?.country} />
          <DataDisplay label="Reg. Id" value={script?.organization?.reg_id} />
          <DataDisplay label="Reg. Id" value={script?.organization?.reg_id} />
        </div>
        <div
          style={{
            display:  "flex",
            gap:  "var(--padding-light)",
            flexWrap:  "wrap",
          }}
        >
          {socials.map((url, index) => (
            <SocialLink url={url} key={"social-" + index} />
          ))}
        </div>
        <EditButton script={script} />
      </div> */}
    </div>
  );
};

export default OrganizationDetails;

// const DataDisplay = ({ label, value }) => (
//   <div
//     style={{
//       width:  "100%",
//       display:  "flex",
//       gap:  "var(--padding-light)",
//     }}
//   >
//     <div>{label}</div>: <div>{value}</div>
//   </div>
// );

const EditButton = ({ script, type }) => {
  return (
    <div
      className="secondarybutton"
      style={{
        position: "absolute",
        top: "var(--padding-main)",
        right: "var(--padding-main)",
      }}
    >
      <button
        onClick={() =>
          type == "org"
            ? script.setEditorganizationPopup(true)
            : script.setEditprofilePopup(true)
        }
        style={{
          padding: "var(--padding-light)",
          borderRadius: "50%",
          background: "var(--green-110)",
        }}
      >
        <EditIcon />
      </button>
    </div>
  );
};

// const SocialLink = ({ url }) => {
//   const [icon, setIcon] = useState("/logo_white.png");
//   const getIcon = () => {
//     fetch(url)
//       .then((res) => {
//         console.log("---------------------------");
//       })
//       .then((html) => {
//         console.log("here---");
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, "text/html");
//         const faviconLink =
//           doc.querySelector('link[rel~="icon"]') ||
//           doc.querySelector('link[rel~="shortcut icon"]');
//         console.log(faviconLink);
//         if (faviconLink) {
//           const faviconUrl = new URL(faviconLink.href, url).href;
//           console.log(faviconUrl);
//           setIcon(faviconUrl);
//         }
//       })
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     getIcon();
//   }, []);
//   return (
//     <div onClick={() => window.open(url)}>
//       <ArticleIcon style={{ fontSize:  "2rem" }} />
//     </div>
//   );
// };
