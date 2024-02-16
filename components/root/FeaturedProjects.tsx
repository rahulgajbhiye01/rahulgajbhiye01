"use client";
import ProjectCard from "@/components/projectCard";
import projectData from "@/constants/projectData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedProjects = () => {
  return (
    <section className="flex items-center justify-center md:h-auto xl:h-screen xl:snap-start">
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 md:py-20">
        <p className="text-center text-4xl italic lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Featured Projects
        </p>
        <div className="flex w-full flex-col items-center justify-center">
          <Carousel className="w-full">
            <CarouselPrevious className="hidden md:flex" />
            <CarouselContent className="py-8 xl:ml-0">
              {projectData.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <ProjectCard
                    name={item.name}
                    description={item.discription}
                    github={item.github}
                    link={item.link}
                    techstack={item.techstack}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <span className="font-light italic">Swipe Right -{">"}</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
