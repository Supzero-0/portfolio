import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./Footer.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation("common");

  return (
    <footer>
      <a href="" className="footer__logo">
        Mathieu LECANU
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">{t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#experience">{t("footer.experience")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("footer.portfolio")}</a>
        </li>
        <li>
          <a href="#testimonials">{t("footer.testimonials")}</a>
        </li>
        <li>
          <a href="#contact">{t("footer.contact")}</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/mathieulecanu/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Supzero-0" target="_blank">
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mathieu LECANU. All rights reserved</small>
      </div>
    </footer>
  );
}
