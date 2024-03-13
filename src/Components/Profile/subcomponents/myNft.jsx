import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ProjectCard from "../../Subcomponents/projectCard/projectCard";

const MyNft = ({ script }) => {
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
          width: "100%",
        }}
      >
        Your NFTs
      </div>

      {script.nftData == "" && <div>No NFTs Available...</div>}
      {script.nftData && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
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

export default MyNft;

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
    <div
      style={{
        display: "flex",
        padding: "var(--padding-large)",
        background: "white",
        boxShadow: "4px 4px 8px 2px #aca3a3",
        borderRadius: "var(--border-radius-light)",
        gap: "30px",
      }}
      className="myNftPage"
    >
      <div>
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "350px",
            aspectRatio: "var(--image-aspect-ratio)",
            borderRadius: "10px",
            boxShadow: "2px 2px 8px 2px #aca3a3",
          }}
        />
      </div>

      <div>
        <div>
          <h1 style={{ fontWeight: "600" }}>{project.name}</h1>
          <div className="projectLocation">
            <span className="locationName">{project.city}</span>
            &bull;
            <span className="locationName">{project.country}</span>
          </div>
        </div>

        <div>
          <div className="projectdescription">
            {project.description.length > 240 ? (
              <>
                {project.description.substring(0, 140)}...
                <p style={{ fontWeight: "600" }}>Read More</p>
              </>
            ) : (
              project.description
            )}
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "110px 1fr" }}
          className="orgInfo"
        >
          <div className="trxInfo">
            <p>Token id: </p>
            <p>Amount Paid: </p>
            <p>No of Trees: </p>
            <p>Time Stamp: </p>
          </div>

          <div style={{ padding: "var(--padding-light)" }}>
            <p>{transaction.id}</p>
            <p>{transaction.amount}$</p>
            <p> {transaction.trees_count}</p>
            <p>{transaction.date}</p>
          </div>
        </div>
      </div>
      {/* <ProjectCard
        project={project}
        Nftproject={true}
        nftId={nft.id}
        treecount={transaction?.trees_count}
      /> */}
    </div>
  );
};
