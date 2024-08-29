import React from "react";

const phases = [
  { name: "Planning", color: "bg-blue-500" },
  { name: "Analysis", color: "bg-green-500" },
  { name: "Design", color: "bg-yellow-500" },
  { name: "Implementation", color: "bg-red-500" },
  { name: "Testing", color: "bg-purple-500" },
  { name: "Deployment", color: "bg-indigo-500" },
  { name: "Maintenance", color: "bg-pink-500" },
];

const SDLCInfographic: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-96 h-96 z-0">
      <div className="absolute w-48 h-48 rounded-full border-4 border-gray-300 animate-spin-slow" />
      {phases.map((phase, index) => (
        <div
          key={index}
          className={`absolute w-24 h-24 rounded-full flex items-center justify-center ${phase.color} text-white`}
          style={{
            transform: `rotate(${
              (360 / phases.length) * index
            }deg) translate(8rem) rotate(-${(360 / phases.length) * index}deg)`,
          }}
        >
          {phase.name}
        </div>
      ))}
    </div>
  );
};

export default SDLCInfographic;
