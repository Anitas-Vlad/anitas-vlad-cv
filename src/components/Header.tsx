import React from "react";

function Header() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-light/20 backdrop-blur-3xl border-2 border-light shadow-lg mx-8 rounded-2xl p-4">
      <h1 className="text-light text-center text-xl font-normal">
        Hey, my name is Vlad
      </h1>
      <br></br>
      <h1 className="text-light text-center text-xl font-normal">
        I will be your next junior developer!
      </h1>
    </div>
  );
}

export default Header;