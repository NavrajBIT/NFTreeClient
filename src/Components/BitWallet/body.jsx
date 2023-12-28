import React from "react";
import "./wallet.css";
import Walletbenefit from "./subComponents/wallet-benefit";
import WalletDownload from "./subComponents/wallet-download";
import WalletMainContent from "./subComponents/wallet-mainContent";

const BitWallet = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main_body">
      <WalletMainContent scrollFunc={handleClickScroll} />
      <WalletDownload />
      <Walletbenefit />
    </div>
  );
};

export default BitWallet;
