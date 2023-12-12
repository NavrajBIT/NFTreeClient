import "./loading.css";

const Loading = () => {
  return (
    <div
      style={{
        minHeight: "90vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <img src="/loading.svg" alt="loading..." className="loadingimage" />
      <div style={{ fontSize: "1.5rem", color: "var(--green-30)" }}>
        Loading...
      </div>
    </div>
  );
};

export default Loading;
