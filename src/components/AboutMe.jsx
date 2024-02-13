import React from "react";
import Alex from "../assets/alex-pic.jpg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-left-container">
        <h1>Background</h1>
        <p>
          I'm Alex, a web developer and Stark State College grad with an
          associate degree in{" "}
          <span className="emphasis">Computer Science and Engineering</span>.
        </p>
        <br></br>
        <p>
          I've been interested in tech for as long as I can remember, along with
          the possibilites that the internet creates. Combine this with my
          limitless desire to grow, and improve, and developing for the web was
          a no brainer.
        </p>
        <br></br>
        <p>
          When I'm not working, I'm a fan of all things nerdy, like video games
          and movies. You'll always find me catching the latest marvel movie!
        </p>
      </div>
      <div className="about-me-right-container">
        <img src={Alex} alt="Alex" />
      </div>
    </div>
  );
}
