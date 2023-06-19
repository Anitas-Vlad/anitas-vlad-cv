import React from "react";

function TechnicalSkills() {
  return (
    <div className="flex flex-col mt-6 right-60">
      <p className=" flex relative bg-orange-power backdrop-blur-3xl border-2 border-r-0 border-light w-fit rounded-l-xl justify-center self-end items-center top-8 drop-shadow-md z-10 text-light font-bold text-xl p-3">
        Technical Skills
      </p>
      <div className="ml-8 rounded-l-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-t-2 border-b-2 border-l-2 border-light drop-shadow-md z-0">
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
  );
}

export default TechnicalSkills;
