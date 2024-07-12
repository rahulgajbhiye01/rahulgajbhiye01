import Projects from "@/components/pages/projects";
import { getProjectsData } from "@/lib/db/db-helper";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projectData = await getProjectsData();
  return <Projects projectData={projectData} />;
}
