import React from "react";

function EducationAndTraining() {
  return (
    <div className="flex flex-col mt-6 right-60 ml-4">
      <p className="flex relative self-end bg-gradient-to-r from-orange-power to-blue-power backdrop-blur-3xl w-fit rounded-l-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-4 pr-6">
        Education & Training
      </p>
      <div className="flex flex-col justify-center rounded-l-xl bg-gradient-to-b from-orange-power to-blue-power p-1 pr-0 drop-shadow-md z-0">
        <div className="flex flex-col ml-8 rounded-l-xl bg-dark-apple px-8 pt-20 pb-16">
          <p className="text-light text-xl font-bold mb-3">
            Full Stack .Net Developer - School of Applied Technology {"</salt>"}
          </p>
          <div className="self-center w-3 h-3 bg-orange-power rounded-b-full mb-3"></div>
          <p className="text-light font-medium mb-3">January 2023 - April 2023</p>
          <p className="text-light font-medium">
            Intensive 3-month training program focused on applied learning, TDD
            and mob programming
          </p>
          <br></br>
          <span className="bg-gradient-to-r from-blue-tab to-blue-power h-1 w-screen rounded-full"></span>
          <br></br>
          <p className="text-light text-xl font-bold mb-3">
            {" "}
            Java from Scratch - Software Development Academy (SDA)
          </p>
          <div className="self-center w-3 h-3 bg-orange-power rounded-b-full mb-3"></div>
          <p className="text-light font-medium mb-3">January 2023 - April 2023</p>
          <p className="text-light font-medium">
            Intensive 3-month training program with focused on applied learning,
            TDD and mob programming
          </p>
          <br></br>
          <span className="bg-gradient-to-r from-blue-tab to-blue-power h-1 w-screen rounded-full"></span>
          <br></br>

          <p className="text-light text-xl font-bold mb-3">
            {" "}
            Highschool of Arts Aurel Popp - Architecture
          </p>
          <div className="self-center w-3 h-3 bg-orange-power rounded-b-full mb-3"></div>
          <p className="text-light font-medium">Graduated in 2020</p>
        </div>
      </div>
    </div>
  );
}

export default EducationAndTraining;
