import React from "react";
import "./About.css";
import ME from "../../assets/about.png";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t, i18n] = useTranslation("common");

  return (
    <section id="about">
      <h5>{t("about.know")}</h5>
      <h2>{t("about.about")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("about.experience")}</h5>
              <small>{t("about.duration")}</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>{t("about.project")}</h5>
              <small>{t("about.completed")}</small>
            </article>
          </div>

          <p>{t("about.description")}</p>

          <a href="#contact" className="btn btn-primary">
            {t("about.button")}
          </a>
        </div>
      </div>
    </section>
  );
}
