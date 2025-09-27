import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1>
          Hey, I'm <span className="alex">Alex Donahue</span>
        </h1>
        <h2>
          I'm a <span className="emphasis">Comp-Sci Student</span> studying at <span className="emphasis">Kent State</span>
        </h2>
        <p>
          I love creating cool stuff with code{" "}
        </p>
        <p className="emphasis react email">donahue.alex@gmail.com</p>
      </div>
    </div>
  );
}
