import FadeLoader from "react-spinners/FadeLoader";
import "./Contact.css";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useFormik } from "formik";
import { contactUsSchema } from "../../ValidationSchema/ValidationSchema";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);

  const url = "http://127.0.0.1:8000/api/v1/contact/contact-us/";

  const initialValues = {
    full_name: "",
    email: "",
    phone_number: "",
    subject:
      sessionStorage.getItem("id") == null
        ? "from unregistered user"
        : "from registered user",
    message_type: null,
    message: "",
  };

  const { values, errors, handleChange, touched, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: contactUsSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSend();
    },
  });

  console.log(errors);

  const handleSend = () => {
    const loader = ReactDOMServer.renderToString(
      <FadeLoader
        color={"green"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={{ position: "absolute", top: "30%", left: "15%" }}
      />
    );

    const addElement = document.querySelector(".loadingSpinner");
    addElement.innerHTML = loader;
    addElement.classList.add("spinner");
    const elementToReplace = document.getElementsByClassName("form-input")[0];

    setTimeout(() => {
      elementToReplace.textContent =
        "Thank you for reaching out! Your message has been received, and we appreciate your interest. We will review your inquiry and get back to you as soon as possible.";
      elementToReplace.classList.add("contactRespond");
    }, 3000);
  };

  return (
    <>
      <div className="contact_container">
        <div className="contactHead">
          <p>Contact Us</p>
        </div>
        <div className="contactContent">
          <div className="contactMap">
            {isLoading ? (
              <FadeLoader
                color={"green"}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={{
                  left: "50%",
                  height: "450px",
                  top: "200px",
                }}
              />
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.7482654461505!2d78.05913497648466!3d29.929148574981838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949eeb13c236d%3A0xbd6910ed4b3e201b!2sEcohome%20technologies-%20Experience%20Beyond%20Imagination!5e0!3m2!1sen!2sin!4v1699197874427!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
          <form
            className="form-input"
            style={{
              width: "25vw",
              minWidth: "350px",
            }}
            onSubmit={handleSubmit}
          >
            <span className="loadingSpinner"></span>
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            {errors.full_name && touched.full_name ? (
              <small>{errors.full_name}</small>
            ) : (
              ""
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && touched.email ? <small>{errors.email}</small> : ""}

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              onChange={handleChange}
            />
            {errors.message && touched.message ? (
              <small>{errors.message}</small>
            ) : (
              ""
            )}

            <div className="form-button" style={{ marginBottom: "100px" }}>
              <button type="submit" className="submit-button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
