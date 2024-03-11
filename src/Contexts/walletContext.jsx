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
    console.log("creating transaction...");
    console.log(provider);
    console.log(provider.publicKey);
    transaction.add(
      web3.SystemProgram.transfer({
        fromPubkey: provider.publicKey,
        toPubkey: new web3.PublicKey(recipientAddress),
        lamports: parseInt(sol * web3.LAMPORTS_PER_SOL),
      })
    );
    console.log(provider);
    transaction.feePayer = provider.publicKey;
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    const tx = await provider
      .signAndSendTransaction(transaction)
      .then((res) => {
        console.log(res);
        return res.sig;
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
