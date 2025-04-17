import React from "react";

import DynamicIcon from "@/components/ui/custom/DynamicIcon";
import { ISkill } from "@/constants/types";

type Props = {
  skillsData: ISkill[];
};

const Skills = ({ skillsData }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <ul className="flex flex-wrap gap-1">
        {skillsData.map((skillData) => (
          <React.Fragment key={skillData.id}>
            <li
              key={skillData.name}
              className="border-2 border-solid px-1 py-0.5 text-base shadow-md"
            >
              <div className="flex flex-row items-center justify-center gap-1">
                <DynamicIcon iconName={skillData.icon} className="size-5" />
                {skillData.name}
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
