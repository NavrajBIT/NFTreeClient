import React from "react";
import qrcode from "../Assets/qrcode.png";
import qrcode2 from "../Assets/qrcode2.png";
import apple from "../Assets/apple.png";
import chrome from "../Assets/chrome.svg";
import android from "../Assets/android.png";
import qrcode3 from "../Assets/appleqr.png";

export default function WalletDownload() {
  return (
    <div className="walletBenefitContainer">
      <div className="walletBenefitHead">
        <h2 style={{ fontSize: "2.25rem" }}>Bitwallet Download</h2>
      </div>

      <div
        className="walletBenefitContent"
        style={{ gridTemplateRows: "unset", justifyItems: "center" }}
      >
        <div className="walletDownloadContentBox">
          <>
            <img className="" src={qrcode} alt="img" />
          </>
          <br />
          <>
            <h3>Download the Chrome extension</h3>
            <button
              onClick={() => {
                window.open(
                  "https://chrome.google.com/webstore/detail/bit-wallet/ddphokhghjkekfdoddpeffdpojdofcan"
                );
              }}
            >
              Download <img src={chrome} alt="" />{" "}
            </button>
          </>
        </div>

        <div className="walletDownloadContentBox">
          <>
            <img className="" src={qrcode3} alt="img" />
          </>
          <br />
          <>
            <h3>Download the IOS app</h3>
            <button
              onClick={() => {
                window.open(
                  "https://apps.apple.com/us/app/be-imagine-technology-wallet/id6443855034"
                );
              }}
            >
              Download <img src={apple} alt="" />{" "}
            </button>
          </>
        </div>

        <div className="walletDownloadContentBox">
          <>
            <img className="" src={qrcode2} alt="img" />
          </>
          <br />
          <>
            <h3>Download the Android app</h3>
            <button
              onClick={() => {
                window.open(
                  "https://play.google.com/store/apps/details?id=beimagine.tech"
                );
              }}
            >
              Download <img src={android} alt="" />{" "}
            </button>
          </>
        </div>
      </div>
    </div>
  );
}
