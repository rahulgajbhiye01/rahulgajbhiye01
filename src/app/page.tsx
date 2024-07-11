import Home from "@/components/pages/home";
import FeaturedProjectsSkills from "@/components/pages/home/featured-projects-skills";
import About from "@/components/pages/home/about";

import {
  getSkillsData,
  getProjectsData,
  getSocialsData,
} from "@/lib/db/db-helper";

export default async function Root() {
  const skillData = await getSkillsData();
  const projectData = await getProjectsData();
  const socialsData = await getSocialsData();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Home socialsData={socialsData} />
      {/* Featured Projects */}
      <FeaturedProjectsSkills projectData={projectData} skillData={skillData} />
      {/* About */}
      {/* <About /> */}
    </div>
  );
}
