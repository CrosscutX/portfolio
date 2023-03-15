import React from "react";
import ProjectItem from "./ProjectItem";
import Battleship from "../assets/battleship.png";
import Quiz from "../assets/quizzical.png";

export default function Projects() {
  //helper function used to keep my ProjectItem components more clean
  function descriptionHelper(project) {
    if (project === "battleship") {
      return;
    }

    if (project === "quizzical") {
      return;
    }

    if (project === "game recommender") {
      return;
    }
    return;
  }

  return (
    <div className="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
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
    </div>
  );
}
