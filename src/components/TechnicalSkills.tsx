import React from "react";
import classNames from "classnames";

function TechnicalSkills() {

  return (
    <div className={classNames("flex flex-col mt-6 ml-4 duration-300")}>
      <p className="flex relative self-end bg-gradient-to-r from-orange-power to-blue-power backdrop-blur-3xl w-fit rounded-l-xl justify-center items-center top-7 z-10 text-light font-bold text-xl py-3 pl-4 pr-6">
        Technical Skills
      </p>
      <div className="flex flex-col justify-center rounded-l-xl bg-gradient-to-b from-orange-power to-blue-power p-1 pr-0 drop-shadow-md z-0">
        <div className="ml-8 rounded-l-xl bg-dark-apple px-8 pt-20 pb-16">
          <li className="text-light text-xl font-bold mb-1"> General :</li>
          <p className="text-light font-medium">
            C#, Java, Typescript, REST, TDD, Object Oriented Programming (OOP)
          </p>
          <br></br>
          <li className="text-light text-xl font-bold mb-1">.Net Backend :</li>
          <p className="text-light font-medium">
            .Net / .Net Core, ASP.Net, SQL, PostgreSQL, Entity Framework, XUnit,
            Selenium, Axure Data Studio
          </p>
          <br></br>
          <li className="text-light text-xl font-bold mb-1">Java Backend :</li>
          <p className="text-light font-medium">
            Spring Framework, MySQL, JDBC, Hibernate, Thymeleaf, Lombok
          </p>
          <br></br>
          <li className="text-light text-xl font-bold mb-1">Frontend :</li>
          <p className="text-light font-medium">
            Figma, React, Angular, Material-Tailwind, Tailwind-CSS, HTML, CSS,
            CSHTML, Bootstrap
          </p>
          <br></br>
          <li className="text-light text-xl font-bold mb-1">
            Tools and Technologies :
          </li>
          <p className="text-light font-medium">
            Rider, InteliJ, Visual Studio Code, GitHub, Docker, Adobe Photoshop,
            Lightroom, Illustrator
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnicalSkills;
