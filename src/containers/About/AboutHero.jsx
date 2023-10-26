import { Pic } from "@components";
const AboutHero = () => {
  return (
    <>
      <div className="m-4 mb-12 flex flex-col items-center justify-center gap-2 text-center md:w-3/4 md:flex-row md:text-start lg:w-1/2">
        <Pic />
        <div>
          <h1 className="text-4xl">Rahul Gajbhiye.</h1>
          <h2 className="text-2xl">A developer from India.</h2>
          <br />
          <p className="text-xl">
            I&apos;m full-stack developer, who loves create user-friendly
            products that simplify life. From design to development, I&apos;m
            all about making technology work for you. Solving problems with code
            and design is my calling. I&apos;m dedicated to improving lives
            through tech by crafting seamless digital experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
