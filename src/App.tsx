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

function App() {
  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-r from-cyan-500 to-blue-700 pt-4">
      <Header/>
      <AboutMe/>
      <TechnicalSkills/>
      <SoftSkills/>
      <EducationAndTraining/>
      <WorkExperience/>
      <Languages/>
      <ContactAndLinks/>
    </div>
  );
}

export default App;
