import React from "react";
import Alex from "../assets/professional_Headshot.jpg";

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-me-left-container">
        <h1>Background</h1>
        <p className="p1">
          I'm Alex, a computer science student from Ohio who is currently studying at Kent State University. I'm a 4.0 student and recipient of the federal scholarship program known as <span className="emphasis">Choose Ohio First</span>. Under this program I work professors and engage in undergraduate research with my peers. Working in teams to deepen our knowledge of computer science and build collaborative experience. Outside of this I've also engaged in my own self study, earning a certificate from Harvard University for the completion of their CS50 course, and developing my skills in the domain of web development. Using these skills I've personally developed real world projects. One of which you can see below that I upkeep, and is currently used by a business.  {" "}
          
        </p>
        <br/>
        <br />
        <p className="p1">As of now I'm actively seeking internships in the domain of computer technology. My foundation built in computer science matched with my drive for improvement make me a great fit for many roles in the fields of software and IT. I'm still young and experimenting with where I fit into this ecosystem, so if you have a technical role you think I might be fit for, feel free to reach out at my email listed above.</p>
        <br/>
        <br />
        <p>Finally, in my free time I'm a total geek just like so many of my peers. I love superheroes, video games, movies, comics, you name it. I've also recently taken up guitar recently which has been a ton of fun. Combine all of these interests with an active fitness routine, and I always have something to do!</p>
      </div>
      <div className="about-me-right-container">
        <img src={Alex} alt="Alex" />
      </div>
    </div>
  );
}
