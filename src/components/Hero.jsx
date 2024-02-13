import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1>
          Hey, I'm <span className="alex">Alex Donahue</span>
        </h1>
        <h2>
          I'm a <span className="emphasis">Full-Stack Developer</span> based out
          of <span className="emphasis">Ohio</span>
        </h2>
        <p>
          I love bringing websites to life with tools like{" "}
          <span className="emphasis react">React</span>
        </p>
        <p className="emphasis react email">donahue.alex@gmail.com</p>
      </div>
    </div>
  );
}
