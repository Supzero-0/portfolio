import React from "react";
import "./Portfolio.css";
import PORTFOLIO from "../../assets/portfolio.png";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const [t] = useTranslation("common");

  return (
    <section id="portfolio">
      <h5>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.title")}</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO} alt="portfolio" />
          </div>
          <h3>{t("portfolio.portfolio")}</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Supzero-0/portfolio"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://supzero-0.github.io/portfolio/"
              className="btn btn-primary"
              target="_blank"
            >
              {t("portfolio.demo")}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
