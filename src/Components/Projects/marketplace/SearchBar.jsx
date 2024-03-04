import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <input
        type="text"
        style={{
          padding: "var(--padding-light)",
          borderColor: "grey",
          borderRadius: "var(--border-radius-big)",
          width: "100%",
          outline: "none",
          background: "#F4F4F4",
          position: "relative",
          textIndent: "30px",
          height: "50px",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "var(--green-110)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "silver";
        }}
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        placeholder="Search"
      />
      <span
        style={{
          position: "absolute",
          left: "10px",
          top: "28%",
          //   transform: "translate(-50%,-50%)",
        }}
      >
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;

export const CreateButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="createButton"
        onClick={() => navigate("/projects/create")}
        style={{
          background: "var(--green-110)",
          borderColor: "transparent",
          borderRadius: "var(--border-radius-big)",
          fontWeight: "600",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "unset",
          height: "50px",
        }}
      >
        <p>Create New Project</p>

        <span
          style={{
            borderRadius: "50%",
            fontSize: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          +
        </span>
      </button>
    </div>
  );
};
