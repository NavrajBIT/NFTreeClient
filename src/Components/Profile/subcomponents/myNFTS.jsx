import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";

const MyNFTs = ({ script }) => {
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
        }}
      >
        <div>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
            }}
          >
            My NFTs
          </p>
        </div>
        <div></div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
        }}
      >
        {script?.nftData?.map((nft, index) => (
          <NFTDataFunction nft={nft} key={"my-contribution-" + index} />
        ))}
      </div>
    </div>
  );
};

export default MyNFTs;

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
