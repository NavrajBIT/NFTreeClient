import CloseIcon from "@mui/icons-material/Close";
import "./popup.css";
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
        background: "rgba(0,0,0,0.8)",
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
          maxHeight: "90vh",
          overflowY: "auto",
          animation: "popup 0.3s",
        }}
      >
        {close && (
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          >
            <button
              style={{
                borderRadius: "50px",
                background: "var(--error)",
                height: "40px",
                width: "40px",
                display: "felx",
                alignItems: "center",
                justifyContent: "center",
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
