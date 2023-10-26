import { AboutHero, Skills } from "@containers";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center px-4 py-10 text-center md:h-screen"
    >
      <AboutHero />
      <Skills />
    </section>
  );
};

export default About;
