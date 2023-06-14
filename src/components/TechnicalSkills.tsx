import React from "react";

function TechnicalSkills() {
    return (
        <div className="flex flex-col mt-6 right-60">
            <div className="flex relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 to-blue-700/20 backdrop-blur-3xl border-2 border-light shadow-inner shadow-light/80 w-44 h-44 rounded-full justify-center items-center top-[88px] right-8 self-end z-10">
                <p className=" text-light font-bold text-xl p-3">Technical Skills</p>
            </div>
            <div className="ml-8 rounded-l-xl bg-light bg-opacity-20 px-8 pt-20 pb-16 border-t-2 border-b-2 border-l-2 border-light drop-shadow-md z-0">
                <li className="text-light text-xl font-bold mb-1"> General :</li>
                <p className="text-light font-medium">
                    C#, Java, Typescript, REST, TDD, Object Oriented Programming (OOP)
                </p>
                <br></br>
                <li className="text-light text-xl font-bold mb-1">.Net Backend :</li>
                <p className="text-light font-medium">
                    .Net / .Net Core, ASP.Net, SQL, PostgreSQL, Entity Framework, XUnit, Selenium, Axure Data Studio
                </p>
                <br></br>
                <li className="text-light text-xl font-bold mb-1">Java Backend :</li>
                <p className="text-light font-medium">
                    Spring Framework, MySQL, JDBC, Hibernate, Thymeleaf, Lombok
                </p>
                <br></br>
                <li className="text-light text-xl font-bold mb-1">Frontend :</li>
                <p className="text-light font-medium">
                    Figma, React, Angular,  Material-Tailwind, Tailwind-CSS, HTML, CSS, CSHTML, Bootstrap
                </p>
                <br></br>
                <li className="text-light text-xl font-bold mb-1">Tools and Technologies :</li>
                <p className="text-light font-medium">
                    Rider, InteliJ, Visual Studio Code, GitHub, Docker, Adobe Photoshop, Lightroom, Illustrator
                </p>
            </div>
        </div>
    )
}

export default TechnicalSkills;