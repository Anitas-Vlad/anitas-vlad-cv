import React from "react";

function Languages(){
    return (
        <div className="flex flex-col">
            <div className="flex relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 to-blue-700/20 backdrop-blur-3xl border-2 border-light shadow-lg w-32 h-32 rounded-full justify-center items-center top-16 self-center drop-shadow-md z-10">
                <p className=" text-light text-xl font-medium p-3 text-center">Languages</p>
            </div>
            <div className="flex flex-col mx-8 rounded-xl bg-light bg-opacity-20 px-8 pt-20 pb-10 border-t-2 border-2 border-light drop-shadow-md z-0 justify-center text-center">
                <p className="text-light font-medium mb-3">English - Fluent</p>
                <p className="text-light font-medium mb-3">Romanian - Native</p>
            </div>
        </div>
    )
}

export default Languages;