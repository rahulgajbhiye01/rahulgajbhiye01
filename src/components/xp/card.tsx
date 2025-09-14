import React from "react";

type Props = {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
};

const XpCard = ({ experienceData }: { experienceData: Props }) => {
  return (
    <div key={experienceData.title} className="bg-card rounded-lg p-6">
      <div className="mb-4 flex flex-col items-baseline justify-center">
        <span className="bg-gradient-to-r from-[#4cc9f0] via-[#4cc9f0] to-[#f72585] bg-clip-text text-xl font-semibold text-transparent">
          {experienceData.title}
        </span>
        <span className="text-md italic">{experienceData.company}</span>
        <div className="flex flex-row items-center gap-2">
          <span className="text-accent text-xs italic">
            {experienceData.location}
          </span>
          <span>/</span>
          <span className="text-accent text-xs italic">
            {experienceData.duration}
          </span>
        </div>
      </div>

      <ul className="text-foreground list-disc space-y-1 pl-3">
        {experienceData.responsibilities.map((task, idx) => (
          <li key={idx} className="text-sm">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default XpCard;
