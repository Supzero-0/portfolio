import React from "react";
import "./Portfolio.css";
import PORTFOLIO from "../../assets/portfolio.png";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
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
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item title",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item title",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item title",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item title",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item title",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
  {
    image: PORTFOLIO,
    name: "portfolio",
    title: "This is a portfolio item 2",
    github: "https://github.com/Supzero-0/portfolio",
    demo: "https://supzero-0.github.io/portfolio/",
  },
];
