import "./Projects.css";
import { useState, useEffect } from "react";
import { projectList } from "../../../api/projectApi";
import { useNavigate, useLocation } from "react-router-dom";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function ProjectPage({ props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const firstPostIndex = (currentPage - 1) * postPerPage;
  const lastPostIndex = currentPage * postPerPage;

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const projectListData = async () => {
      const response = await projectList();

      const filteredProjects = response.filter(
        (project) => !project.donation || project.donation === ""
      );
      setData(response);
      setFilterData(filteredProjects);
    };

    projectListData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newData = data.filter((project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
    setFilterData(newData);
  };

  const handleFilter = (e) => {
    console.log(e);
    const selectedFilter = e.target.value;

    let filteredProjects = [];

    switch (selectedFilter) {
      case "all":
        filteredProjects = data;
        break;
      case "donating":
        filteredProjects = data.filter(
          (project) => project.donation !== null && project.donation !== ""
        );
        break;
      case "monitoring":
        filteredProjects = data.filter(
          (project) => !project.donation || project.donation === ""
        );
        break;
      default:
        break;
    }

    setFilterData(filteredProjects);
  };

  return (
    <div className="project-container" style={{ minHeight: "100vh" }}>
      <div className="primarybutton" style={{ position: "relative" }}>
        <button
          onClick={() => navigate("/projects/create")}
          style={{ width: "fit-content", position: "absolute", right: 0 }}
        >
          Create New Project +
        </button>
      </div>
      <div className="projectHead">
        <h1> Projects</h1>
      </div>

      <div className="projectSearch">
        <input
          type="text"
          placeholder="Search Project"
          onChange={handleSearch}
        />

        <FormControl className="filterBtn">
          <select
            name="filter"
            id="filter"
            className="filterBtn"
            onChange={handleFilter}
          >
            <option value="all">All</option>
            <option value="monitoring" defaultValue selected>
              Monitoring Projects{" "}
            </option>
            <option value="donating">Funding + Monitoring Projects</option>
          </select>
        </FormControl>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))",
          rowGap: "2rem",
          marginTop: "2rem",
        }}
      >
        {filterData.map(
          (project, index) => (
            <ProjectCard key={"project-" + index} project={project} />
          )
          // (
          //   <div
          //     className="box"
          //     key={project.id}
          //     onClick={() =>
          //       navigate(`${location.pathname}/${project.id}`, {
          //         state: { data: project, user: "user" },
          //       })
          //     }
          //   >
          //     <img src={project.image} alt="" />
          //     <h4>{project.name}</h4>
          //     {/* <span>{project.location}</span> */}
          //     <p style={{ height: "65px" }}>
          //       {project.description.length > 100
          //         ? `${project.description.substring(0, 100)}...`
          //         : project.description}
          //     </p>

          //     <div className="primarybutton">
          //       {project.donation && <button>Donate</button>}
          //     </div>
          //   </div>
          // )
        )}
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="projectCard">
      <img src={project.image} alt={project.name} />
      <div className="projectname">{project.name}</div>
      <div className="projectdescription">{project.description}</div>
      <div
        className="clickhandler"
        onClick={() => navigate(`/projects/${project.id}`)}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--padding-light)",
        }}
      >
        <div className="secondarybutton">
          <button>
            Share <ShareIcon />
          </button>
        </div>
        <div className="secondarybutton">
          <button onClick={() => navigate(`/projects/report/${project.id}`)}>
            Report <AssessmentIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
