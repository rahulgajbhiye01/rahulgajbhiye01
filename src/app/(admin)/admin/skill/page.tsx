import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/ui/loading";

import SkillEditor from "@/components/pages/admin/skill";
import Skill from "@/components/shared/skill";

export default async function DashboardSkill() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/skill`,
    );

    if (response.status === 200) {
      const skillsData = await response.json();
      return (
        <Suspense fallback={<Loading />}>
          <SkillEditor />
          <Skill skillsData={skillsData} />
        </Suspense>
      );
    } else {
      notFound();
    }
  } catch (error) {
    console.error("Error fetching skill:", error);
    notFound();
  }
}
