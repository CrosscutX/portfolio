import React from "react";
import SkillItem from "./SkillItem";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import git from "../assets/git.png";

export default function Skills() {
  return (
    <div className="skills">
      <h1>Tech Skills</h1>
      <div className="skill-container">
        <SkillItem img={html} text="HTML" />
        <SkillItem img={css} text="CSS" />
        <SkillItem img={javascript} text="Javascript" />
        <SkillItem img={react} text="React" />
        <SkillItem img={github} text="Github" />
        <SkillItem img={git} text="Git" />
      </div>
    </div>
  );
}
