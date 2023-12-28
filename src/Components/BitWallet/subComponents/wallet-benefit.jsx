import React from "react";
import { FaUnlockAlt, FaHandHoldingUsd } from "react-icons/fa";
import { RiNodeTree } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

const BenefitItem = ({ Icon, background, text }) => (
  <div style={{ background }} className="walletBenefitContentBox">
    <Icon className="boxIconStyle" />
    <h3>{text}</h3>
  </div>
);

export default function WalletBenefit() {
  const benefitItems = [
    { Icon: FaUnlockAlt, background: "#86a789", text: "Data Protection" },
    { Icon: RiNodeTree, background: "white", text: "Robust Infrastructure" },
    { Icon: SiHiveBlockchain, background: "#86a789", text: "Decentralized" },
    {
      Icon: AiOutlineSafetyCertificate,
      background: "white",
      text: "Verified and secure to use",
    },
    { Icon: FaHandHoldingUsd, background: "#86a789", text: "Easy to Use" },
    {
      Icon: HiClipboardDocumentCheck,
      background: "white",
      text: "Support Assets",
    },
  ];

  return (
    <div
      style={{
        minHeight: "var(--min-height-section)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "var(--padding-main)",
        width: "100%",
        maxWidth: "var(--max-width)",
      }}
    >
      <div className="walletBenefitHead">
        Why choose BitWallet?
        <p style={{ fontSize: "1rem" }}>A more secure and transparent wallet</p>
      </div>

      <div className="walletBenefitsContainer">
        {benefitItems.map((item, index) => (
          <BenefitItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
