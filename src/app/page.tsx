import { db } from "@/lib/db";
import Home from "@/components/pages/home";

export default async function Root() {
  const projectsData = await db.project.findMany({
    include: {
      techStack: true,
    },
  });
  const skillsData = await db.skill.findMany();

  const worksData = {
    skillsData: skillsData,
    projectsData: projectsData,
  };
  return (
    <main className="dark flex min-h-screen w-full flex-col justify-center bg-background text-foreground">
      <Home worksData={worksData} />
    </main>
  );
}
