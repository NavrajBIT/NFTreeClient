import "./Footer.css";
import logo from "/logo_white.png";
import twitter from "./assets/TwitterX.svg";
import telegram from "./assets/TelegramApp.svg";

const Footer = () => {
  return (
    <div className="footercontainerouter">
      <div className="footerconatiner">
        <div className="footercontentcontainer">
          <img src={logo} alt="BitBhoomi" />
          <div className="paraText" style={{ marginLeft: "30px" }}>
            Join us in making a lasting impact.
          </div>
          <div className="paraText" style={{ marginLeft: "30px" }}>Embrace Sustainability.</div>
          <div className="paraText" style={{ marginLeft: "30px" }}>Embrace Transparency.</div>
        </div>
        <div
          id="address"
          className="footercontentcontainer"
          style={{
            fontFamily: "'Fira Sans'",
          }}
        >
          <div style={{ fontWeight: 700,fontSize:"1.2rem" }}>Address:</div>
          <div>
            <div className="paraText">Beyond Imagination Tech LLC</div>
            <div className="paraText">M03 Laffa restaurant building</div>
            <div className="paraText">Sheikh Khalifa Bin Zayed St - Opp. Burjuman Mall,</div>
            <div className="paraText">Dubai, United Arab Emirates</div>
          </div>
          <div className="paraText">support@beimagine.tech</div>
          <div></div>
          <div className="footersocialcontainer">
            Follow us on:
            <img
              className="socialIcon"
              src={twitter}
              alt="BitBhoomi"
              style={{ marginLeft: "20px",height:"40px",width:"40px" }}
              onClick={() => {
                console.log("here");
                window.open("https://twitter.com/BITBhoomi");
              }}
            />
            <img
              className="socialIcon"
              src={telegram}
              style={{
                height:"40px",width:"40px" 
              }}
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
          fontFamily: "Inter",
          textAlign: "center",
          paddingBottom: "16px",
          fontSize: "1rem",
          color:"rgb(255,255,255,0.5)"
        }}
      >
        Copyright © 2024 Beyond Imagination Technologies Pvt. Ltd. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
