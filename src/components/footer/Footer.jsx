import "./footer.css"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        DannyDevs
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/daniel-stuart-5520231a1/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Discode-Stu"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; DannyDevs. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
