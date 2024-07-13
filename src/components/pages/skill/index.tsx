import SkillCard from "@/components/ui/skill-card";
import { ISkill } from "@/types";

type Props = {
  skillData: ISkill[];
};

const Skill = ({ skillData }: Props) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="grid w-full grid-flow-row items-center justify-center md:grid-flow-col md:grid-cols-12">
        <span className="text-center font-mono text-2xl md:col-span-1 md:-rotate-90 md:text-4xl">
          Tech Stack
        </span>
        <div className="grid grid-flow-row text-center md:col-start-3 md:col-end-12 md:grid-cols-3 2xl:grid-cols-5">
          <SkillCard skill={skillData} scope="LANGUAGES" />
          <SkillCard skill={skillData} scope="FRAMEWORKS / LIBRARIES" />
          <SkillCard skill={skillData} scope="DATABASES" />
          <SkillCard skill={skillData} scope="CLOUD / DEVOPS" />
          <SkillCard skill={skillData} scope="TOOLS" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
