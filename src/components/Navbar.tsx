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
      <Button
        onClick={() => swapSelectedPage("home")}
        className={classNames(
          "duration-700 mx-4 bg-transparent flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3",
          { "bg-blue-power": isOptionSelected("home") }
        )}
      >
        Home
      </Button>

      <Button
        onClick={() => swapSelectedPage("projects")}
        className={classNames(
          "duration-500 mx-4 bg-transparent flex relative self-center w-fit rounded-xl justify-center items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3",
          { "bg-blue-power": isOptionSelected("projects") }
        )}
      >
        Projects
      </Button>
    </div>
  );
}

export default Navbar;
