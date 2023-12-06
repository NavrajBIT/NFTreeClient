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

      setData(response);
      setFilterData(response);
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

  return (
    <div className="project-container" style={{ minHeight: "100vh" }}>
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/projects/create")}>
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
          {/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
          {/* <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem>Delhi</MenuItem>
            <MenuItem>Mumbai</MenuItem>
            <MenuItem>Kolkata</MenuItem>
            <MenuItem>Chennai</MenuItem>
          </Select> */}
        </FormControl>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "var(--padding-main)",
          flexWrap: "wrap",
          padding: "var(--padding-main)",
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
