import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

const Nfts = ({ script }) => {
  return (
    <div className="primarycontainer" style={{ flexDirection: "column" }}>
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "var(--green-30)",
        }}
      >
        My NFTs
      </div>

      {!script.nftData && <div>No NFTs Available...</div>}
      {script.nftData && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "var(--padding-main)",
            flexWrap: "wrap",
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
      <ProjectCard project={project} Nftproject={true} nftId={nft.id} />
      <div>Contribution: {transaction?.amount} $</div>
      <div>Trees: {transaction?.trees_count}</div>
    </div>
  );
};
