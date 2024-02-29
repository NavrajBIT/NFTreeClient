import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import buttonimage from "./assets/Plus.png";
import buttonimage2 from "./assets/Plus2.png";

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
        className="marketplacesearchbar"
        style={{
          padding: "var(--padding-light)",
          borderColor: "grey",
          width: "100%",
          outline: "none",
          background: "#F4F4F4",
          position: "relative",
          textIndent: "30px",
          height: "50px",
          border: "none",
          boxShadow: "-3px 3px 5px #aaaaaa inset",
          fontSize: "20px",
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
        className="marketplacecreateButton"
        onClick={() => navigate("/projects/create")}
      >
        <p>Create new project</p>

        <img src={buttonimage} alt="" className="desktop" />
        <img src={buttonimage2} alt="" className="mobile" />
      </button>
    </div>
  );
};
