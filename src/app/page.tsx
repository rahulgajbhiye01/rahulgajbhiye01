import Hero from "@/components/pages/hero";
import Projects from "@/components/pages/projects";
import Experience from "@/components/pages/experience";
import About from "@/components/pages/about";
import Skills from "@/components/pages/skills";
import Achievement from "@/components/pages/achievements";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center w-full">
      <div className="flex gap-8 flex-col sm:w-9/12 w-11/12">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Achievement />
        <About />
      </div>
    </div>
  );
}
