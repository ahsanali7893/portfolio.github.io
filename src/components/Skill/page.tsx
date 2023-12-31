import React from "react";

const Skill = () => {
  const skills = [
    { name: "HTML", imgSrc: "./html.png", bgColor: "orange-500" },
    { name: "CSS", imgSrc: "./css.png", bgColor: "blue-600" },
    { name: "Tailwind", imgSrc: "./tailwind.png", bgColor: "blue-700" },
    { name: "JavaScript", imgSrc: "./js.png", bgColor: "yellow-500" },
    { name: "TypeScript", imgSrc: "./ts.png", bgColor: "blue-400" },
    { name: "React JS", imgSrc: "./react.png", bgColor: "sky-500" },
    { name: "Bootstrap", imgSrc: "./bs.png", bgColor: "sky-500" },
    { name: "Mantine", imgSrc: "./Mantine.png", bgColor: "sky-500" },
    { imgSrc: "./github.png", bgColor: "sky-500" },
    { imgSrc: "./git.png", bgColor: "red-400" },
    { name: "NEXT JS", imgSrc: "./next.png", bgColor: "gray-400" },
  ];

  return (
    <section id="skill" className="py-16 md:py-20 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-cyan-600 text-primary sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 mt-10 sm:grid-cols-2 md:gap-10 md:mt-12 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group overflow-hidden transition-transform transform hover:scale-105 duration-300 bg-${skill.bgColor} px-8 py-10 text-center`}
            >
              <div className="mx-auto h-24 w-24 xl:h-20 xl:w-20">
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className={`cursor-pointer hover:filter hover:brightness-125 transition duration-300`}
                />
                <p className={`font-bold mt-2 text-black hover:text-teal-500`}>
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
