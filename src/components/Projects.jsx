import React from "react";
import ProjectItem from "./ProjectItem";
import Battleship from "../assets/battleship.png";
import Paws from "../assets/paws-awhile.jpg";
import MovieList from "../assets/movie-list.jpg";

export default function Projects() {
  //helper function used to keep my ProjectItem components more clean
  function descriptionHelper(project) {
    if (project === "battleship") {
      return (
        <>
          A working imitation of battleship! This project was instrumental in
          developing my ability to problem solve using javascript. Working
          through the process of selecting things and using event listeners for
          something of this scope was eye opening, and really led to me growing
          an appreciation for how React simplifies these things. Unit tests
          created with Jest are used to ensure that the functionality remains
          consistent.
        </>
      );
    }

    if (project === "paws") {
      return (
        <>
          A freelance project done in collaboration with a client for his pet
          memorial service. React/Vite are used on the front-end. I consulted
          with said client in order to nail down project requirements, basically
          handling all aspects of the project from design, coding, hosting, and
          even the photography. The project is hosted using Netlify, and the
          forms are integrated with the client's email using netlify's forms.
        </>
      );
    }

    if (project === "Movie Watch List") {
      const omdbLink = (
        <a href="https://www.omdbapi.com/" className="link">
          OMBD
        </a>
      );
      return (
        <>
          By far my largest project so far, a full-fledged full-stack
          application built from the ground up using HTML, CSS, React and
          Node.js. The MVC pattern is utilized on the backend to create an API
          that calls from another api called {omdbLink}, and also handles our
          database functionality using mongoDB. Throughout this project I worked
          on all parts of the stack, ensuring that the functionality was
          consistent across both the front-end and back-end, along with ensuring
          the project was hosted properly using render.com.{" "}
          <span className="emphasis">Note:</span>(The server takes 1-2 minutes
          to spin up after your signup attempt).
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
          image={MovieList}
          title="Movie Watch List"
          description={descriptionHelper("Movie Watch List")}
          live={"https://movie-list-v2.netlify.app/signup"}
          github={"https://github.com/CrosscutX/movie-list-2.0"}
        />

        <ProjectItem
          image={Battleship}
          title="Battleship"
          description={descriptionHelper("battleship")}
          live={"https://crosscutx.github.io/battleship/"}
          github={"https://github.com/CrosscutX/battleship"}
        />
        <ProjectItem
          image={Paws}
          title="Paws Awhile"
          description={descriptionHelper("paws")}
          live={"https://pawsawhilepet.org/"}
          github={"https://github.com/MatchaSage/pawsawhile"}
        />
      </div>
    </div>
  );
}
