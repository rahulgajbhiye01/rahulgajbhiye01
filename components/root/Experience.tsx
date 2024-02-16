"use client";

import SectionBase from "../sectionBase";
import experienceData from "@/constants/experienceData";
import ExperienceCard from "../experienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Experience = () => {
  return (
    <SectionBase
      imageSrc="experience"
      imageAlt="experience"
      sectionName="Experience"
      sectionClass="xl:h-screen xl:snap-start"
      divClass="py-20 md:flex-row-reverse"
      imageDivClass="md:w-5/12"
      dataDivClass="md:w-6/12"
    >
      <Carousel className="w-11/12">
        <CarouselPrevious className="hidden md:flex" />
        <CarouselContent className="py-2 xl:ml-0">
          {experienceData.map((item) => (
            <CarouselItem key={item.position} className="basis-auto">
              <ExperienceCard
                position={item.position}
                company={item.company}
                timeline={item.timeline}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </SectionBase>
  );
};

export default Experience;
