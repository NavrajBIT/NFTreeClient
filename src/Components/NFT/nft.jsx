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
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    poppulateNft();
    poppulateRewardData();
  }, []);

  if (!isLoggedIn) return <Auth close={() => setIsLoggedIn(true)} />;

  const poppulateRewardData = async () => {
    await api
      .crud("GET", `project/rewardTnx`)
      .then((res) => {
        if (res.status === 200) {
          setRewardData(res);
        }
      })
      .catch((err) => {
        if (err === 401) setIsLoggedIn(false);
      });
  };

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
        {project && <ProjectCard project={project} />}
        {nftData && (
          <NftCard nftData={nftData} tx={transaction} withdraw={withdraw} />
        )}
      </div>
      <br />
      <br />
      <div style={{ width: "95%" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "var(--max-width)",
            gap: "var(--padding-main)",
            justifyContent: "space-around",
            margin: "auto",
          }}
        >
          <h2>Reward History</h2>
          <br />
          <table style={{ width: "100%", background: "white" }}>
            <tr style={{ background: "silver" }}>
              <th style={{ width: "33%" }}>Serial No.</th>
              <th style={{ width: "33%" }}>Date</th>
              <th style={{ width: "33%" }}>Amount</th>
            </tr>

            {rewardData.map((trx) => (
              <tr key={trx.id}>
                <td>{trx.id}</td>
                <td>{trx.date.split("T")[0]}</td>
                <td>{trx.reward}</td>
              </tr>
            ))}
          </table>
        </div>
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
        maxWidth: "50%",
        padding: "var(--padding-light)",
        borderRadius: "var(--border-radius)",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minWidth: "var(--project-card-width)",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "700", margin: "0 auto" }}>
        NFT Details
      </div>
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 3fr" }}>
          <div
            style={{ fontWeight: "bold", marginBottom: "var(--padding-light)" }}
          >
            Amount Paid
          </div>
          <div>:</div>
          <div>{tx?.amount} $</div>
          <div
            style={{ fontWeight: "bold", marginBottom: "var(--padding-light)" }}
          >
            No. of Trees
          </div>
          <div>:</div>
          <div>{tx?.trees_count}</div>
          <div
            style={{ fontWeight: "bold", marginBottom: "var(--padding-light)" }}
          >
            Date and Time
          </div>
          <div>:</div>
          <div>{tx?.date}</div>
        </div>
      </div>
      <div>
        {nftData?.is_active && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 3fr",
              fontSize: "1.25rem",
            }}
          >
            <div style={{ marginBottom: "var(--padding-light)" }}>Reward</div>
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
    </div>
  );
};
