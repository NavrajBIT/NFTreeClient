import { useParams } from "react-router-dom";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";
import Myform from "../../Subcomponents/form/myform";
import { useState } from "react";
import Auth from "../../Auth/Auth";
import Loading from "../../Subcomponents/loading/loading";
import { useEffect } from "react";
import { useAuth } from "../../../Contexts/AuthContext";
import axios from "axios";

const Donate = () => {
  const params = useParams();
  const id = params.projectId;
  const api = useAPI();
  const authContext = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [project, setProject] = useState(null);
  const [trees, setTrees] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [walletInstalled, setWalletInstalled] = useState("");
  const [walletConnected, setWalletConnected] = useState("");

  useEffect(() => {
    checkWallet();
    setWalletInstalled(window.bit !== "undefined");
    poppulateProject();
  }, []);

  useEffect(() => {
    connectWallet();
  }, [walletInstalled == true]);

  const poppulateProject = async () => {
    setIsLoading(true);

    await api
      .crud("GET", `project/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) setProject(res);
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  const checkWallet = () => {
    if (typeof window !== "undefined") {
      if (window.bit !== undefined) {
        setWalletInstalled(true);
      } else {
        setWalletInstalled(false);
      }
    }
  };

  const connectWallet = async () => {
    while (walletInstalled == "") {
      pass;
    }

    if (walletInstalled && walletAddress == "") {
      await window.bit.connect();
      let address = window.bit.accountId;
      setWalletAddress(address);
    } else {
      setWalletConnected("rejected");
    }
  };

  if (!authContext.isLoggedIn)
    return <Auth close={() => authContext.setIsLoggedIn(true)} />;

  if (isLoading || !project) return <Loading />;

  let totalValue = 0;
  try {
    totalValue = project.donation * trees;
  } catch {}

  const handleSubmit = async () => {
    setIsLoading(true);
    await api
      .crud("POST", "project/transaction", {
        project: id,
        amount: totalValue,
        trees_count: trees,
      })
      .then((res) => {
        alert("Thankyou for your contribution.");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) authContext.setIsLoggedIn(false);
      });
    setIsLoading(false);
  };

  const saveNftData = async () => {
    await api
      .crud("POST", "project/nft", {
        project: id,
        amount: totalValue,
        trees_count: trees,
      })
      .catch((err) => {
        console.log(err);
        if (err === 401) authContext.setIsLoggedIn(false);
      });
  };

  const verifyTransaction = async (trx_hash, account_id) => {
    const url = "https://rpc.testnet.near.org/";
    const body = {
      jsonrpc: "2.0",
      id: "dontcare",
      method: "tx",
      params: [trx_hash, account_id],
    };

    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("API Response:", response.data.result.status);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  verifyTransaction(
    "4uatA87C6XrzeHABg1iWsQQoXdRvgk4dRKVnFwKLfip8",
    "t-e-s-t-1.testnet"
  );

  const donationText = project.carbonCredit_enabled ? "Invest" : "Donate";

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "var(--min-height-page)",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        flexDirection: "column",
      }}
    >
      <Myform
        heading={`${donationText} for ${project.name} (${project.donation}$/tree)`}
        formButton={
          totalValue > 0 ? `${donationText} ${totalValue}$` : `${donationText}`
        }
        close={() => {
          navigate(-1);
          setWalletAddress("");
        }}
        handleSubmit={handleSubmit}
        formdata={[
          [
            {
              type: "number",
              label: "No of trees",
              value: trees,
              required: true,
              onChange: (e) => setTrees(e.target.value),
            },
            {
              type: "text",
              label: "Wallet Address",
              value: walletAddress,
              required: true,
            },
          ],
        ]}
      />
      {walletInstalled == false && (
        <div style={{ padding: "var(--padding-main)", color: "red" }}>
          <p>
            It seems Wallet is not Installed, Please Install{" "}
            <span>
              <a
                href="http://localhost:5173/wallet"
                style={{ textDecoration: "underline" }}
              >
                BitWallet
              </a>
            </span>{" "}
            to make any Investment
          </p>
        </div>
      )}
      {walletConnected == "rejected" && (
        <div style={{ padding: "var(--padding-main)", color: "red" }}>
          Please refresh the wallet for connection Request
        </div>
      )}
    </div>
  );
};

export default Donate;
