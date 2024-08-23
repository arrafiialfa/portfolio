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
const Timeline = () => {
  return (
    <div className="flex flex-col relative ml-5">
      {events.map((event, index) => (
        <div className="flex items-start relative mb-5" key={index}>
          <div className="absolute -left-7 top-2 w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="flex items-center">
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-12 h-12 rounded mr-4"
              />
            )}
            <div className="max-w-md">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
    </div>
  );
};

export default Timeline;
