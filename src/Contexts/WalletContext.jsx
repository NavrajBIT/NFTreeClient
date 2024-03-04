import React, {useState, useEffect, useContext} from "react";
import * as web3 from "@solana/web3.js";

const WalletContext = React.createContext();

export function useWallet() {
  return useContext(WalletContext);
}

export function WalletProvider(props) {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);
  const [publicKey, setPublicKey] = useState(null);
  const [trxnStatus, setTrxnStatus] = useState(null);

  let connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  let isWalletConnected = Boolean(address);

  useEffect(() => {
    setPublicKey(address ? new web3.PublicKey(address) : null);
  }, [address]);

  const transactionStatus = async txnSig => {
    const result = await connection.getSignatureStatus(txnSig, {
      searchTransactionHistory: true
    });

    if (!result.value) {
      setTrxnStatus("Processing...");
      setTimeout(() => {
        transactionStatus(txnSig);
      }, 1000);
    } else {
      const {
        value: {confirmationStatus}
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

  const sendSol = async recipientAddress => {
    let transaction = new web3.Transaction();

    transaction.add(
      web3.SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new web3.PublicKey(recipientAddress),
        lamports: 10000000
      })
    );
    transaction.feePayer = publicKey;
    const {blockhash} = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    // transaction.lastValidBlockHeight = lastValidBlockHeight;
    const tx = await provider.signAndSendTransaction(transaction);
    // console.log(signature);
    let sig = tx.signature || tx;
    transactionStatus(sig);
  };

  const value = {
    address,
    setAddress,
    publicKey,
    provider,
    setProvider,
    trxnStatus,
    sendSol,
    isWalletConnected
  };

  return <WalletContext.Provider value={value}>{props.children}</WalletContext.Provider>;
}
