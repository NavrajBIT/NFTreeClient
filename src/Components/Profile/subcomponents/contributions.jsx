import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";

const Contributions = ({ script }) => {
  return (
    <div className="primarycontainer" style={{ flexDirection: "column" }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        My Contributions
      </div>
      <div>Projects I have donated to...</div>

      {!script.transactions && <div>No Contributions yet...</div>}

      {script.transactions && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "var(--padding-main)",
            flexWrap: "wrap",
          }}
        >
          {script?.transactions?.map((transaction, index) => (
            <Transaction
              transaction={transaction}
              key={"my-contribution-" + index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Contributions;

const Transaction = ({ transaction }) => {
  const api = useAPI();
  const [project, setProject] = useState(null);
  useEffect(() => {
    poppulateProject();
  }, []);

  const poppulateProject = () => {
    api
      .crud("GET", `/project/${transaction.project}`)
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
      </div>
    </div>
  );
};
