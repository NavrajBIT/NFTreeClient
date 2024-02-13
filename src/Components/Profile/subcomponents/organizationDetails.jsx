import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";

const OrganizationDetails = ({ script }) => {
  const socials = script?.organization?.social_links
    ? script?.organization?.social_links.split(",")
    : [];
  return (
    <div className="primarycontainer" style={{ flexDirection: "column" }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Organization
      </div>
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
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
          display: "flex",
          gap: "var(--padding-light)",
          flexWrap: "wrap",
        }}
      >
        {socials.map((url, index) => (
          <SocialLink url={url} key={"social-" + index} />
        ))}
      </div>
      <EditButton script={script} />
    </div>
  );
};

export default OrganizationDetails;

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
      <button onClick={() => script.setEditorganizationPopup(true)}>
        <EditIcon />
      </button>
    </div>
  );
};

const SocialLink = ({ url }) => {
  // const [icon, setIcon] = useState("/logo_white.png");
  // const getIcon = () => {
  //   fetch(url)
  //     .then((res) => {
  //       console.log("---------------------------");
  //     })
  //     .then((html) => {
  //       console.log("here---");
  //       const parser = new DOMParser();
  //       const doc = parser.parseFromString(html, "text/html");
  //       const faviconLink =
  //         doc.querySelector('link[rel~="icon"]') ||
  //         doc.querySelector('link[rel~="shortcut icon"]');
  //       console.log(faviconLink);
  //       if (faviconLink) {
  //         const faviconUrl = new URL(faviconLink.href, url).href;
  //         console.log(faviconUrl);
  //         setIcon(faviconUrl);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getIcon();
  // }, []);
  return (
    <div onClick={() => window.open(url)}>
      <ArticleIcon style={{ fontSize: "2rem" }} />
    </div>
  );
};
