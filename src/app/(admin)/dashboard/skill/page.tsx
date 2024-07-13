import Skill from "@/components/pages/skill";
import { getSkillsData } from "@/lib/db/db-helper";
import SkillEditor from "@/components/pages/dashboard/skill";

export default async function DashboardSkill() {
  const skillData = await getSkillsData();
  return (
    <>
      <SkillEditor />
      <Skill skillData={skillData} />
    </>
  );
}
