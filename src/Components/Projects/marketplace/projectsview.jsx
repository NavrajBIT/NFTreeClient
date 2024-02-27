import { useState } from "react";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import SearchBar from "./SearchBar";
import { CreateButton } from "./SearchBar";
import filtericon from "./assets/filter.png";
import Sidebar from "./sidebar";

const Projectsview = ({
  filteredData,
  filters,
  setFilters,
  data,
  search,
  setSearch,
}) => {
  const [filterMenu, setFilterMenu] = useState(false);
  return (
    <div className="projectsviewcontainer">
      <div className="projectsviewcontainerheading">
        Welcome to BitBhoomi Sustainability Marketplace!!
      </div>
      <div className="searchbarcontainer">
        <div
          className="filterIcon"
          style={{
            background: "#335D51",
            borderRadius: filterMenu ? "10px 10px 0px 0px" : "10px",
            position: "relative",
          }}
        >
          <img
            src={filtericon}
            alt=""
            onClick={() => setFilterMenu(!filterMenu)}
          />
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
              <Sidebar
                isMobile
                filters={filters}
                setFilters={setFilters}
                data={data}
              />
            </div>
          )}
        </div>
        <SearchBar searchValue={search} setSearchValue={setSearch} />
        <CreateButton />
      </div>
      <div className="marketplaceprojectscontainer">
        {filteredData.map((project, index) => (
          <ProjectCard project={project} key={"project-" + index} />
        ))}
      </div>
    </div>
  );
};

export default Projectsview;
