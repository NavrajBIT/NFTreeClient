import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import useAPI from "../../../api/useAPI";
import { useState, useEffect } from "react";
import "./profile.css"
const MyContribution = ({ script }) => {
  return (
    <div
      style={{
        backgroundColor: "#D2E0D6",
        width: "100%",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center"
        }}
      >
        <div>
          <p
          className="pTitle"
          
          >
            My Contributions
          </p>
          <p
          className="pPara"
          >
            Contributions made by you
          </p>
        </div>
        <div>
          <button className="profileButtons">
            <img src="./VectorPlus.svg" alt="Plus" />
            <span style={{}}>Make Contribution</span>
          </button>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        {script?.myprojects?.map((transaction, index) => (
          <Transaction
            transaction={transaction}
            key={"my-contribution-" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default MyContribution;

const Transaction = ({ transaction }) => {
  const api = useAPI();
  const [project, setProject] = useState(null);
  useEffect(() => {
    poppulateProject();
  }, []);

  const poppulateProject = () => {
    api
      .crud("GET", `project/${transaction.project}`)
      .then((res) => {
        if (res.status === 200) {
          setProject(res);
        }
      })
      .catch((err) => console.log(err));
  };

  if (!project) return null;
  return (
    <div>
      <ProjectCard project={project} />
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
        Contribution: {transaction.amount}$
      </div>
    </div>
  );
};
