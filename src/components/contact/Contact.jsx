import "./contact.css"
import { data } from "./constants"

import React, { useRef } from "react"
import emailjs from "emailjs-com"

const SERVICE_ID = "service_j93lu4n"
const TEMPLATE_ID = "template_62cp0cv"
const PUBLIC_KEY = "DWihbRG8aFN7Whusw"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    // .then(
    //   (result) => {
    //     console.log(result.text)
    //   },
    //   (error) => {
    //     console.log(error.text)
    //   }
    // )
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {data.map(({ h4, h5, href, icon }, index) => (
            <article key={index} className="contact__option">
              <div>{icon}</div>
              <h4>{h4}</h4>
              <h5>{h5}</h5>
              <a href={href} rel="noreferrer" target="_blank">
                Send a message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
