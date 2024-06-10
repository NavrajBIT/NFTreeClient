import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import useAPI from "../../../api/useAPI";
import { useState, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const MyContribution = ({ script }) => {
  return (
    <div className="myContributionDiv">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p className="pTitle">My Contributions</p>
          {/* <p
            className="pPara"
          >
            Contributions made by you
          </p> */}
        </div>
        {/* <div>
          <button className="profileButtons">
            <img src="./VectorPlus.svg" alt="Plus" />
            <span style={{}}>Make Contribution</span>
          </button>
        </div> */}
      </div>

      <div className="projectCardDiv">
        {script?.transactions?.map((transaction, index) => (
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
  const navigate = useNavigate();
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
  let project2 = project;
  project2.type = 2;
  return (
    <div
      style={{ width: "100%", maxWidth: "320px" }}
      onClick={() => navigate(`/transactions/nft/${transaction?.nft?.cert_id}`)}
    >
      <ProjectCard project={project2} transaction={transaction} />
    </div>
  );
};
