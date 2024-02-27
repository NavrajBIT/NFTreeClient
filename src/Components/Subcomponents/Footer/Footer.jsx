import "./Footer.css";
import logo from "/logo_white.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import instagram from "./assets/instagram.png";

const Footer = () => {
  return (
    <div className="footercontainerouter">
      <div className="footerconatiner">
        <div>Join us in making a lasting impact.</div>
        <div>Embrace Sustainability.</div>
        <div>Embrace Transparency.</div>
        <img src={logo} alt="BitBhoomi" />
        <div>FOR MORE INFORMATION, reach out at support@beimagine.tech</div>
        <div className="footersocialcontainer">
          <img src={instagram} alt="BitBhoomi" />
          <img src={twitter} alt="BitBhoomi" />
          <img src={facebook} alt="BitBhoomi" />
          <img src={linkedin} alt="BitBhoomi" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
