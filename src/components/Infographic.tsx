import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
const phases = [
  {
    name: "Design",
    color: "bg-yellow-500",
    description:
      "The Design phase involves creating architectural designs and detailed plans for the system using though modelling with sequence diagram, class diagram, data model and UI/UX Design.",
  },
  {
    name: "Implementation",
    color: "bg-red-500",
    description:
      "The Implementation phase is done using Next.js with React.js and MongoDB as the database ",
  },
  {
    name: "Testing",
    color: "bg-purple-500",
    description:
      "Testing phase was done using whitebox basis path testing and blackbox exploratory and validation testing to make sure the system meets user requirements and is free from bugs. Additionally, usability testing was also done to test the software usability against its intended users. The usability shows the software meets user satisfaction with over 85% usability score",
  },
  {
    name: "User Review and Next Iteration",
    color: "bg-indigo-500",
    description:
      "User review is conducted after testing the software and feedback is then collected to be used as a basis for further software development iterations",
  },
  {
    name: "Planning",
    color: "bg-blue-500",
    description:
      "The Planning phase is where the scope, objectives, resources, and timeline of the project are defined.",
  },
  {
    name: "Analysis",
    color: "bg-green-500",
    description:
      "The Analysis phase is where the requirements of the system are gathered and analyzed. The requirements engineering process produced 25 functional requirements and 3 non-functional requirements with 5 identified actors of the system",
  },
];

const SDLCInfographic: React.FC = () => {
  const [onDisplay, setOnDisplay] = useState<{
    name: string;
    color: string;
    description: string;
  }>(phases[5]);

  function nextPhase(index: number) {
    if (index >= phases.length - 1) {
      setOnDisplay(phases[0]);
    } else {
      setOnDisplay(phases[index + 1]);
    }
  }

  function previousPhases(index: number) {
    if (index <= 0) {
      setOnDisplay(phases[phases.length - 1]);
    } else {
      setOnDisplay(phases[index - 1]);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 gap-x-8 items-center pb-40">
      <div className="col-span-1">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-end gap-x-6">
          <div className="mt-32">
            <div className="relative flex items-center justify-center w-96 h-96 z-0">
              <div className="absolute w-48 h-48 rounded-full  " />
              {phases.map((phase, index) => (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOnDisplay(phase);
                  }}
                  key={index}
                  className={`absolute w-32 h-32 rounded-full flex items-center justify-center ${
                    onDisplay.name == phase.name ? "bg-slate-300" : phase.color
                  } ${
                    onDisplay.name == phase.name
                      ? "text-slate-800"
                      : "text-white"
                  } font-semibold cursor-pointer transition ease-in-out delay-100 hover:w-36 hover:h-36 ${
                    onDisplay.name == phase.name && "w-36 h-36"
                  } hover:bg-slate-300 hover:text-slate-800 duration-300 shadow`}
                  style={{
                    transform: `rotate(${
                      (360 / phases.length) * index
                    }deg) translate(12rem) rotate(-${
                      (360 / phases.length) * index
                    }deg)`,
                  }}
                >
                  <div className="text-base">{phase.name}</div>
                </button>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col justify-between z-20 bg-black/20 max-w-1/2  h-96 rounded-md py-12 backdrop-blur-sm intersect:animate-fade-left animate-once animate-ease-out">
            <div>
              <h1 className="font-bold text-2xl px-6">{onDisplay.name}</h1>
              <p className="text-base text-justify px-6 py-6 ">
                {onDisplay.description}
              </p>
            </div>
            <div className="fixed bottom-10 right-0 left-0 flex justify-center gap-6 mt-12">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  previousPhases(phases.indexOf(onDisplay));
                }}
              >
                <FontAwesomeIcon
                  className="text-2xl hover:text-slate-300 text-lime-200"
                  icon={faArrowAltCircleLeft}
                />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  nextPhase(phases.indexOf(onDisplay));
                }}
              >
                <FontAwesomeIcon
                  className="text-2xl hover:text-slate-300 text-lime-200"
                  icon={faArrowAltCircleRight}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDLCInfographic;
