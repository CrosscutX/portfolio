import React from "react";
import "./style.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
}
