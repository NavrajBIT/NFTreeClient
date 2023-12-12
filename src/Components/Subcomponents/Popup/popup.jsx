import CloseIcon from "@mui/icons-material/Close";
const Popup = ({ children, close }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0px",
        left: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--filter)",
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width-form)",
          background: "var(--green-15)",
          borderRadius: "var(--border-radius)",
          padding: "var(--padding-main)",
          boxShadow: "0 0 20px 1px var(--green-30)",
          position: "relative",
        }}
      >
        {close && (
          <div
            className="primarybutton"
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          >
            <button
              style={{
                borderRadius: "var(--border-radius)",
                background: "var(--error)",
              }}
              onClick={close}
            >
              <CloseIcon />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Popup;
