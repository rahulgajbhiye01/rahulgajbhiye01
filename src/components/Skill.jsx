import { SkillsData } from "@constants";

const Skill = ({ scope }) => {
  const color = [
    "border-red-500",
    "border-orange-500",
    "border-rose-500",
    "border-indigo-500",
    "border-amber-500",
    "border-yellow-500",
    "border-emerald-500",
    "border-sky-500",
    "border-fuchsia-500",
    "border-pink-500",
    "border-teal-500",
    "border-cyan-500",
  ];

  return (
    <>
      <h1 className="text-2xl font-bold">{scope}</h1>
      <div className="m-4 flex flex-wrap items-center justify-center gap-4">
        {SkillsData.filter((skill) => {
          return skill.scope === scope;
        }).map((filteredSkill) => {
          const randomColor = Math.floor(Math.random() * color.length);
          return (
            <span
              key={filteredSkill.tech}
              className={`border-b-2 border-solid bg-neutral-900 px-4 ${color[randomColor]} text-lg`}
            >
              {filteredSkill.tech}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Skill;
