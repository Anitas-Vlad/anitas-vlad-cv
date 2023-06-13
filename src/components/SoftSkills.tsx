import React from "react";

function SoftSkills(){
    return (
        <div className="flex flex-col mt-6">
            <div className="flex relative bg-light w-28 h-28 rounded-full justify-center items-center top-14 self-center">
                <p className=" text-dark-apple font-medium p-3">Soft Skills</p>
            </div>
            <div className="mx-8 rounded-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-2 border-light">
                <p className="text-light font-medium text-center">
                    &#9; Communication, Empathy, Open-mindedness, Creativity, Teamwork and Collaboration
                </p>
            </div>
        </div>
    )
}

export default SoftSkills;