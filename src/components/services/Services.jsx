import "./services.css"
import { BiCheck } from "react-icons/bi"

import { servicesList } from "./constants"

const typesList = [...new Set(servicesList.map((item) => item.type))]

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {typesList.map((type, index) => (
          <article key={index} className="service">
            <div className="service__head">
              <h3>{type}</h3>
            </div>
            <ul className="service__list">
              {servicesList.map(
                (item, index) =>
                  item.type === type && (
                    <li key={index}>
                      <BiCheck className="service__list-icon" />
                      <p>{item.description}</p>
                    </li>
                  )
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
