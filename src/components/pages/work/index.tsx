import Project from "@/components/shared/project";
import Skill from "@/components/shared/skill";
import { IProject, ISkill } from "@/constants/types";

interface Props {
  worksData: {
    skillsData: ISkill[];
    projectsData: IProject[];
  };
}

const Work = ({ worksData }: Props) => {
  const { skillsData, projectsData } = worksData;
  return (
    <div className="flex w-11/12 flex-col gap-8 md:w-7/12 ">
      <h1 className="text-2xl">
        A versatile technologist creating projects across web, mobile, desktop,
        cloud, and IoT platforms.
      </h1>
      <Skill skillsData={skillsData} />
      <div className="flex flex-col gap-4">
        <span>List of all my projects.</span>
        <Project projectsData={projectsData} />
      </div>
    </div>
  );
};

export default Work;
