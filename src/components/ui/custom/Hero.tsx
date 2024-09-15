import Title from "./Title";
import ParallaxImage from "./ParallaxImage";
import HomeNavbar from "@/components/layouts/HomeNavbar";

const Hero = () => {
  return (
    <section className="grid h-screen md:grid-cols-2">
      <div className="flex flex-col items-center">
        <HomeNavbar />
        <div className="flex grow flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="text-xl font-bold md:text-4xl">hello, my name is</h1>
            <Title classStyle="text-5xl font-extrabold md:text-8xl" />
            <span className="italic md:text-2xl">
              I am a full-stack developer.
            </span>
          </div>
        </div>
      </div>
      <ParallaxImage />
    </section>
  );
};

export default Hero;
