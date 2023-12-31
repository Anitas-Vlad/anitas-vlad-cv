import React from "react";
import AboutMe from "../AboutMe";
import TechnicalSkills from "../TechnicalSkills";
import SoftSkills from "../SoftSkills";
import EducationAndTraining from "../EducationAndTraining";
import WorkExperience from "../WorkExperience";
import Languages from "../Languages";
import classNames from "classnames";

interface props {
    selectedPage: string;
  }

function PhoneHomeContent(prop: props){
    
    const isOptionSelected = (opt: string) => prop.selectedPage === opt;
    
    return (
        <div  className={classNames("flex flex-col col-span-2",{"hidden duration-300" : !isOptionSelected("home")})}>
            <AboutMe />
            <TechnicalSkills />
            <SoftSkills />
            <EducationAndTraining />
            <WorkExperience />
            <Languages />
        </div>
    )
}

export default PhoneHomeContent;