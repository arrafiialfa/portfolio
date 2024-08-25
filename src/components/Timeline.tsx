import { IExperience } from "@/contents";
import React from "react";
const events = [
  {
    title: "Event 1",
    description: "Description for event 1.",
    image: "https://via.placeholder.com/50",
  },
  {
    title: "Event 2",
    description: "Description for event 2.",
    image: "https://via.placeholder.com/50",
  },
  {
    title: "Event 3",
    description: "Description for event 3.",
    image: "https://via.placeholder.com/50",
  },
];
const Timeline = ({ experiences }: { experiences: IExperience[] }) => {
  return (
    <div className="flex flex-col relative ml-5 gap-y-10">
      {experiences.map((experience) => (
        <div className="flex items-center relative mb-5" key={experience.id}>
          <div className="pl-6 pr-20 ">2019 - 2020</div>
          <div className=" basis-40 grow ">
            <div className="">
              <h3 className="text-lg font-semibold">{experience.position}</h3>
              <div className="w-full h-96 rounded bg-white" />
              <p className="text-sm text-white mt-1 text-justify">
                {experience.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
