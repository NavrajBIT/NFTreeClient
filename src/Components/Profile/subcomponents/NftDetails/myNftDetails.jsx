import { useState } from "react";
import useAPI from "../../../../api/useAPI";
import { useEffect } from "react";
import "../profile.css";
import "./myNftDetails.css";
import LocalLoading from "../../../Subcomponents/loading/localloading";

const MyNftDetails = ({ script }) => {
  return (
    <div className="profileSubContainer" style={{ height: "auto" }}>
      <div className="coverPicContainer">
        <div className="profilePicContainer">
          <div style={{ zIndex: "-1" }}>
            <img src={script.account?.picture} alt="profile pic" />
          </div>
          <p className="PName">
            {script?.user?.first_name} {script?.user?.last_name}
          </p>
          <p className="PDesignation">{script?.account?.designation}</p>
          <p className="PEmail">{script?.user?.email}</p>
        </div>
      </div>

      <section className="myNftSection">
        <h1>Your NFTs</h1>

        {script.nftData == "" && <div>No NFTs Available...</div>}

        {script.nftData && (
          <section className="myNftDetailsSection">
            {script?.nftData?.map((nft, index) => (
              <NFTDataFunction nft={nft} key={"my-contribution-" + index} />
            ))}
          </section>
        )}
      </section>
    </div>
  );
};

export default MyNftDetails;

const NFTDataFunction = ({ nft }) => {
  const api = useAPI();
  const [project, setProject] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

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

  const withdraw = async () => {
    setIsLoading(true);
    await api
      .crud("POST", "project/withdraw", {
        nftId: nft.id,
      })
      .then((res) => {
        alert(
          `Reward worth ${nft.reward} USDT claimed succefully! Your reward will reflect in your wallet shortly.`
        );
        window.location.reload();
        poppulateNft();
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  function formatDateTime(inputDateTime) {
    const date = new Date(inputDateTime);

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return `${formattedDate}, ${formattedTime}`;
  }

  if (!project) return null;
  return (
    <div className="myNftInfoMainContainer" style={{ position: "relative" }}>
      {isLoading && <LocalLoading />}
      <div>
        <img src={project.image} alt={project.name} className="projectImg" />
      </div>

      <div className="myNftInfoContainer">
        <div>
          <h1 style={{ fontWeight: "600", marginBottom: "4px" }}>
            {project.name}
          </h1>
          <div style={{ color: "#174F4F", fontWeight: 600 }}>
            <span className="locationName">{project.city}, </span>
            <span className="locationName"> {project.country}</span>
          </div>
        </div>
        <div className="projectdescription">
          {showFullDescription ? (
            <>
              {project.description}
              <p className="projectDescription" onClick={toggleDescription}>
                Show Less
              </p>
            </>
          ) : (
            <>
              {project.description.length > 240 ? (
                <>
                  {project.description.substring(0, 140)}...
                  <p className="projectDescription" onClick={toggleDescription}>
                    Read More
                  </p>
                </>
              ) : (
                <>{project.description}</>
              )}
            </>
          )}
        </div>
        <div className="myNftInfoSubContainer">
          <span>Token id:</span>
          <div>{transaction.id}</div>
        </div>
        <div className="myNftInfoSubContainer">
          <span>Amount Paid:</span>
          <div>{transaction.amount}$</div>
        </div>
        <div className="myNftInfoSubContainer">
          <span>No of Trees:</span>
          <div>{transaction.trees_count}</div>
        </div>
        {nft?.is_active && (
          <div className="myNftInfoSubContainer">
            <span>Reward:</span>
            <div>{nft?.reward}$</div>
          </div>
        )}
        {nft?.is_active && (
          <button
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              background: "black",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
            onClick={withdraw}
          >
            Claim Reward
          </button>
        )}
        <div className="myNftInfoSubContainer">
          <span>Time Stamp:</span>
          <div>{formatDateTime(transaction.date)}</div>
        </div>
      </div>
    </div>
  );
};
