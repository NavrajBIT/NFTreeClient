import React, {useState} from "react";
import image from "../Assets/main.png";
import image2 from "../Assets/wallet-illo.svg";
import image3 from "../Assets/Explore-illo.png";
import image4 from "../Assets/Browse-illo.png";

export default function WalletMainContent({scrollFunc}) {
  const contentdata = [
    {
      heading: "Gateway to the world of blockchain",
      text: "Improve your user experience with BitWallet, the key to the blockchain world",
      image: image,
      buttonFunction: scrollFunc,
      align: "right"
    },
    {
      heading: "Use as a browser extension or mobile app",
      text: "Available as a browser extension and as a mobile app, Bitwallet equips you with a key vault, secure login, easy NFT storage and transfer, and cryptography.",
      image: image2,
      align: "left"
    },
    {
      heading: "Security for your digital assets",
      text: "BitWallet generates passwords and keys on your device, so only you have access to your accounts and data. Support navigating through various decentralized websites and blockchain applications.",
      image: image3,
      align: "right"
    },
    {
      heading: "Zero downtime",
      text: "Protecting your keys through encryption",
      image: image4,
      align: "left"
    }
  ];

  return (
    <div className='walletMainContainer'>
      {contentdata.map((content, index) => (
        <SectionDisplay
          buttonFunction={content.buttonFunction}
          heading={content.heading}
          text={content.text}
          image={content.image}
          align={content.align}
          key={index}
        />
      ))}
    </div>
  );
}

const SectionDisplay = ({heading, text, image, buttonFunction, align}) => {
  return (
    <div className='walletMainContainer-row'>
      <div className='row-content'>
        <h3>{heading}</h3>
        <p style={{fontSize: "1.5rem", textAlign: "justify"}}>{text}</p>
        {buttonFunction && (
          <div
            className='primarybutton'
            style={{width: "fit-content"}}>
            <button onClick={buttonFunction}>Download Now</button>
          </div>
        )}
      </div>

      <div
        className='row-content-img first-div'
        style={{order: align === "left" ? -1 : 1}}>
        <img
          src={image}
          alt='Bit Wallet'
        />
      </div>
    </div>
  );
};
