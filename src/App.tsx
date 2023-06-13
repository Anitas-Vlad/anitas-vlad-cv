import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from "./components/TechnicalSkills";
import SoftSkills from "./components/SoftSkills";
import EducationAndTraining from "./components/EducationAndTraining";

function App() {
  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-r from-cyan-500 to-blue-700 pt-4">
      <Header/>
      <AboutMe/>
      <TechnicalSkills/>
      <SoftSkills/>
      <EducationAndTraining/>
    </div>
  );
}

export default App;
