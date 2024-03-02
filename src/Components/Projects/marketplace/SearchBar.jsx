

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import buttonimage from "./assets/Plus.png";
import buttonimage2 from "./assets/Plus2.png";

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);


  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        // padding: "var(--padding-light)",
      }}
    >
      <input
        type="text"
        className="marketplacesearchbar"
        style={{
          padding: "var(--padding-light)",
          border: isHighlighted ? "2px solid grey" : "none",
          width: "100%",
          outline: "none",
          background: "#F4F4F4",
          position: "relative",
          textIndent: "30px",
          height: "50px",
          // border: "none",
          boxShadow: "-3px 3px 5px 4px #aaaaaa inset",
          fontSize: "20px",
        }}
        onFocus={() => setIsHighlighted(true)}
        onBlur={() => setIsHighlighted(false)}
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

