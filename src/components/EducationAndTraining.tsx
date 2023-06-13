import React from "react";

function EducationAndTraining(){
    return(
        <div className="flex flex-col mt-6 right-60">
            <div className="flex relative bg-light w-36 h-36 rounded-full justify-center items-center top-[72px] right-8 self-end ">
                <p className=" text-dark-apple font-medium p-3 text-center">Education & Training</p>
            </div>
            <div className="flex flex-col ml-8 rounded-l-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-t-2 border-b-2 border-l-2 border-light text-center">
                <p className="text-light text-xl font-bold mb-3"> Full Stack .Net Developer - School of Applied Technology {'</salt>'}</p>
                <div className="self-center w-3 h-3 bg-light rounded-b-full mb-3"></div>
                <p className="text-light font-medium mb-3">
                    January 2023 - April 2023
                </p>
                <p className="text-light font-medium">
                    Intensive 3-month training program focused on applied learning, TDD and mob programming
                </p>
                <br></br>
                <div className="bg-light h-1 w-auto rounded-full"></div>
                <br></br>

                <p className="text-light text-xl font-bold mb-3"> Java from Scratch - Software Development Academy (SDA)</p>
                <div className="self-center w-3 h-3 bg-light rounded-b-full mb-3"></div>
                <p className="text-light font-medium mb-3">
                    January 2023 - April 2023
                </p>
                <p className="text-light font-medium">
                    Intensive 3-month training program with focused on applied learning, TDD and mob programming
                </p>
                <br></br>
                <div className="bg-light h-1 w-auto rounded-full"></div>
                <br></br>

                <p className="text-light text-xl font-bold mb-3"> Highschool of Arts Aurel Popp - Architecture</p>
                <div className="self-center w-3 h-3 bg-light rounded-b-full mb-3"></div>
                <p className="text-light font-medium mb-3">
                    Graduated in 2020
                </p>
            </div>
        </div>
    )
}

export default EducationAndTraining;