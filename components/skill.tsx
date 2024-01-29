import { skillData, color } from "@/components/constants/skillSet";

type skillProps = {
  scope: string;
};

const Skill: React.FC<skillProps> = (props) => {
  const { scope } = props;
  return (
    <div className="p-4">
      <h1 className="text-lg font-medium xl:text-xl 2xl:text-2xl">{scope}</h1>
      <ul className="flex flex-wrap items-center justify-center gap-4 p-4">
        {skillData
          .filter((item) => {
            return item.scope === scope;
          })
          .map((filteredItem) => {
            const randomColor = Math.floor(Math.random() * color.length);
            return (
              <li
                key={filteredItem.tech}
                className={`border-2 border-solid bg-transparent px-2 text-lg xl:text-xl 2xl:text-2xl ${color[randomColor]}`}
              >
                {filteredItem.tech}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Skill;
