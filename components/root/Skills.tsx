"use client";

import Skill from "@/components/skill";
import SectionBase from "../sectionBase";

const Skills = () => {
  return (
    <SectionBase
      imageSrc="skills"
      imageAlt="skills"
      sectionName="Tech Stack"
      sectionClass="xl:h-screen xl:snap-start"
      divClass="py-20 md:flex-row"
      imageDivClass="md:w-5/12"
      dataDivClass="md:w-6/12"
    >
      <div className="grid auto-rows-min gap-2 md:grid-cols-2">
        <Skill scope="LANGUAGES" />
        <Skill scope="FRAMEWORKS / LIBRARIES" />
        <Skill scope="DATABASES" />
        <Skill scope="CLOUD / DEVOPS" />
        <Skill scope="TOOLS" />
      </div>
    </SectionBase>
  );
};

export default Skills;
