import { useState } from "react";
import useAPI from "../../api/useAPI";
import LocalLoading from "../Subcomponents/loading/localloading";
import OpenInput from "../Subcomponents/form/inputs/openInput";
import OpenMultiline from "../Subcomponents/form/inputs/openMultiline";
import Herocontainer from "../Subcomponents/containers/herocontainer";
import Button from "../Subcomponents/buttons/button";
import "./Contact.css";
import telegram from "./assets/Telegram.svg";
import twitter from "./assets/TwitterX.svg";
import { useNavigate } from "react-router-dom";

const Contact = ({ page }) => {
  const api = useAPI();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await api
      .crud("POST", "contact/contact-us", {
        full_name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        if (res.status === 201) {
          alert(
            "Message sent successfully. Our executives will contact you shortly."
          );
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  return (
    <Herocontainer
      style={{
        alignItems: "center",
        backgroundImage: "var(--bg-green-gradient)",
      }}
      innerStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading && <LocalLoading />}
      <div className="contactformcontainer">
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "var(--padding-large)",
            gap: "var(--padding-large)",
          }}
          type="submit"
          onSubmit={handleSubmit}
        >
          <div className="contactHeading">Contact Us</div>

          <div className="form">
            <OpenInput
              label="Name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength="50"
            />
            <OpenInput
              label="Email address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength="50"
            />
            <OpenMultiline
              label="Message"
              type="email"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength="500"
            />
          </div>

          <Button title={"Submit"} variant={"green"} />
        </form>
        <ContactDetails />
      </div>
    </Herocontainer>
  );
};

export default Contact;

const ContactDetails = () => {
  return (
    <div className="contactdetails">
      <div className="contactInfoContainer">
        <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Our Contacts:
        </div>
        <a
          href="mailto:support@beimagine.tech"
          style={{ fontWeight: "normal", fontSize: "14px" }}
        >
          {/* support@beimagine.tech */}
          sales@abaadalkhayal.com
        </a>
      </div>
      <div className="contactInfoContainer">
        <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>Visit Us:</div>
        <div className="addressContainer">
          {/* <div>Beyond imagination tech LLC</div> */}
          <div>Aba’ad Alkhayal (Limited Liability Company)</div>
          <div>7909 Al Qalaa, Al Rabie District 2955, Riyadh.</div>
          <div>Saudi Arabia</div>
        </div>
      </div>
      {/* <div className="socialcontainer">
        <a href="https://t.co/4LJmYD56rc" target="_blank">
          <img src={telegram} alt="Telegram" className="socialIcon" />
        </a>
        <a href="https://twitter.com/BITBhoomi" target="_blank">
          <img src={twitter} className="socialIcon" alt="Twitter" />
        </a>
      </div> */}
    </div>
  );
};
