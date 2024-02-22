import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

const Nfts = ({ script }) => {
  const navigate = useNavigate();
  return (
    <div
      className="primarycontainer"
      style={{ flexDirection: "column", margin: "var(--padding-large) 0" }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
          padding: "var(--padding-main) 0",
          justifyContent: "flex-start",
          display: "flex",
        }}
      >
        <p
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("mynft");
          }}
        >
          {" "}
          My NFTs
        </p>
      </div>

      {script.nftData == "" && <div>No NFTs Available...</div>}
      {script.nftData && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(var(--project-card-width), 1fr) )",
            gap: "30px",
            justifyItems: "center",
          }}
        >
          {script?.nftData?.map((nft, index) => (
            <NFTDataFunction nft={nft} key={"my-contribution-" + index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Nfts;

const NFTDataFunction = ({ nft }) => {
  const api = useAPI();
  const [project, setProject] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [transaction, setTransaction] = useState(null);
  useEffect(() => {
    poppulateTransaction();
  }, []);

  const poppulateTransaction = async () => {
    await api
      .crud("GET", `project/transaction/${nft.transaction}`)
      .then((res) => {
        if (res.status === 200) {
          setTransaction(res);
          poppulateProject(res.project);
        }
      })
      .catch((err) => console.log(err));
  };
  const poppulateProject = async (projectId) => {
    await api
      .crud("GET", `project/${projectId}`)
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
      <ProjectCard
        project={project}
        Nftproject={true}
        nftId={nft.id}
        treecount={transaction?.trees_count}
      />
    </div>
  );
};
