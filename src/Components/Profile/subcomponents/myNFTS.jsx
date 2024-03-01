import ProjectCard from "../../Subcomponents/projectCard/projectCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";
import "./profile.css"

const MyNftDetails = ({ script }) => {
  const navigate = useNavigate();

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
            className="pTitle"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("mynft")}
          >
            {" "}
            My NFTs
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: 'flex',
          gap: '2rem',
        }}
      >
        {script?.nftData?.map((nft, index) => (
          <NFTDataFunction nft={nft} key={"my-contribution-" + index} />
        ))}
      </div>
    </div>
  );
};

export default MyNftDetails;

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
    <ProjectCard project={project} Nftproject={true} nftId={nft.id} />
  );
};
