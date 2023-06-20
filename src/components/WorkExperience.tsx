import React from "react";
import classNames from "classnames";

interface props {
  selectedPage: string;
}

function WorkExperience(prop: props) {

  const isOptionSelected = (opt: string) => prop.selectedPage === opt;

  return (
    <div className={classNames("flex flex-col mt-6", {"hidden" : !isOptionSelected("home")})}>
      <p className="flex relative self-center bg-blue-power backdrop-blur-3xl w-fit rounded-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-4 pr-4">
        Work Experience
      </p>
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-t from-orange-power to-blue-power drop-shadow-md z-0 py-1 mx-4">
        <div className="flex flex-col mx-8 rounded-xl bg-dark-apple px-8 pt-16 pb-12 text-center">
          <p className="text-light text-xl font-bold mb-3">
            Wedding Photographer
          </p>
          <div className="self-center w-3 h-3 bg-light rounded-b-full mb-3"></div>
          <p className="text-light font-medium">2021 - 2023</p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
