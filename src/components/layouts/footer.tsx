import Link from "next/link";
import SocialCard from "@/components/ui/social-card";
import Title from "@/components/ui/title";

import { ISocial } from "@/types";

type Props = {
  socialData: ISocial[];
};

const Footer = ({ socialData }: Props) => {
  const date = new Date().getFullYear();
  return (
    <footer className="dark mt-24 flex justify-center bg-background text-foreground shadow-sm drop-shadow">
      <div className="mt-8 flex h-72 w-11/12 flex-col justify-between py-4 md:w-7/12">
        <div className="text-center text-3xl font-bold md:text-4xl xl:text-6xl">
          a developer you need.
        </div>
        <div className="h-0.5 w-full bg-foreground"></div>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-row items-center justify-center gap-4">
            <Link href="/">
              <Title />
            </Link>
            <Link href="/work" className="hoverline text-base font-medium">
              Work
            </Link>
            <Link href="/blog" className="hoverline text-base font-medium">
              Blog
            </Link>
          </div>
          <div className="grid w-min grid-flow-col gap-4 text-right md:gap-8">
            <SocialCard
              socialData={socialData}
              variant="contact"
              name="Github"
            />
            <SocialCard
              socialData={socialData}
              variant="contact"
              name="LinkedIn"
            />
            <SocialCard
              socialData={socialData}
              variant="contact"
              name="Twitter"
            />
            <SocialCard
              socialData={socialData}
              variant="contact"
              name="Resume"
            />
          </div>
        </div>
        <div className="text-right text-xs font-light">
          <span>©{date} Rahul Gajbhiye</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
