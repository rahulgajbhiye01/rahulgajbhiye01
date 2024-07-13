import SocialCard from "@/components/ui/social-card";
import { ISocial } from "@/types";

interface Props {
  socialData: ISocial[];
}

const Social = ({ socialData }: Props) => {
  return (
    <div className="grid w-10/12 grid-flow-row gap-4 p-4 md:w-8/12 md:grid-cols-3">
      {socialData.map((item) => (
        <div key={item.id}>
          <SocialCard socialData={socialData} name={item.name} variant="home" />
        </div>
      ))}
    </div>
  );
};
export default Social;
