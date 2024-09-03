import React from "react";
import ProjectCard from "@/components/ui/shared/project-card";
import { IProject } from "@/constants/types";

type Props = {
  projectsData: IProject[];
};

const Project = ({ projectsData }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((projectData) => (
        <React.Fragment key={projectData.id}>
          <ProjectCard projectData={projectData} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Project;
