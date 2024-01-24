import { useState, useEffect } from "react";
import useAPI from "../../../api/useAPI";
import { useNavigate } from "react-router-dom";

const usewallet = (setIsLoading, projectId, trees) => {
  const navigate = useNavigate();
  const api = useAPI();
  const [walletAddress, setWalletAddress] = useState("");
  const [walletInstalled, setWalletInstalled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    checkWallet();
  }, []);

  const checkWallet = () => {
    if (window != undefined && window.bit) {
      setWalletInstalled(true);
      if (window.bit.accountId && window.bit.accountId !== "") {
        setWalletAddress(window.bit.accountId);
        setWalletConnected(true);
      }
    }
  };

  const connectWallet = async () => {
    await window.bit
      .connect()
      .then((res) => {
        if (res !== "") {
          setWalletConnected(true);
          setWalletAddress(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const transact = async (amount) => {
    await window.bit
      .sendToken({
        contract: "asdfsadf",
        amount: parseFloat(amount) / 1000,
        to: "navraj2.testnet",
      })
      .then((res) => {
        alert(`Transaction submitted successfully. Tx hash : ${res.data.hash}`);
        verifyTransaction(amount, res.data.hash);
      })
      .catch((err) => alert(err));
  };

  const verifyTransaction = async (amount, hash) => {
    setIsLoading(true);
    api
      .crud("POST", "project/invest", {
        projectId: projectId,
        hash: hash,
        amount: amount,
        trees: trees,
        accountId: walletAddress,
      })
      .then((res) => {
        console.log(res);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  return {
    walletAddress,
    walletInstalled,
    walletConnected,
    connectWallet,
    transact,
  };
};

export default usewallet;

//   const verifyTransaction = async (trx_hash, account_id) => {
//     const url = "https://rpc.testnet.near.org/";
//     const body = {
//       jsonrpc: "2.0",
//       id: "dontcare",
//       method: "tx",
//       params: [trx_hash, account_id],
//     };

//     try {
//       const response = await axios.post(url, body, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       console.log("API Response:", response.data.result.status);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   verifyTransaction(
//     "4uatA87C6XrzeHABg1iWsQQoXdRvgk4dRKVnFwKLfip8",
//     "t-e-s-t-1.testnet"
//   );
