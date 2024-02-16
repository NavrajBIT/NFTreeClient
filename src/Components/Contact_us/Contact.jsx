import { useState, useEffect } from "react";
import useAPI from "../../api/useAPI";
import LocalLoading from "../Subcomponents/loading/localloading";
import OpenInput from "../Subcomponents/form/inputs/openInput";
import OpenMultiline from "../Subcomponents/form/inputs/openMultiline";
import Herocontainer from "../Subcomponents/containers/herocontainer";
import Button from "../Subcomponents/buttons/button";
import "./Contact.css";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import twitter from "./assets/twitter.png";
import { useNavigate } from "react-router-dom";

const Contact = ({ page }) => {
  const api = useAPI();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--text-black)",
            }}
          >
            Contact Us
          </div>

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
              rows={4}
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
      <div>
        <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Email us at:
        </div>
        <a href="mailto:support@beimagine.tech">support@beimagine.tech</a>
      </div>
      <div>
        <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          Visit us at:
        </div>
        <div>Beyond imagination tech LLC</div>
        <div>M03 Laffa restaurant building,</div>
        <div>Sheikh Khalifa Bin Zayed St - Opp. Burjuman Mall,</div>
        <div>Dubai, United Arab Emirates</div>
      </div>
      <div className="socialcontainer">
        <img
          src={insta}
          alt="Instagram"
          onClick={() => window.open("https://www.instagram.com/bitmemoir/")}
        />
        <img
          src={linkedin}
          alt="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/company/bitmemoir/")
          }
        />
        <img
          src={twitter}
          alt="Twitter"
          onClick={() =>
            window.open(
              "https://twitter.com/Bit_memoir?t=dPPpNawrSKg3mn3BLyYxWA"
            )
          }
        />
      </div>
    </div>
  );
};
