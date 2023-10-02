import React, { useState } from "react";
import "./Nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineMessage,
} from "react-icons/ai";
import { RiBookOpenLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  fr: { nativeName: "FR" },
};

export default function Nav() {
  // State
  const [activeNav, setActiveNav] = useState("#");
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiBookOpenLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
      <select
        defaultValue={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        {Object.keys(lngs).map((lng) => (
          <option
            key={lng}
            value={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
          >
            {lngs[lng].nativeName}
          </option>
        ))}
      </select>
    </nav>
  );
}
