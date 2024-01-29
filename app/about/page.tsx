import Skill from "@/components/skill";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center lg:col-start-1 lg:col-end-13">
      <p className="text-lg lg:w-6/12 xl:text-xl 2xl:w-5/12 2xl:text-2xl">
        I&apos;m full-stack developer, who loves create user-friendly products
        that simplify life. From design to development, I&apos;m all about
        making technology work for you. Solving problems with code and design is
        my calling. I&apos;m dedicated to improving lives through tech by
        crafting seamless digital experiences.
      </p>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold xl:text-2xl 2xl:text-3xl">Skills</h1>
        <div className="grid auto-rows-min lg:grid-cols-2 xl:grid-cols-3">
          <Skill scope="LANGUAGES" />
          <Skill scope="FRAMEWORKS / LIBRARIES" />
          <Skill scope="DATABASES" />
          <Skill scope="CLOUD / DEVOPS" />
          <Skill scope="TOOLS" />
        </div>
      </div>
    </div>
  );
}
