import { Skill } from "@components";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-8 text-center md:w-4/5 lg:w-3/4">
        <h1 className="mb-4 text-2xl text-slate-400">Skills I have</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-md bg-neutral-800 p-4">
            <Skill scope={"Frontend"} />
          </div>
          <div className="rounded-md bg-neutral-800 p-4">
            <Skill scope={"Backend"} />
          </div>
          <div className="rounded-md bg-neutral-800 p-4">
            <Skill scope={"Database"} />
          </div>
          <div className="rounded-md bg-neutral-800 p-4">
            <Skill scope={"DevOps"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
