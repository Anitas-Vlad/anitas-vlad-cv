import React from "react";
<link
  href="https://fonts.googleapis.com/css?family=Poppins"
  rel="stylesheet"
></link>;

function Header() {
  return (
    <div className="bg-light mx-8 rounded-2xl p-4">
      <h1 className="text-dark-apple text-center text-xl font-normal">
        Hey, my name is Vlad
      </h1>
      <br></br>
      <h1 className="text-dark-apple text-center text-xl font-normal">
        I will be your next junior developer!
      </h1>
    </div>
  );
}

export default Header;