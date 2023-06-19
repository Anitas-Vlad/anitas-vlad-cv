import React from "react";
import AnitasVladCV from "./AnitasVladCV";

function Projects() {
  return (
    <div className="flex flex-col mt-6">
      <p className="flex relative self-center bg-orange-power backdrop-blur-3xl border-2 border-light w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3">
        Projects
      </p>
      <AnitasVladCV />
    </div>
  );
}

export default Projects;
