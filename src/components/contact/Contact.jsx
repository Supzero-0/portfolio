import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [t] = useTranslation("common");

  // Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kz8g2yd",
        "template_c2tvuja",
        form.current,
        "0GO8XILgXV3AbJgQg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>{t("contact.touch")}</h5>
      <h2>{t("contact.title")}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mat.lecanu@gmail.com</h5>
            <a href="mailto:mat.lecanu@gmail.com" target="_blank">
              {t("contact.send")}
            </a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>Linked In</h4>
            <h5>Mathieu LECANU</h5>
            <a href="https://linkedin.com/in/mathieulecanu/" target="_blank">
              {t("contact.add")}
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("contact.name")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.email")}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("contact.message")}
            required
          />
          <button type="submit" className="btn btn-primary">
            {t("contact.send-message")}
          </button>
        </form>
      </div>
    </section>
  );
}
