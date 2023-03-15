import React from "react";
import Alex from "../assets/alex-pic.jpg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-left-container">
        <h1>Background</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quisquam tenetur saepe fugit dolorem atque eos aut reprehenderit a
          facere, in, ex esse distinctio aspernatur nostrum nemo quod nesciunt
          ipsam.
        </p>
      </div>
      <div className="about-me-right-container">
        <img src={Alex} alt="Alex" />
      </div>
    </div>
  );
}
