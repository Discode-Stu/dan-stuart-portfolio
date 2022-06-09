import "./experience.css"
import { BsPatchCheckFill } from "react-icons/bs"

const EXP = "Experienced"
const INT = "Intermediate"
const BAS = "Basic"

const frontEndSkillsList = [
  { skill: "HTML", level: EXP },
  { skill: "CSS", level: EXP },
  { skill: "Javascript", level: EXP },
  { skill: "React", level: EXP },
  { skill: "Tailwind", level: INT },
  { skill: "SCSS", level: EXP },
]
const backEndSkillsList = [
  { skill: "Node JS", level: INT },
  { skill: "Python", level: BAS },
  { skill: "Express", level: INT },
  { skill: "AWS", level: INT },
  { skill: "GraphQL", level: INT },
  { skill: "MongoDB", level: BAS },
  { skill: "MySQL", level: BAS },
  { skill: "Firebase", level: BAS },
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
