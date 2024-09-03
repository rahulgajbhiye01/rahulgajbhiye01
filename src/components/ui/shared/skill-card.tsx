import DynamicIcon from "@/components/ui/icon";

//Interface Import
import { ISkill } from "@/constants/types";

interface Props {
  skillData: ISkill;
}

const SkillCard = ({ skillData }: Props) => {
  return (
    <li
      key={skillData.name}
      className="border-2 border-solid px-1 py-0.5 text-base shadow-md"
    >
      <div className="flex flex-row items-center justify-center gap-1">
        <DynamicIcon iconName={skillData.icon} className="size-5" />
        {skillData.name}
      </div>
    </li>
  );
};

export default SkillCard;
