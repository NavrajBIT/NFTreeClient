import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../../api/useAPI";
import ProjectCard from "../../../Subcomponents/projectCard/projectCard";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../../../Subcomponents/form/input";
import "../main.css";
import filter from "./image/filter.png";
import Sidebar from "./sidebar";

const Main = ({ filterData, data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterMenu, setFilterMenu] = useState(false);

  const searchData = filterData.filter((searchdata) => {
    return searchdata.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div style={{ margin: "var(--padding-main)" }}>
      {/* heading */}
      <div
        style={{ textAlign: "center", color: "var(--green-110)" }}
        className="mainHeading"
      >
        <h1>Welcome to BitBhoomi Sustainability Marketplace!!</h1>
      </div>

      {/* search area */}
      <div
        style={{
          display: "flex",
          gap: "var(--border-radius-large)",
          margin: "var(--padding-large)",
        }}
        className="searchSection"
      >
        <div
          className="filterIcon"
          style={{
            background: "#335D51",
            borderRadius: filterMenu ? "10px 10px 0px 0px" : "10px",
            display: "none",
            position: "relative",
          }}
        >
          <img src={filter} alt="" onClick={() => setFilterMenu(!filterMenu)} />
          {filterMenu && (
            <div
              style={{
                position: "absolute",
                background: "#335D51",
                top: "100%",
                width: "400px",
                borderRadius: "30px",
                borderTopLeftRadius: "0px",
                color: "white",
                fontWeight: "600",
              }}
            >
              <Sidebar filterData={filterData} data={data} />
            </div>
          )}
        </div>

        <div style={{ width: "80%" }}>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div style={{ width: "20%" }}>
          <CreateButton />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "var(--padding-large)",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(var(--project-card-width), 1fr) )",

          justifyItems: "center",
        }}
      >
        {searchData.map((project, index) => (
          <ProjectCard key={"project-" + index} project={project} />
        ))}
      </div>
    </div>
  );
};

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        type="text"
        style={{
          padding: "var(--padding-light)",
          borderColor: "grey",
          borderRadius: "var(--border-radius-large)",
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

const CreateButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="createButton"
        onClick={() => navigate("/projects/create")}
        style={{
          padding: "var(--padding-light)",
          background: "var(--green-110)",
          borderColor: "transparent",
          borderRadius: "var(--border-radius-large)",
          fontWeight: "600",
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "unset",
          height: "50px",
          minWidth: "115px",
        }}
      >
        <p>Create New Project</p>

        <span
          style={{
            border: "1px solid white",
            borderRadius: "50%",
            width: "20px",
            height: "21px",
          }}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default Main;
