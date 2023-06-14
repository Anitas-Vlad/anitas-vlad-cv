import React from "react";

function WorkExperience(){
    return (
        <div className="flex flex-col">
            <div className="flex relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 to-blue-700/20 backdrop-blur-3xl border-2 border-light shadow-lg w-32 h-32 rounded-full justify-center items-center top-14 self-center drop-shadow-md z-10">
                <p className=" text-light text-xl font-medium p-3 text-center">Work Experience</p>
            </div>
            <div className="flex flex-col mx-8 rounded-xl bg-light bg-opacity-20 px-8 pt-20 pb-10 border-t-2 border-2 border-light drop-shadow-md z-0 justify-center text-center">
                <p className="text-light text-xl font-bold mb-3">Wedding Photographer</p>
                <div className="self-center w-3 h-3 bg-light rounded-b-full mb-3"></div>
                <p className="text-light font-medium mb-3">
                    2021 - 2023
                </p>
            </div>
        </div>
    )
}

export default WorkExperience;