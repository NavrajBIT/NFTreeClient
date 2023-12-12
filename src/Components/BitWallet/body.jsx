import React from "react";
import "./Css/main.d4f40551.css";
import Walletbenefit from "./subComponents/wallet-benefit";
import WalletDownload from "./subComponents/wallet-download";
import WalletMainContent from "./subComponents/wallet-mainContent";

const BitWallet = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("main_content2");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textAnimation = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };

  const imageAnimation = {
    offscreen: { x: 100 },
    offscreen2: { x: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
    onscreen2: {
      x: 100,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <div
      style={{ backgroundColor: "#86a789", padding: "0 9vw" }}
      className="main_body"
    >
      <WalletMainContent />

      <br />
      <WalletDownload />
      <br />
      <br />
      <br />
      <Walletbenefit />
    </div>
  );
};

export default BitWallet;
