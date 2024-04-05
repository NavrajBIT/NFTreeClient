import SolflareWallet from "@solflare-wallet/sdk";
import React, { useState, useEffect, useContext } from "react";
import * as web3 from "@solana/web3.js";
import * as buffer from "buffer";
window.Buffer = buffer.Buffer;

const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  const [provider, setProvider] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [solbalance, setSolBalance] = useState(0);

  let connection = new web3.Connection(web3.clusterApiUrl("devnet"));

  useEffect(() => {
    getProvider();
  }, []);

  useEffect(() => {
    getBalance();
  }, [provider]);

  const getProvider = () => {
    if ("phantom" in window) {
      const myprovider = window.phantom?.solana;
      if (myprovider?.isPhantom) {
        setProvider(myprovider);

        if (myprovider.isConnected) {
          setIsWalletConnected(true);
        }
      }
    }
  };

  const getBalance = async (address = provider?.publicKey) => {
    console.log("getting balance...");
    await connection
      .getBalance(address)
      .then((res) => setSolBalance(res / web3.LAMPORTS_PER_SOL))
      .catch((err) => console.log(err));
  };

  const connectSolflare = async () => {
    if (provider) {
      try {
        const solflareWallet = new SolflareWallet();
        solflareWallet.on("connect", () => {
          console.log("yes---");
          setPublicKey(solflareWallet.publicKey.toString());
          setProvider(solflareWallet);
          setIsWalletConnected(true);
        });
        await solflareWallet.connect();
      } catch {
        setIsWalletConnected(false);
        alert("Wallet connection declined!");
      }
    } else {
      window.open("https://solflare.com/", "_blank");
    }
  };

  const connect = async () => {
    if (provider) {
      try {
        const resp = await provider.connect();
        setPublicKey(resp.publicKey);
        getProvider();
        getBalance(resp.publicKey);
      } catch {
        setIsWalletConnected(false);
        alert("Wallet connection declined!");
      }
    } else {
      window.open("https://phantom.app/", "_blank");
    }
  };

  const sendSol = async (sol) => {
    if (!provider) {
      getProvider();
      return;
    }
    const recipientAddress = "9G4RTia1n5uThQ42tfmci2k9w1nauXjAKQPGQV9FKRuD";
    let transaction = new web3.Transaction();
    console.log(`Sending ${sol} SOL`);
    transaction.add(
      web3.SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: new web3.PublicKey(recipientAddress),
        lamports: parseInt(sol * web3.LAMPORTS_PER_SOL),
      })
    );

    transaction.feePayer = provider.publicKey;
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    const tx = await provider
      .signAndSendTransaction(transaction)
      .then((res) => {
        console.log(res);
        if (provider.isPhantom) {
          return res.signature;
        } else {
          return res;
        }
      })
      .catch((err) => null);
    if (tx === null) {
      throw "Transaction Unsuccessfull.";
    } else {
      return tx;
    }
  };

  const value = {
    publicKey,
    provider,
    sendSol,
    isWalletConnected,
    solbalance,
    connect,
    connectSolflare,
  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}

// const transactionStatus = async (txnSig) => {
//   const result = await connection.getSignatureStatus(txnSig, {
//     searchTransactionHistory: true,
//   });

//   if (!result.value) {
//     setTrxnStatus("Processing...");
//     setTimeout(() => {
//       transactionStatus(txnSig);
//     }, 1000);
//   } else {
//     const {
//       value: { confirmationStatus },
//     } = result;
//     // console.log(result.value);
//     if (confirmationStatus === "processed") {
//       setTrxnStatus("Confirming...");
//     } else if (confirmationStatus === "confirmed") {
//       setTrxnStatus("Finalizing...");
//     } else if (confirmationStatus === "finalized") {
//       setTrxnStatus("Finalized");
//       console.log(txnSig);
//       return txnSig;
//     }
//     setTimeout(() => {
//       transactionStatus(txnSig);
//     }, 3000);
//   }
// };

// export async function getTokenSupplyData() {
//   const body = {
//     jsonrpc: "2.0",
//     id: 1,
//     method: "getTokenAccountBalance",
//     params: ["3J2XuhzaduFquYkMEjcqQwgY7MSGwz4cvuo1ctSuNehx"],
//   };

//   const requestOption = {
//     method: "POST",
//     body: JSON.stringify(body),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   await fetch("https://api.mainnet-beta.solana.com/", requestOption)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// getTokenSupplyData();

export async function getTokenSupplyData() {
  let connection = new web3.Connection(
    "https://solana-mainnet.g.alchemy.com/v2/8ywPL9IoZtnieJGZdu1bT1VDEAK1Mw6b"
  );
  const address = new web3.PublicKey(
    "3J2XuhzaduFquYkMEjcqQwgY7MSGwz4cvuo1ctSuNehx"
  );
  const res = await connection.getTokenAccountBalance(address);
  return res.value.amount;
}
