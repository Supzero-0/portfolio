import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [t, i18n] = useTranslation("common");

  return (
    <header>
      <div className="container header__container">
        <h5>{t("header.hello")}</h5>
        <h1>Mathieu LECANU</h1>
        <h5 className="text-light">{t("header.job")}</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {t("header.scroll")}
        </a>
      </div>
    </header>
  );
}
