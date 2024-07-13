import { FaGithub, FaLink } from "react-icons/fa6";
import { DynamicIcon } from "@/components/ui/icon";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { IProject } from "@/types";

type Props = {
  workData: IProject;
};

const WorkCard = ({ workData }: Props) => {
  return (
    <Card className="flex size-full flex-col justify-between rounded-none border-2 border-solid">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <span className="text-lg">{workData.title}</span>
          <div className="flex flex-row items-center gap-4">
            <Link
              href={workData.github}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href={workData.link}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLink className="size-6" />
            </Link>
          </div>
        </CardTitle>
        <CardDescription className="text-base font-normal">
          {workData.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-1 overflow-hidden">
        {workData.techstack.map((item: any) => {
          return (
            <div key={item.id} className="border-2 border-solid p-1">
              <DynamicIcon iconName={item.icon} className="size-6" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default WorkCard;
