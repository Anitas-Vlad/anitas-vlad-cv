import React from "react";

function SoftSkills(){
    return (
        <div className="flex flex-col mt-6">
            <div className="flex relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 to-blue-700/20 backdrop-blur-3xl border-2 border-light  shadow-lg w-32 h-32 rounded-full justify-center items-center top-14 self-center z-10">
                <p className="text-light text-xl font-medium p-3">Soft Skills</p>
            </div>
            <div className="mx-8 rounded-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-2 border-light drop-shadow-md z-0">
                <p className="text-light font-medium text-center">
                    &#9; Communication, Empathy, Open-mindedness, Creativity, Teamwork and Collaboration
                </p>
            </div>
        </div>
    )
}

export default SoftSkills;