import SocialsEditor from "@/components/pages/dashboard/socials";
import Social from "@/components/ui/social";
import { getSocialsData } from "@/lib/db/db-helper";

type Props = {};

export default async function DashboardSocials(props: Props) {
  const socialsData = await getSocialsData();
  return (
    <>
      <SocialsEditor />
      <div className="grid auto-rows-min gap-2 text-center">
        <span className="text-xl">Socials</span>
        <Social socialsData={socialsData} variant="home" name="Github" />
        <Social socialsData={socialsData} variant="home" name="LinkedIn" />
        <Social socialsData={socialsData} variant="home" name="Twitter" />
        <Social socialsData={socialsData} variant="home" name="Resume" />
      </div>
    </>
  );
}
