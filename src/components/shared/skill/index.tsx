import SkillCard from "@/components/ui/shared/skill-card";
import { ISkill } from "@/constants/types";
import React from "react";

type Props = {
  skillsData: ISkill[];
};

const Skill = ({ skillsData }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <ul className="flex flex-wrap gap-1">
        {skillsData.map((skillData) => (
          <React.Fragment key={skillData.id}>
            <SkillCard skillData={skillData} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
