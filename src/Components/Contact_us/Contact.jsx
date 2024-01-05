import Myform from "../Subcomponents/form/myform";
import { useState, useEffect } from "react";
import useAPI from "../../api/useAPI";
import LocalLoading from "../Subcomponents/loading/localloading";

const Contact = ({ page }) => {
  const api = useAPI();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const formData = [
    [
      {
        label: "Full Name",
        type: "text",
        required: true,
        value: name,
        onChange: (e) => setName(e.target.value),
        maxLength: 100,
      },
      {
        label: "Email",
        type: "email",
        required: true,
        value: email,
        onChange: (e) => setEmail(e.target.value),
        maxLength: 100,
      },
      {
        label: "Message",
        type: "text",
        required: true,
        multiline: true,
        rows: 4,
        value: message,
        onChange: (e) => setMessage(e.target.value),
        maxLength: 255,
      },
    ],
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    await api
      .crud("POST", "contact/contact-us", {
        full_name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        if (res.status === 201)
          alert(
            "Message sent successfully. Our executives will contact you shortly."
          );
      })
      .catch((err) => console.log(err));
    setIsLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight:
          page == "home"
            ? "var(--min-height-section)"
            : "var(--min-height-page)",
        paddingTop: "var(--nav-height)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--green-10)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "var(--max-width)",
          padding: "var(--padding-main)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "var(--padding-main)",
        }}
      >
        <div
          style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center" }}
        >
          {page == "home" ? "Contact Us" : "We would love to hear from you 😃"}
        </div>
        <Myform
          heading={page == "home" ? "" : "Contact Us"}
          formdata={formData}
          formButton={"Send"}
          handleSubmit={handleSubmit}
        />
      </div>
      {isLoading && <LocalLoading />}
    </div>
  );
};

export default Contact;
