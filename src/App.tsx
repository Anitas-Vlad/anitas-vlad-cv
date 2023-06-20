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
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import classNames from "classnames";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  const swapSelectedPage = (option: string) => setSelectedPage(option);
  const isOptionSelected = (opt: string) => selectedPage === opt;

  return (
    <div className="h-full w-full bg-dark-apple pt-4">
      <div className="flex flex-col  justify-center h-full w-full bg-dark-apple">
        <Header />
        <div className="flex relative justify-center top-8">
          <div className={classNames("flex relative duration-300 self-center w-fit justify-center  bg-dark-appleitems-center backdrop-blur-3xl rounded-xl p-1  mx-4", {"bg-blue-power" : isOptionSelected("home")})}>
            <Button
              onClick={() => swapSelectedPage("home")}
              className={classNames(
                "items-center z-10 text-light font-bold text-xl rounded-md px-4 py-2",
                { "bg-dark-apple": isOptionSelected("home") }
              )}
            >
              Home
            </Button>
          </div>

          <div className={classNames("flex relative duration-300 self-center w-fit justify-center  bg-dark-appleitems-center backdrop-blur-3xl rounded-xl p-1 mx-4", {"bg-orange-power" : isOptionSelected("projects")})}>
            <Button
              onClick={() => swapSelectedPage("projects")}
              className={classNames(
                "items-center z-10 text-light font-bold text-xl rounded-md px-4 py-2",
                { "bg-dark-apple": isOptionSelected("projects") }
              )}
            >
              Projects
            </Button>
          </div>
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
