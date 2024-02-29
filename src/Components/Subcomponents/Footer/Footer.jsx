import "./Footer.css";
import logo from "/logo_white.png";
import twitter from "./assets/TwitterX.png";
import telegram from "./assets/Telegram.png";

const Footer = () => {
  return (
    <div className="footercontainerouter">
      <div className="footerconatiner">
        <div className="footercontentcontainer">
          <img src={logo} alt="BitBhoomi" />
          <div style={{ marginLeft: "30px" }}>
            Join us in making a lasting impact.
          </div>
          <div style={{ marginLeft: "30px" }}>Embrace Sustainability.</div>
          <div style={{ marginLeft: "30px" }}>Embrace Transparency.</div>
        </div>
        <div
          className="footercontentcontainer"
          style={{
            fontFamily: "'Fira Sans'",
          }}
        >
          <div style={{ fontWeight: 700 }}>Address:</div>
          <div>
            <div>Beyond Imagination tech LLC</div>
            <div>M03 Laffa restaurant building</div>
            <div>Sheikh Khalifa Bin Zayed St - Opp. Burjuman Mall,</div>
            <div>Dubai, United Arab Emirates</div>
          </div>
          <div>support@beimagine.tech</div>
          <div></div>
          <div className="footersocialcontainer">
            Follow us on:
            <img
              src={twitter}
              alt="BitBhoomi"
              style={{ marginLeft: "20px" }}
              onClick={() => {
                console.log("here");
                window.open("https://twitter.com/BITBhoomi");
              }}
            />
            <img
              src={telegram}
              alt="BitBhoomi"
              onClick={() => {
                console.log("here");
                window.open("https://t.me/BITBhoomiCommunity");
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Fira Sans",
          fontWeight: "bold",
          textAlign: "center",
          paddingBottom: "16px",
        }}
      >
        Copyright © 2024 Beyond Imagination Technologies Pvt. Ltd. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
