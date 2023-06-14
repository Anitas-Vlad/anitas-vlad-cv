import React from "react";

export function AboutMe() {
  return (
    <div className="flex flex-col mt-6">
        <div className="flex relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 to-blue-700/20 backdrop-blur-3xl border-2 border-light shadow-inner shadow-light/80 w-32 h-32 rounded-full justify-center items-center top-14 left-8 drop-shadow-md z-10">
            <p className=" text-light font-bold text-xl p-3">About me</p>
        </div>
        <div className="mr-8 rounded-r-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-t-2 border-b-2 border-r-2 border-light drop-shadow-md z-0">
            <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I consider myself as a sincere and dedicated person, with a
                curious mind that keeps me active and persevering.
            </p><br></br>
            <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a perfectionist, it's a pleasure finding ways to make my code
                look and run better.
            </p><br></br>
            <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am looking forward to joining a team in which I can pick up
                skills and grow as both developer and person.
            </p>
      </div>
    </div>
  );
}

export default AboutMe;
