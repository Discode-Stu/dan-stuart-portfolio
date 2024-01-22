import React from "react"
import Resume from "../../assets/resume-2.pdf"

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={Resume}
        download="Daniel-Stuart-Resume-Frontend-Engineer.pdf"
        className="btn btn-resume"
      >
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
