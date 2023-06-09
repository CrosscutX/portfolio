import React from "react";

export default function ProjectItem(props) {
  return (
    <div className="project-item">
      <img src={props.image} alt={props.text} />
      <div className="project-text">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="button-container">
          <a className="link-button" href={props.live}>
            Live
          </a>
          <a className="link-button" href={props.github}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
