import Work from "@/components/pages/work";
import { getWorksData } from "@/lib/db/db-helper";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const workData = await getWorksData();
  return <Work workData={workData} />;
}
