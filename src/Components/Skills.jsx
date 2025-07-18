import React from "react";

const skill = [
  {
    id: 1,
    text: "Web Development",
    percentage: 100,
  },
  {
    id: 2,
    text: "Android",
    percentage: 100,
  },
  {
    id: 3,
    text: "Quality",
    percentage: 100,
  },
  {
    id: 4,
    text: "Graphics",
    percentage: 100,
  },
  {
    id: 5,
    text: "3D Modeling",
    percentage: 100,
  },
  {
    id: 5,
    text: "iOS Development",
    percentage: 95,
  },
  {
    id: 7,
    text: "Server Management",
    percentage: 90,
  },
  {
    id: 8,
    text: "Control and Automation",
    percentage: 90,
  },
];

function Skills() {
  return (
    <div className="w-full h-max flex flex-col items-center bg-slate-50/50 py-24">
      <p className="text-center text-4xl text-blue-950 font-bold font-nunito md:mt-24">
        Our Skills
      </p>
      <h1 className="w-20 h-0.5 bg-[#da0266] mt-2"></h1>

      <div className="mt-10 md:mt-20 w-full px-5 md:px-20 space-y-4">
        {skill.map((skill) => {
          return (
            <div className="w-full bg-gray-300 rounded-2xl overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-l from-[#00aeff] to-[#da0266] py-1 px-4 flex justify-between rounded-2xl items-center text-white text-sm font-semibold"
                style={{ width: `${skill.percentage}%` }}
              >
                <p>{skill.text}</p>
                <p className="text-black">{skill.percentage}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
