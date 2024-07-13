import { getWorksData } from "@/lib/db/db-helper";
import WorkEditor from "@/components/pages/dashboard/work";
import Work from "@/components/pages/work";

export default async function DashboardWork() {
  const workData = await getWorksData();
  return (
    <>
      <WorkEditor />
      <Work workData={workData} />
    </>
  );
}
