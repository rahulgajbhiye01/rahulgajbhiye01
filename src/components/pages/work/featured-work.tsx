import WorkCard from "@/components/ui/work-card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//Interface Import
import { IProject } from "@/types";
interface Props {
  workData: IProject[];
}

const FeaturedWork = ({ workData }: Props) => {
  return (
    <div className="grid w-full grid-flow-row items-center justify-center md:grid-flow-col md:grid-cols-12">
      <span className="text-center font-mono text-2xl md:col-span-1 md:-rotate-90 md:text-4xl">
        Featured Work
      </span>
      <Carousel className="md:col-start-3 md:col-end-12">
        <CarouselPrevious className="-left-10" />
        <CarouselContent className="w-80 py-4 md:w-11/12">
          {workData.map((item) => (
            <CarouselItem
              key={item.title}
              className="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
            >
              <WorkCard workData={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-10" />
      </Carousel>
    </div>
  );
};

export default FeaturedWork;
