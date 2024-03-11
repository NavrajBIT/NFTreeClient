<<<<<<< HEAD
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ searchValue, setSearchValue }) => {
=======
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import buttonimage from "./assets/Plus.png";
import buttonimage2 from "./assets/Plus2.png";
const SearchBar = ({ searchValue, setSearchValue }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
>>>>>>> 90afaeffda289e03a467a116030ffa34676e2974
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
<<<<<<< HEAD
=======
          // border: "none",
          boxShadow: "-3px 3px 5px 4px #AAAAAA inset",
          fontSize: "20px",
>>>>>>> 90afaeffda289e03a467a116030ffa34676e2974
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
<<<<<<< HEAD
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
=======
        <p>Create new project</p>
        <img src={buttonimage} alt="" className="desktop" />
        <img src={buttonimage2} alt="" className="mobile" />
>>>>>>> 90afaeffda289e03a467a116030ffa34676e2974
      </button>
    </div>
  );
};
