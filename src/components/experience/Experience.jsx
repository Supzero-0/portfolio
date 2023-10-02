import React from "react";
import "./Experience.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaSymfony,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const [t, i18n] = useTranslation("common");

  return (
    <section id="experience">
      <h5>{t("experience.skill")}</h5>
      <h2>{t("experience.title")}</h2>

      <div className="container experience__container">
        {/* FRONTEND */}

        <div className="experience__frontend">
          <h3>{t("experience.frontend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">
                  {t("experience.experienced")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <FaCss3Alt className="experience__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <FaBootstrap className="experience__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">{t("experience.basic")}</small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <FaReact className="experience__icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND */}

        <div className="experience__backend">
          <h3>{t("experience.backend")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaSymfony className="experience__icon" />
              <div>
                <h4>PHP / Symfony</h4>
                <small className="text-light">
                  {t("experience.experienced")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <FaNodeJs className="experience__icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">
                  {t("experience.intermediate")}
                </small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">{t("experience.basic")}</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
