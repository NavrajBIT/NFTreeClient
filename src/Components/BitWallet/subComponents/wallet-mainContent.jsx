import React from "react";
import image from "../Assets/main.png";
import image2 from "../Assets/wallet-illo.svg";
import image3 from "../Assets/Explore-illo.png";
import image4 from "../Assets/Browse-illo.png";

export default function WalletMainContent() {
  return (
    <div className="walletMainContainer">
      <div className="walletMainContainer-row">
        <div className="row-content">
          <h3>Gateway to the world of blockchain</h3>
          <p>
            Improve your user experience with BitWallet, the key to the
            blockchain world
          </p>
          <button>Download Now</button>
        </div>

        <div className="first-div">
          <img src={image} alt="" style={{ width: "20rem", height: "24rem" }} />
        </div>
      </div>

      <div className="walletMainContainer-row">
        <div className="first-div">
          <img src={image2} alt="" />
        </div>
        <div className="row-content">
          <h3>Use as a browser extension or mobile app</h3>
          <p>
            Available as a browser extension and as a mobile app, Bitwallet
            equips you with a key vault, secure login, easy NFT storage and
            transfer, and cryptography.
          </p>
        </div>
      </div>

      <div className="walletMainContainer-row">
        <div className="row-content">
          <h3>Security for your digital assets</h3>
          <p>
            BitWallet generates passwords and keys on your device, so only you
            have access to your accounts and data. Support navigating through
            various decentralized websites and blockchain applications.
          </p>
        </div>

        <div className="first-div customImage">
          <img src={image3} alt="" />
        </div>
      </div>

      <div className="walletMainContainer-row">
        <div className="first-div customImage">
          <img src={image4} alt="" />
        </div>
        <div className="row-content">
          <h3>Zero downtime</h3>
          <p>Protecting your keys through encryption</p>
        </div>
      </div>
    </div>
  );
}
