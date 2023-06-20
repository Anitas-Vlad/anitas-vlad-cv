import React from "react";
import classNames from "classnames";

interface props {
  selectedPage: string;
}

function SoftSkills(prop: props) {

  const isOptionSelected = (opt: string) => prop.selectedPage === opt;

  return (
    <div className={classNames("flex flex-col mt-6 duration-300", {"hidden duration-300" : !isOptionSelected("home")})}>
      <p className="flex relative self-center bg-blue-power backdrop-blur-3xl w-fit rounded-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-4 pr-4">
        Soft Skills
      </p>
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-t from-orange-power to-blue-power drop-shadow-md z-0 py-1 mx-4">
        <div className="mx-8 rounded-xl bg-dark-apple px-8 pt-16 pb-14">
          <p className="text-light font-medium text-center">
            &#9; Communication, Empathy, Open-mindedness, Creativity, Teamwork and
            Collaboration
          </p>
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;