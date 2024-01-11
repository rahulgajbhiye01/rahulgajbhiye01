import { Work } from "@components";

const Works = () => {
  return (
    <div
      id="work"
      className="mx-auto flex flex-col items-center justify-center gap-12 p-4 text-center md:w-4/5 xl:w-3/5"
    >
      <div className="">
        <h1 className="text-2xl text-slate-400">Featured Work</h1>
        <Work scope={"Featured"} />
      </div>
      <div className="">
        <h1 className="text-2xl text-slate-400">Other Projects</h1>
        <Work scope={"Other"} />
      </div>
    </div>
  );
};

export default Works;
