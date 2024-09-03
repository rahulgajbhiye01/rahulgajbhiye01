import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/ui/loading";

import ProjectEditor from "@/components/pages/admin/project";
import Project from "@/components/shared/project";

export default async function DashboardProject() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/project`,
    );

    if (response.status === 200) {
      const projectsData = await response.json();
      return (
        <Suspense fallback={<Loading />}>
          <ProjectEditor />
          <Project projectsData={projectsData} />
        </Suspense>
      );
    } else {
      notFound();
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    notFound();
  }
}
