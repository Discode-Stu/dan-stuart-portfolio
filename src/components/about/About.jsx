import "./about.css"
import ME from "../../assets/about-me.jpg"
// import { FaAward } from "react-icons/fa"
// import { FiUsers } from "react-icons/fi"
// import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
            I am a full stack developer with a passion for building beautiful
            and functional websites. I am looking for a company that can
            challenge me and help me grow as a developer. I am currently working
            as a full stack developer at a startup called Couchtour.tv. My
            greatest strength is my ability to learn new technologies and build
            a product that is user friendly and easy to use.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
