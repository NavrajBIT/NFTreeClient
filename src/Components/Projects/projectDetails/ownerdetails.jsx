import React from "react";

const Ownerdetails = ({ details }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width)",
        background: "var(--green-20)",
        padding: "var(--padding-main)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "var(--padding-light)",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        Owner Details
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-light)",
          justifyContent: "space-around",
        }}
      >
        {details.ownerdetails && details.ownerdetails.organization && (
          <Organization details={details} />
        )}
        {details.ownerdetails &&
          details.ownerdetails.account &&
          details.ownerdetails.email && <Representative details={details} />}
      </div>
    </div>
  );
};

export default Ownerdetails;

const Organization = ({ details }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "var(--green-15)",
        display: "flex",
        flexDirection: "column",

        gap: "var(--padding-light)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div style={{ fontWeight: "bold", textDecoration: "underline" }}>
        Organization details
      </div>
      <div>
        <Detail
          label={"Name"}
          value={details.ownerdetails?.organization[0].name}
        />
        <Detail
          label={"Description"}
          value={details.ownerdetails?.organization[0].description}
        />
        <Detail
          label={"Website"}
          value={details.ownerdetails?.organization[0].website}
        />
      </div>
    </div>
  );
};
const Representative = ({ details }) => {
  const src = details?.ownerdetails?.profilePic?.picture
    ? details?.ownerdetails?.profilePic?.picture
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "var(--max-width-form)",
        background: "var(--green-15)",
        gap: "var(--padding-light)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
      }}
    >
      <div style={{ fontWeight: "bold", textDecoration: "underline" }}>
        Representative details
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
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
        />
        <div>
          <Detail
            label={"Name"}
            value={
              details.ownerdetails?.account[0].first_name +
              " " +
              details.ownerdetails?.account[0].last_name
            }
          />
          <Detail
            label={"Email"}
            value={details.ownerdetails?.account[0].email}
          />
          <Detail
            label={"Phone"}
            value={details.ownerdetails?.account[0].phone}
          />
          <Detail
            label={"Wallet"}
            value={details.ownerdetails?.account[0].wallet}
          />
        </div>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "5fr 1fr 5fr",
      }}
    >
      <div>{label}</div>
      <div>:</div>
      <div>{value}</div>
    </div>
  );
};
