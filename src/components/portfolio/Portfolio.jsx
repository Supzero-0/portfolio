import React from "react";
import "./Portfolio.css";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const [t] = useTranslation("common");

  return (
    <section id="portfolio">
      <h5>{t("portfolio.work")}</h5>
      <h2>{t("portfolio.title")}</h2>

      <div className="container portfolio__container">
        {t("portfolio.projects", { returnObjects: true }).map((project) => (
          <article className="portfolio__item" key={project.name}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.name} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a href={project.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
              >
                {t("portfolio.demo")}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
