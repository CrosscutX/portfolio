import React from "react";
import ProjectItem from "./ProjectItem";
import Battleship from "../assets/battleship.png";
import Quiz from "../assets/quizzical.png";

export default function Projects() {
  function descriptionHelper() {}

  return (
    <div className="projects">
      <ProjectItem
        image={Battleship}
        title="Battleship"
        description={descriptionHelper("battleship")}
        live={null}
        github={null}
      />
      <ProjectItem
        image={Quiz}
        title="Quizzical"
        description={descriptionHelper("quizzical")}
        live={null}
        github={null}
      />
    </div>
  );
}
