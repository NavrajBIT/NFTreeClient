import "./Footer.css";
import logo from "/logo_white.png";
import twitter from "./assets/TwitterX.svg";
import telegram from "./assets/TelegramApp.svg";

const Footer = () => {
  return (
    <div
      className='footercontainerouter'
      id='footer'>
      <div className='footerconatiner'>
        <div className='footercontentcontainer'>
          <img
            src={logo}
            alt='BitBhoomi'
          />

          {/* <div className="footersocialcontainer" style={{ marginLeft: "30px" }}>
            Follow us on:
            <img
              className="socialIcon"
              src={twitter}
              alt="BitBhoomi"
              style={{ marginLeft: "20px", height: "40px", width: "40px" }}
              onClick={() => {
                console.log("here");
                window.open("https://twitter.com/BITBhoomi");
              }}
            />
            <img
              className="socialIcon"
              src={telegram}
              style={{
                height: "40px",
                width: "40px",
              }}
              alt="BitBhoomi"
              onClick={() => {
                console.log("here");
                window.open("https://t.me/BITBhoomiCommunity");
              }}
            />
          </div> */}
        </div>
        <div
          id='address'
          className='footercontentcontainer'
          style={{
            fontFamily: "'Fira Sans'"
          }}>
          {/* <div
            style={{
              width: "200px",
              height: "150px"
            }}>
            <img
              src='https://abaadalkhayal.com/logo2.png'
              alt='AbaadAlKhayal'
            />
          </div>

          <div>

          </div>


          <div style={{fontWeight: 700, fontSize: "1.2rem"}}>Address:</div>
          <div>
            <div className='paraText'>Aba’ad Alkhayal (Limited Liability Company)</div>
            <div className='paraText'>7909 Al Qalaa, Al Rabie District 2955, Riyadh.</div>
            <div className='paraText'>Saudi Arabia</div>
          </div>
          <div className='paraText'>sales@abaadalkhayal.com</div> */}
          <div
            className='paraText'
            style={{marginLeft: "30px"}}>
            Join us in making a lasting impact.
          </div>
          <div
            className='paraText'
            style={{marginLeft: "30px"}}>
            Embrace Sustainability.
          </div>
          <div
            className='paraText'
            style={{marginLeft: "30px"}}>
            Embrace Transparency.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
