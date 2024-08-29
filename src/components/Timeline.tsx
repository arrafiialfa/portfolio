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
const Timeline = ({
  experiences,
  bannerClassName,
}: {
  experiences: IExperience[];
  bannerClassName?: string;
}) => {
  return (
    <div className="flex flex-col relative ml-5 gap-y-10">
      {experiences.map((experience) => (
        <div
          className="grid grid-cols-4 gap-8 items-center relative mb-5"
          key={experience.id}
        >
          <div className=" col-span-1 p-4">{experience.timeline}</div>
          <div className=" col-span-3 ">
            <div className="px-4 py-6 shadow-md">
              <div
                className={"p-6 bg-brandBlue rounded-t-md " + bannerClassName}
              >
                <h3 className="text-lg font-semibold ">
                  {experience.position}
                </h3>
                <p className="text-lg">{experience.company}</p>
              </div>
              {/* <div className="w-full h-96 rounded bg-white" /> */}
              <ul>
                {experience.description.map((desc) => {
                  return (
                    <li key={desc} className="text-base mt-1 text-justify">
                      {desc}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
