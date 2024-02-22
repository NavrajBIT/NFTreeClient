import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

const Contributions = ({ script }) => {
  console.log(script?.transactions);
  return (
    <div
      className="primarycontainer"
      style={{ flexDirection: "column", margin: "var(--padding-large) 0" }}
    >
      <div
        style={{
          color: "var(--green-30)",
          padding: "var(--padding-main) 0",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--green-30)",
            }}
          >
            My Contributions
          </p>
          <p>Contrubution made by you</p>
        </div>

        <div>
          <button
            style={{
              color: "var(--green-30)",
              height: "100%",
              background: "var(--green-110)",
              padding: "0 var(--padding-light)",
              borderRadius: "10px",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
            className="buttonText"
          >
            <span
              style={{
                fontSize: "40px",
              }}
            >
              +
            </span>
            <p> Make Contribution</p>
          </button>
        </div>
      </div>

      {!script.transactions && <div>No Contributions yet...</div>}

      {script.transactions && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(var(--project-card-width), 1fr) )",
            gap: "var(--padding-large)",
            justifyItems: "center",
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
      .crud("GET", `project/${transaction.project}`)
      .then((res) => {
        if (res.status === 200) {
          setProject(res);
        }
      })
      .catch((err) => console.log(err));
  };

  if (!project) return null;
  return <ProjectCard project={project} contribution={transaction.amount} />;
};
