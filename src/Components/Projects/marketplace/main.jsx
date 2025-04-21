import {useState, useEffect} from "react";
import Sidebar from "./sidebar";
import Projectsview from "./projectsview";
import "./marketplace.css";
import {mockProjects} from "../../../api/mockProjectData";

export default function ProjectPage() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");

  // Reset filters when component mounts
  useEffect(() => {
    setFilters([]);
    setSearch("");
  }, []);

  useEffect(() => {
    let footer = document.getElementById("footer");
    footer.style.display = "none";
    return () => (footer.style.display = "block");
  }, []);

  useEffect(() => {
    // Using mock data
    setData(mockProjects);
    setFilterData(mockProjects);
  }, []);

  useEffect(() => {
    let newdata = [];
    data.map(project => {
      let isApplicable = true;
      filters.map(filter => {
        if (filter.type === "status") {
          if (filter.value === 1 && project.funding.raised < project.funding.total) {
            isApplicable = false;
          }
          if (filter.value === 2 && project.funding.raised >= project.funding.total) {
            isApplicable = false;
          }
        }
        if (project[filter.type] === filter.value) isApplicable = false;
      });
      if (search && search !== "") {
        let projectname = project.name.toString().toLowerCase();
        let searchstring = search.toLocaleLowerCase();
        if (!projectname.includes(searchstring)) {
          isApplicable = false;
        }
      }
      if (isApplicable) newdata.push(project);
    });

    setFilterData(newdata);
  }, [filters, search]);

  return (
    <div
      style={{
        minHeight: "var(--min-height-page)",
        width: "100vw",
        background: "var(--bg-bright)"
      }}>
      <div
        style={{
          width: "100%",
          height: "var(--nav-height)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)"
        }}
      />
      <div style={{display: "flex"}}>
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          data={data}
        />

        <Projectsview
          filteredData={filterData}
          filters={filters}
          setFilters={setFilters}
          data={data}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}
