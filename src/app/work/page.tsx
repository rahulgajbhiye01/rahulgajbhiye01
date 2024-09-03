import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/ui/loading";

import Work from "@/components/pages/work";

export default async function WorkPage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/work`,
    );

    if (response.status === 200) {
      const worksData = await response.json();
      return (
        <Suspense fallback={<Loading />}>
          <Work worksData={worksData} />
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
