import Projects from "@/components/ui/custom/Projects";
import Skills from "@/components/ui/custom/Skills";
import Experience from "@/components/ui/custom/Experience";
import { IProject, ISkill } from "@/constants/types";
import Hero from "@/components/ui/custom/Hero";
import HomeFooter from "@/components/layouts/HomeFooter";

interface Props {
  worksData: {
    skillsData: ISkill[];
    projectsData: IProject[];
  };
}

const Home = ({ worksData }: Props) => {
  const { skillsData, projectsData } = worksData;
  return (
    <>
      <Hero />

      <section className="flex min-h-screen flex-col items-center pt-20 md:pt-36">
        <div className="flex w-11/12 flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-2xl">
              A versatile technologist creating projects across multiple
              platforms.
            </span>
            <Skills skillsData={skillsData} />
          </div>

          <div className="flex flex-col gap-4">
            <span>List of all my projects.</span>
            <Projects projectsData={projectsData} />
          </div>
        </div>
      </section>

      <section className="h-screen">
        <Experience />
      </section>

      <HomeFooter />
    </>
  );
};

export default Home;
