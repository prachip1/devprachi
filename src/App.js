import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Skills from "./components/Skills";


export default function App(){
  return(
    <main clasName="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Social />
    </main>
  );
}
