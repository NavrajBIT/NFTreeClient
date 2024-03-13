import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import SearchBar from "./SearchBar";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import Sidebar from "./subComponent/sidebar";
import Main from "./subComponent/main";
import "./main.css";

export default function ProjectPage() {
  const [filterData, setFilterData] = useState([]);
  const api = useAPI();

  const [data, setData] = useState([]);

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

  // const sortData = () => {
  //   const sortedData = [...filterData];
  //   sortedData.sort((a, b) => console.log(a, b));
  // };

  // sortData();

  return (
    <div
      style={{
        minHeight: "var(--min-height-page)",
        marginTop: "var(--nav-height-small)",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "15%",
          minWidth: "280px",
          background: "#335D51",
          color: "white",
        }}
        className="projectSidebar"
      >
        <Sidebar
          filterData={filterData}
          data={data}
          setFilterData={setFilterData}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Main filterData={filterData} data={data} />
      </div>
    </div>
  );
}
