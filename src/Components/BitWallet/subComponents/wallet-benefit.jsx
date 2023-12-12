import React from "react";
import { FaUnlockAlt, FaHandHoldingUsd } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

export default function Walletbenefit() {
  return (
    <div className="walletBenefitContainer">
      <div className="walletBenefitHead">
        <h2>Why choose BitWallet?</h2>
        <p>A more secure and transparent wallet</p>
      </div>
      <div className="walletBenefitContent">
        <div
          style={{ background: "#2563eb" }}
          className="walletBenefitContentBox"
        >
          <FaUnlockAlt className="boxIconStyle" />
          <h3>Data Protection</h3>
        </div>

        <div
          style={{ background: "white" }}
          className="walletBenefitContentBox"
        >
          <RiNodeTree className="boxIconStyle" />
          <h3>Robust Infrastructure</h3>
        </div>

        <div
          style={{ background: "#2563eb" }}
          className="walletBenefitContentBox"
        >
          <SiHiveBlockchain className="boxIconStyle" />
          <h3>Decentralized</h3>
        </div>

        <div
          style={{ background: "white" }}
          className="walletBenefitContentBox"
        >
          <AiOutlineSafetyCertificate className="boxIconStyle" />
          <h3>Verified and secure to use</h3>
        </div>

        <div
          style={{ background: "#2563eb" }}
          className="walletBenefitContentBox"
        >
          <FaHandHoldingUsd className="boxIconStyle" />
          <h3>Easy to Use</h3>
        </div>

        <div
          style={{ background: "white" }}
          className="walletBenefitContentBox"
        >
          <HiClipboardDocumentCheck className="boxIconStyle" />
          <h3>Support Assets</h3>
        </div>
      </div>
    </div>
  );
}
