import React from "react";
import ProjectItem from "./ProjectItem";
import Battleship from "../assets/battleship.png";
import Quiz from "../assets/quizzical.png";
import MoveList from "../assets/MovieList.png";

export default function Projects() {
  //helper function used to keep my ProjectItem components more clean
  function descriptionHelper(project) {
    if (project === "battleship") {
      return (
        <>
          A working imitation of battleship! This project was instrumental in
          developing my ability to problem solve using javascript. Figuring out
          the logic was no easy feat! Working through the process of selecting
          things and using event listeners for something of this scope was eye
          opening, and really led to me growing an appreciation for how React
          simplifies these things.
        </>
      );
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

    if (project === "Movie Watch List") {
      const matchaLink = (
        <a href="https://github.com/MatchaSage" className="link">
          MatchaSage
        </a>
      );
      return (
        <>
          Project that I created with my friend and fellow learner {matchaLink}.
          For this project we created a react app capable of fetching data from
          a movie api and allowed users to store that information on their
          machine using local storage. During this project I learned a lot about
          the general workflow of React, and I got a lot of good practice using
          git with another person on a team.
        </>
      );
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
          image={MoveList}
          title="Movie Watch List"
          description={descriptionHelper("Movie Watch List")}
          live={"https://rococo-crostata-bb9989.netlify.app"}
          github={"https://github.com/MatchaSage/movie-list-"}
        />

        <ProjectItem
          image={Battleship}
          title="Battleship"
          description={descriptionHelper("battleship")}
          live={"https://crosscutx.github.io/battleship/"}
          github={"https://github.com/CrosscutX/battleship"}
        />
        <ProjectItem
          image={Quiz}
          title="Quizzical"
          description={descriptionHelper("quizzical")}
          live={"https://comforting-gaufre-c12974.netlify.app/"}
          github={"https://github.com/CrosscutX/quizzical"}
        />
      </div>
    </div>
  );
}
