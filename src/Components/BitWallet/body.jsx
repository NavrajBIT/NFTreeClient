import React from "react";
import "./Css/main.d4f40551.css";
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
    <div
      style={{ backgroundColor: "#86a789", padding: "4vh 9vw" }}
      className="main_body"
    >
      <WalletMainContent scrollFunc={handleClickScroll} />
      <div id="download">
        <WalletDownload />
      </div>

      <Walletbenefit />
    </div>
  );
};

export default BitWallet;
