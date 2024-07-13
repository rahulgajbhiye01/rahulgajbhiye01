import SocialEditor from "@/components/pages/dashboard/social";
import Social from "@/components/pages/social";
import { getSocialsData } from "@/lib/db/db-helper";

export default async function DashboardSocial() {
  const socialData = await getSocialsData();
  return (
    <>
      <SocialEditor />
      <Social socialData={socialData} />
    </>
  );
}
