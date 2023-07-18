import React from "react";
import classNames from "classnames";


export function AboutMe() {

  return (
    <div className={classNames("flex flex-col mt-12 mr-4 duration-300")}>
      <p className="flex relative self-start bg-gradient-to-l from-orange-power to-blue-power backdrop-blur-3xl w-fit rounded-r-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-6 pr-4">
        About me
      </p>
      <div className="flex flex-col justify-center rounded-r-xl bg-gradient-to-b from-orange-power to-blue-power p-1 pl-0 drop-shadow-md z-0">
        <div className="mr-8 rounded-r-xl bg-dark-apple px-8 pt-20 pb-16">
          <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I consider myself as an honest and
            dedicated person, with a curious mind that keeps me active and
            persevering.
          </p>
          <br></br>
          <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As a perfectionist, it's a
            pleasure finding ways to make my code look and run better.
          </p>
          <br></br>
          <p className="text-light font-medium">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am looking forward to joining a
            team in which I can pick up skills and grow as both developer and
            person.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
