import React from "react";

function Languages() {
  return (
    <div className="flex flex-col mt-6">
      <p className="flex relative self-center bg-orange-power backdrop-blur-3xl w-fit rounded-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-4 pr-4">
        Languages
      </p>
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-b from-orange-power to-blue-power drop-shadow-md z-0 py-1 mx-4">
        <div className="flex flex-col mx-8 rounded-xl bg-dark-apple px-8 pt-16 pb-12 text-center">
          <p className="text-light font-medium mb-3">English - Fluent</p>
          <p className="text-light font-medium">Romanian - Native</p>
        </div>
      </div>
    </div>
  );
}

export default Languages;
