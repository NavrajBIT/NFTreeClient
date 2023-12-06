import "./loading.css";

const LocalLoading = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        position: "fixed",
        top: "0px",
        left: "0px",
        background: "var(--filter)",
      }}
    >
      <img src="/loading.svg" alt="loading..." className="loadingimage" />
    </div>
  );
};

export default LocalLoading;
