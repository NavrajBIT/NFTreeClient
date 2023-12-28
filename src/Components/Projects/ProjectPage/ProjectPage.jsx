import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import SearchBar from "./SearchBar";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

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
        marginTop: "var(--nav-height)",
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
          display: "grid",
          gap: "var(--padding-main)",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(var(--project-card-width), 1fr) )",
          justifyItems: "center",
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
