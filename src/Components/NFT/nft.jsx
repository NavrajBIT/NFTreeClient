import { useState, useEffect } from "react";
import useAPI from "../../api/useAPI";
import ProjectCard from "../Subcomponents/projectCard/projectCard";
import Auth from "../Auth/Auth";
import Loading from "../Subcomponents/loading/loading";
import { useParams } from "react-router-dom";

const Nft = () => {
  const params = useParams();
  const api = useAPI();
  const [nftData, setNftdata] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [project, setProject] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    poppulateNft();
  }, []);

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  const poppulateNft = async () => {
    await api
      .crud("GET", `project/nfts/${params.nftid}`)
      .then((res) => {
        if (res.status === 200) {
          setNftdata(res);
          poppulateTransaction(res.transaction);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
  };
  const poppulateTransaction = async (txid) => {
    await api
      .crud("GET", `project/transaction/${txid}`)
      .then((res) => {
        if (res.status === 200) {
          setTransaction(res);
          poppulateProject(res.project);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
  };
  const poppulateProject = async (projectId) => {
    await api
      .crud("GET", `project/${projectId}`)
      .then((res) => {
        if (res.status === 200) {
          setProject(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
  };

  const withdraw = async () => {
    setIsLoading(true);
    await api
      .crud("POST", "project/withdraw", {
        nftId: params.nftid,
      })
      .then((res) => {
        alert(
          `Reward worth ${nftData.reward} USDT claimed succefully! Your reward will reflect in your wallet shortly.`
        );
        poppulateNft();
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  if (isLoading) return <Loading />;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "var(--min-height-page)",
        alignItems: "center",

        // justifyContent: "center",
        marginTop: "var(--nav-height)",
        padding: "var(--padding-main)",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--padding-main)",
          justifyContent: "space-around",
        }}
      >
        {nftData && (
          <NftCard nftData={nftData} tx={transaction} withdraw={withdraw} />
        )}
        {project && <ProjectCard project={project} />}
      </div>
    </div>
  );
};

export default Nft;

const NftCard = ({ nftData, tx, withdraw }) => {
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        maxWidth: "var(--project-card-width)",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "700" }}>NFT Details</div>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 3fr" }}>
          <div>Token Id</div>
          <div>:</div>
          <div>{nftData?.id}</div>
          <div>Amount Paid</div>
          <div>:</div>
          <div>{tx?.amount} $</div>
          <div>No. of Trees</div>
          <div>:</div>
          <div>{tx?.trees_count}</div>
        </div>
        <div>{tx?.date}</div>
      </div>
      {nftData?.is_active && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr 3fr",
            fontSize: "1.25rem",
          }}
        >
          <div>Reward</div>
          <div>:</div>
          <div>{nftData?.reward} $</div>
        </div>
      )}
      {nftData?.is_active && (
        <div className="primarybutton">
          <button onClick={withdraw}>Claim Rewards</button>
        </div>
      )}
    </div>
  );
};
