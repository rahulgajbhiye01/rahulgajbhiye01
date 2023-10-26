import { WorksData } from "@constants";

const Work = ({ scope }) => {
  return (
    <div className="m-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {WorksData.filter((work) => {
        return work.scope === scope;
      }).map((Work) => {
        return (
          <a
            key={Work.project_name}
            href={Work.project_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col gap-3 overflow-hidden rounded-xl bg-neutral-950">
              <img src={Work.img} />
              <div className="flex flex-col flex-wrap px-4 py-2">
                <div className="py-2 text-start text-xl font-bold">
                  {Work.project_name}
                </div>
                <p className="py-2 text-start text-base">{Work.details}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Work;
