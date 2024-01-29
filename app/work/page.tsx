import Card from "@/components/card";
import workData from "@/components/constants/workSet";

export default function Work() {
  return (
    <div className="grid auto-rows-min gap-4 lg:col-start-1 lg:col-end-13 xl:grid-cols-3 2xl:grid-cols-4">
      {workData.map((item) => {
        return (
          <Card
            key={item.name}
            name={item.name}
            icon={item.icon}
            description={item.discription}
            github={item.github}
            link={item.link}
          />
        );
      })}
    </div>
  );
}
