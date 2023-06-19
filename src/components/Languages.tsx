import React from "react";

function Languages() {
  return (
    <div className="flex flex-col">
      <p className="flex relative self-center bg-blue-tab backdrop-blur-3xl border-2 border-light w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3">
        Languages
      </p>
      <div className="flex flex-col mx-8 rounded-xl bg-light bg-opacity-20 px-8 pt-20 pb-10 border-t-2 border-2 border-light drop-shadow-md z-0 justify-center text-center">
        <p className="text-light font-medium mb-3">English - Fluent</p>
        <p className="text-light font-medium mb-3">Romanian - Native</p>
      </div>
    </div>
  );
}

export default Languages;
