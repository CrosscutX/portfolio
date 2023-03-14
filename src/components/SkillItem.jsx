import React from "react";

export default function SkillItem(props) {
  return (
    <div className="skill-item">
      <img src={props.img} alt={props.text} />
      <p>{props.text}</p>
    </div>
  );
}
