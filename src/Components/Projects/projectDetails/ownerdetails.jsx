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
        {details.project && <Organization details={details} />}
        {details.project && <Representative details={details} />}
      </div>
    </div>
  );
};

export default Ownerdetails;

const Organization = ({ details }) => {
  const data = details.project.owner.organization;
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
        <Detail label={"Name"} value={data?.name} />
        <Detail label={"Description"} value={data?.description} />
        <Detail label={"Website"} value={data?.website} />
      </div>
    </div>
  );
};
const Representative = ({ details }) => {
  const data = details.project.owner.representative;
  const src = data?.pic
    ? data.pic
    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
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
        Representative details
      </div>

      <div
        style={{
          display: "grid",
          gap: "var(--padding-light)",
          alignItems: "center",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        }}
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
            value={data?.first_name + " " + data?.last_name}
          />
          <Detail label={"Email"} value={data?.email} />
          <Detail label={"Phone"} value={data?.phone} />
          <Detail label={"Wallet"} value={data?.wallet} />
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
        gridTemplateColumns: "3fr 1fr 5fr",
      }}
    >
      <div>{label}</div>
      <div>:</div>
      <div style={{ wordBreak: "break-all" }}>{value}</div>
    </div>
  );
};
