import { Button } from "@material-tailwind/react";
import classNames from "classnames";
import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "vm";

function Navbar() {
  const [selectedPage, setSelectedPage] = useState("home");

  const swapSelectedPage = (option: string) => setSelectedPage(option);
  const isOptionSelected = (opt: string) => selectedPage === opt;

  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-l from-orange-power to-blue-power backdrop-blur-3xl shadow-lg mx-8 rounded-2xl p-1 mx-4">
        <Button
          onClick={() => swapSelectedPage("home")}
          className={classNames(
            "duration-700 bg-dark-apple flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light p-3",
            { "": isOptionSelected("home") }
          )}
        >
          Home
        </Button>
      </div>

      <Button
        onClick={() => swapSelectedPage("projects")}
        className={classNames(
          "duration-500 mx-4 bg-transparent flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3",
          { "bg-orange-power": isOptionSelected("projects") }
        )}
      >
        Projects
      </Button>
    </div>
  );
}

export default Navbar;
