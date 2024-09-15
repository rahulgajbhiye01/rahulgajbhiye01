import React from "react";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

import { IProject } from "@/constants/types";
import DynamicIcon from "@/components/ui/custom/DynamicIcon";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Props = {
  projectsData: IProject[];
};

const Projects = ({ projectsData }: Props) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {projectsData.length > 0 &&
        projectsData.map((projectData) => (
          <React.Fragment key={projectData.id}>
            <Card className="flex size-full flex-col rounded-none border-2 border-solid">
              <CardHeader>
                <CardTitle className="flex flex-row justify-between">
                  <span className="text-xl">{projectData.title}</span>
                  <div className="flex flex-row items-center gap-4">
                    <Link
                      href={projectData.github}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FaGithub className="size-6" />
                    </Link>
                    <Link
                      href={projectData.link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                    >
                      <FaLink className="size-6" />
                    </Link>
                  </div>
                </CardTitle>
                <CardDescription className="text-base font-normal">
                  {projectData.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-1 overflow-hidden">
                {projectData.techStack.length > 0 &&
                  projectData.techStack.map((item) => {
                    return (
                      <div key={item.id} className="border-2 border-solid p-1">
                        <DynamicIcon iconName={item.icon} className="size-6" />
                      </div>
                    );
                  })}
              </CardContent>
            </Card>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Projects;
