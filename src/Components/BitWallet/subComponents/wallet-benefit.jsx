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
    { Icon: FaUnlockAlt, background: "#2563eb", text: "Data Protection" },
    { Icon: RiNodeTree, background: "white", text: "Robust Infrastructure" },
    { Icon: SiHiveBlockchain, background: "#2563eb", text: "Decentralized" },
    {
      Icon: AiOutlineSafetyCertificate,
      background: "white",
      text: "Verified and secure to use",
    },
    { Icon: FaHandHoldingUsd, background: "#2563eb", text: "Easy to Use" },
    {
      Icon: HiClipboardDocumentCheck,
      background: "white",
      text: "Support Assets",
    },
  ];

  return (
    <div className="walletBenefitContainer">
      <div className="walletBenefitHead">
        <h2>Why choose BitWallet?</h2>
        <p>A more secure and transparent wallet</p>
      </div>
      <div className="walletBenefitContent">
        {benefitItems.map((item, index) => (
          <BenefitItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
