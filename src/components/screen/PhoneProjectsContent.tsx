import React from "react";
import classNames from "classnames";
import AnitasVladCV from "../projects/AnitasVladCV";

interface props {
    selectedPage: string;
  }

function PhoneProjectsContent(prop: props){

    const isOptionSelected = (opt: string) => prop.selectedPage === opt;

    return (
        <div  className={classNames("flex flex-col col-span-2",{"hidden duration-300" : !isOptionSelected("projects")})}>
            <AnitasVladCV />
        </div>
    )
}

export default PhoneProjectsContent;