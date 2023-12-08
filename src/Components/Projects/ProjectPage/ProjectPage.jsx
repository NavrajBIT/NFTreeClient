import { useState, useEffect } from "react";
import { projectList } from "../../../api/projectApi";
import { useNavigate } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Input from "../../form/input";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import useAPI from "../../../api/useAPI";

export default function ProjectPage() {
  const api = useAPI();
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const projectListData = async () => {
      await api
        .crud("GET", "project/projectlist")
        .then((response) => {
          if (response.status === 200) {
            setData(response);
            setFilterData(() =>
              response.filter(
                (project) => !project.donation || project.donation === ""
              )
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    projectListData();
  }, []);

  return (
    <div
      style={{
        minHeight: "var(--min-height-page)",
        maxWidth: "var(--max-width)",
        margin: "auto",
        padding: "var(--padding-main)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--padding-main)",
      }}
    >
      <CreateProjectButton />
      <SearchBar setFilterData={setFilterData} data={data} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-main)",
        }}
      >
        {filterData.map((project, index) => (
          <ProjectCard key={"project-" + index} project={project} />
        ))}
      </div>
    </div>
  );
}

const CreateProjectButton = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <div className="primarybutton" style={{ width: "fit-content" }}>
        <button onClick={() => navigate("/projects/create")}>
          Create New Project +
        </button>
      </div>
    </div>
  );
};

const SearchBar = ({ setFilterData, data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("Monitoring");
  const filterOptions = [
    {
      label: "Monitoring",
      value: "monitoring",
    },
    {
      label: "Funding & Monitoring",
      value: "donating",
    },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const newData = data.filter((project) =>
      project.name.toLowerCase().includes(searchTerm)
    );
    setFilterData(newData);
  };

  const handleFilter = (e) => {
    const selectedFilter = e.value;
    setFilterValue(e.label);

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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "5fr 1fr",
        gap: "var(--padding-light)",
      }}
    >
      <Input
        inputData={{
          label: "",
          type: "text",
          icon: <SearchIcon />,
          value: searchValue,
          maxLength: 50,
          onChange: handleSearch,
        }}
      />
      <Input
        inputData={{
          label: "",
          type: "select",
          icon: <FilterAltIcon />,
          value: filterValue,
          select: true,
          maxLength: 50,
          options: filterOptions,
          onChange: handleFilter,
        }}
      />
    </div>
  );
};

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
          <button
            onClick={() => {
              try {
                const projectUrl = `${import.meta.env.VITE_LOCATION}projects/${
                  project.id
                }`;
                navigator.clipboard.writeText(projectUrl);
                alert("Project link copied.");
              } catch {}
            }}
          >
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
