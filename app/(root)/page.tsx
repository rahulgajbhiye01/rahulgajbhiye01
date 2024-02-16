import Home from "@/components/root/Home";
import Experience from "@/components/root/Experience";
import FeaturedProjects from "@/components/root/FeaturedProjects";
import Skills from "@/components/root/Skills";
import LetsConnect from "@/components/root/LetsConnect";

export default function Root() {
  return (
    <>
      <Home />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <LetsConnect />
    </>
  );
}
