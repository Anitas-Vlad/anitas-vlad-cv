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
import { useContext } from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import classNames from "classnames";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  const swapSelectedPage = (option: string) => setSelectedPage(option);
  const isOptionSelected = (opt: string) => selectedPage === opt;

  return (
    <div className="h-full w-full bg-dark-apple to-blue-tab pt-4">
      <div className="flex flex-col  justify-center h-full w-full bg-dark-apple to-blue-tab">
        <Header />
        <div className="flex justify-center">
          <Button
            onClick={() => swapSelectedPage("home")}
            className={classNames(
              "duration-700 mx-4 bg-transparent flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3",
              { "bg-blue-power": isOptionSelected("home") }
            )}
          >
            Home
          </Button>

          <Button
            onClick={() => swapSelectedPage("projects")}
            className={classNames(
              "duration-500 mx-4 bg-transparent flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3",
              { "bg-blue-power": isOptionSelected("projects") }
            )}
          >
            Projects
          </Button>
        </div>
        <AboutMe selectedPage={selectedPage}/>
        <TechnicalSkills selectedPage={selectedPage}/>
        <SoftSkills selectedPage={selectedPage}/>
        <EducationAndTraining selectedPage={selectedPage}/>
        <WorkExperience selectedPage={selectedPage}/>
        <Languages selectedPage={selectedPage}/>
        <ContactAndLinks />
      </div>
    </div>
  );
}

export default App;
