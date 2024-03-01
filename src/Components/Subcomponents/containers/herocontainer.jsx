import bg from "./assets/hero2.png";

const Herocontainer = ({ children, innerStyle, style }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "var(--min-height-page)",
        display: "flex",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "10rem",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          height: "100%",
          padding: "var(--padding-main)",
          ...innerStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Herocontainer;
