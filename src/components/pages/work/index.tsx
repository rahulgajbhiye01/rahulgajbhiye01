import WorkCard from "@/components/ui/work-card";

import { IProject } from "@/types";

interface Props {
  workData: IProject[];
}

const Work = ({ workData }: Props) => {
  return (
    <div className="w-11/12 md:w-7/12">
      <div className="grid grid-flow-row items-center gap-4 md:grid-flow-col md:grid-cols-2 2xl:grid-cols-3">
        {workData.map((item) => (
          <div key={item.id} className="size-full">
            <WorkCard workData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
