import "./portfolio.css"
import React from "react"
import { portfolioItems } from "./constants"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.map(
          ({
            id,
            img,
            title,
            github,
            demo,
            option = "",
            priv = false,
            demoBtnText = "Live Demo",
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>

              {priv ? (
                <>{option}</>
              ) : (
                <div className="portfolio__item-cta">
                  {github && (
                    <a
                      href={github}
                      className="btn"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  )}
                  {demo ? (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {demoBtnText}
                    </a>
                  ) : (
                    <p>Live Demo coming soon!</p>
                  )}
                </div>
              )}
            </article>
          )
        )}
      </div>
    </section>
  )
}

export default Portfolio
