import EditIcon from "@mui/icons-material/Edit";

const OrganizationDetails = ({ script }) => {
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
