import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";
import SoftSkills from "./components/SoftSkills";
import EducationAndTraining from "./components/EducationAndTraining";
import WorkExperience from "./components/WorkExperience";
import Languages from "./components/Languages";
import ContactAndLinks from "./components/ContactAndLinks";
import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-orange-power to-blue-tab pt-4">
      <Header />
      <Navbar />
      <AboutMe />
      <TechnicalSkills />
      <SoftSkills />
      <EducationAndTraining />
      <WorkExperience />
      <Languages />
      <Projects />
      <ContactAndLinks />
    </div>
  );
}

export default App;
