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
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-full w-full bg-dark-apple to-blue-tab pt-4">
      <div className="flex flex-col  justify-center h-full w-full bg-dark-apple to-blue-tab">
        <Header />
        <Navbar />
        <AboutMe />
        <TechnicalSkills />
        <SoftSkills />
        <EducationAndTraining />
        <WorkExperience />
        <Languages />
        <ContactAndLinks />
      </div>
    </div>
  );
}

export default App;
