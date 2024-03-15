import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const EXP = "Experienced"
const INT = "Intermediate"
const BAS = "Basic"

const frontEndSkillsList = [
  { skill: "React", level: EXP },
  { skill: "Redux", level: EXP },
  { skill: "Redux Toolkit", level: EXP },
  { skill: "Redux Toolkit Query", level: EXP },
  { skill: "React Native", level: INT },
  { skill: "Typescript", level: INT },
  { skill: "Next.js", level: EXP },
  { skill: "HTML", level: EXP },
  { skill: "CSS", level: EXP },
  { skill: "Javascript", level: EXP },
  { skill: "SCSS", level: EXP },
  { skill: "Tailwind CSS", level: INT },
  { skill: "Figma", level: BAS },
  { skill: "AdobeXD", level: BAS },
  { skill: "Stripe", level: INT },
]
const backEndSkillsList = [
  { skill: "Node JS", level: INT },
  { skill: "Python", level: BAS },
  { skill: "Flask", level: BAS },
  { skill: "Express", level: INT },
  { skill: "AWS", level: INT },
  { skill: "GraphQL", level: INT },
  { skill: "MongoDB", level: BAS },
  { skill: "MySQL", level: BAS },
  { skill: "Firebase", level: BAS },
  { skill: "Stripe", level: INT },
  { skill: "Redis", level: BAS },
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkillsList.map(({ skill, level }) => (
              <article key={skill} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndSkillsList.map(({ skill, level }) => (
              <article key={skill} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
