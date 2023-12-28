import React from "react";
import qrcode from "../Assets/qrcode.png";
import qrcode2 from "../Assets/qrcode2.png";
import apple from "../Assets/apple.png";
import chrome from "../Assets/chrome.svg";
import android from "../Assets/android.png";
import qrcode3 from "../Assets/appleqr.png";

const downloadLink = (url) => {
  window.open(url);
};

const WalletDownload = () => {
  const downloadButton = (text, imageUrl, storeUrl) => {
    return (
      <div className="walletDownloadContentBox">
        <img src={imageUrl} alt="QR Code" />
        <br />
        <h3>{text}</h3>
        <button onClick={() => downloadLink(storeUrl)}>
          Download{" "}
          <img
            src={
              imageUrl === qrcode
                ? chrome
                : imageUrl === qrcode2
                ? android
                : apple
            }
            alt=""
          />{" "}
        </button>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "var(--max-width)" }} id="download">
      <div className="walletBenefitHead">Bitwallet Download</div>

      <div className="downloadCardsContainer">
        {downloadButton(
          "Download the Chrome extension",
          qrcode,
          "https://chrome.google.com/webstore/detail/bit-wallet/ddphokhghjkekfdoddpeffdpojdofcan"
        )}
        {downloadButton(
          "Download the IOS app",
          qrcode3,
          "https://apps.apple.com/us/app/be-imagine-technology-wallet/id6443855034"
        )}
        {downloadButton(
          "Download the Android app",
          qrcode2,
          "https://play.google.com/store/apps/details?id=beimagine.tech"
        )}
      </div>
    </div>
  );
};

export default WalletDownload;
