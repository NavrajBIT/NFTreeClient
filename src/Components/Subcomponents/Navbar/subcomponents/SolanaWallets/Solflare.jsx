import React, {useEffect} from "react";
import SolflareWallet from "@solflare-wallet/sdk";
import {useWallet} from "../../../../../Contexts/WalletContext";

const Solflare = ({
  setWalletAddress,
  setIsWalletConnected,
  setWalletInfo,
  setWalletDropdown,
  setLoading
}) => {
  //Solflare Wallet
  const solflareWallet = new SolflareWallet();
  const wallet = useWallet();

  solflareWallet.on("connect", () => {
    // console.log(solflareWallet);

    setWalletAddress(solflareWallet.publicKey.toString());
    setLoading(false);
    setIsWalletConnected(true);
    setWalletInfo(prev => {
      return {
        ...prev,
        key: "SOLFLARE"
      };
    });
    wallet.setProvider(solflareWallet);
  });

  solflareWallet.on("disconnect", () => {
    setIsWalletConnected(false);
    setWalletAddress(null);
    setWalletInfo(null);
    wallet.setProvider(null);
  });

  return (
    <a
      onClick={async () => {
        setWalletDropdown(false);
        setLoading(true);
        try {
          await solflareWallet.connect();
        } catch (error) {
          setLoading(false);
          console.log({code: 4001, message: "User rejected the request."});
        }
      }}
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        fontSize: "12px",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "var(--green-100)"
      }}>
      Solflare Wallet
      <img
        src='/assets/solflare.png'
        alt='solana logo'
        height={26}
      />
    </a>
  );
};

export default Solflare;
