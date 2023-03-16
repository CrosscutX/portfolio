import React from "react";
import ProjectItem from "./ProjectItem";
import Battleship from "../assets/battleship.png";
import Quiz from "../assets/quizzical.png";

export default function Projects() {
  //helper function used to keep my ProjectItem components more clean
  function descriptionHelper(project) {
    if (project === "battleship") {
      return "A working imitation of battleship! This project was instrumental in developing my ability to problem solve using javascript. Figuring out the logic was no easy feat! Working through the process of selecting things and using event listeners for something of this scope was eye opening, and really led to me growing an appreciation for how React simplifies these things.";
    }

    if (project === "quizzical") {
      const link = (
        <a href="https://opentdb.com/api_config.php" className="link">
          here
        </a>
      );
      return (
        <>
          A simple quiz app using the open trivia api {link}. This app makes a
          call to an api and then displays said questions from the api and
          allows you to answer them and then check said answers. While working
          on this I was able to further hone my skills with React, and I was
          able to play around with a lot of new concepts that I had learned,
          such as hooks and conditional rendering.
        </>
      );
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
        <ProjectItem title="Game Recommender" />

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
