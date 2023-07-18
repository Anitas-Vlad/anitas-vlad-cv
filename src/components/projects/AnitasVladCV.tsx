import React from "react";
import classNames from "classnames";

function AnitasVladCV() {
  return (
    // <div className="flex flex-col justify-center rounded-xl bg-gradient-to-b from-orange-power to-blue-power p-1 drop-shadow-md z-0 mt-12 mx-8">
    <div className={classNames("flex flex-col mt-6 duration-300")}>
      <p className="flex relative self-center bg-orange-power w-fit rounded-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 px-4">
        Anitas Vlad CV
      </p>
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-b from-orange-power to-blue-power drop-shadow-md z-0 p-1 mx-8">
        <div className="rounded-xl text-center bg-dark-apple px-8 pt-16 pb-14">
          <a href="https://anitas-vlad-cv.web.app" className="text-light font-medium text-center">Anitas Vlad CV</a>
        </div>
      </div>
    </div>
    
  );
}

export default AnitasVladCV;