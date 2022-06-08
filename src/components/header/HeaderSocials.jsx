import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/daniel-stuart-5520231a1/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Discode-Stu" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
