import Home from "@/components/pages/home";
import Skill from "@/components/pages/skill";
import About from "@/components/pages/about";
import FeaturedWork from "@/components/pages/work/featured-work";
import { getSkillsData, getWorksData } from "@/lib/db/db-helper";

export const dynamic = "force-dynamic";

export default async function Root() {
  const skillData = await getSkillsData();
  const workData = await getWorksData();

  return (
    <section className="flex min-h-custom w-full flex-col justify-center gap-32 px-2">
      {/* Home */}
      <Home />
      {/* Featured Work */}
      <FeaturedWork workData={workData} />
      {/* Skill */}
      <Skill skillData={skillData} />
      {/* About */}
      {/* <About /> */}
    </section>
  );
}
