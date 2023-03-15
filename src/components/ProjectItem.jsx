import React from "react";

export default function ProjectItem(props) {
  return (
    <div className="project-item">
      <img src={props.image} alt={props.title} />
    </div>
  );
}
