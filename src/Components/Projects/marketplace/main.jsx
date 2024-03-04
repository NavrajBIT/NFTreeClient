import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";
import Sidebar from "./sidebar";
import Projectsview from "./projectsview";
import "./marketplace.css";

export default function ProjectPage() {
  const api = useAPI();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let footer = document.getElementById("footer");
    footer.style.display = "none";
    return () => (footer.style.display = "block");
  }, []);

  useEffect(() => {
    const projectListData = async () => {
      await api
        .crud("GET", "project/projectlist")
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setData(response);
            setFilterData(response);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    projectListData();
  }, []);

  useEffect(() => {
    let newdata = [];
    data.map((project) => {
      let isApplicable = true;
      filters.map((filter) => {
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
        background: "var(--bg-bright)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "var(--nav-height-small)",
          backgroundImage: "linear-gradient(170deg, #1B2F2F, #224629)",
        }}
      />
      <div style={{ display: "flex" }}>
        <Sidebar filters={filters} setFilters={setFilters} data={data} />

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
