import React, { useState, useEffect, useContext } from "react";
import * as web3 from "@solana/web3.js";

const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  const [provider, setProvider] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [trxnStatus, setTrxnStatus] = useState(null);
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

  const transactionStatus = async (txnSig) => {
    const result = await connection.getSignatureStatus(txnSig, {
      searchTransactionHistory: true,
    });

    if (!result.value) {
      setTrxnStatus("Processing...");
      setTimeout(() => {
        transactionStatus(txnSig);
      }, 1000);
    } else {
      const {
        value: { confirmationStatus },
      } = result;
      // console.log(result.value);
      if (confirmationStatus === "processed") {
        setTrxnStatus("Confirming...");
      } else if (confirmationStatus === "confirmed") {
        setTrxnStatus("Finalizing...");
      } else if (confirmationStatus === "finalized") {
        setTrxnStatus("Finalized");
        console.log(txnSig);
        return txnSig;
      }
      setTimeout(() => {
        transactionStatus(txnSig);
      }, 3000);
    }
  };

  const sendSol = async (recipientAddress, sol) => {
    let transaction = new web3.Transaction();

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
    // transaction.lastValidBlockHeight = lastValidBlockHeight;
    const tx = await provider.signAndSendTransaction(transaction);
    // console.log(signature);
    let sig = tx.signature || tx;
    transactionStatus(sig);
  };

  const value = {
    publicKey,
    provider,
    trxnStatus,
    sendSol,
    isWalletConnected,
    solbalance,
    connect,
  };

  return (
    <WalletContext.Provider value={value}>
      {props.children}
    </WalletContext.Provider>
  );
}
