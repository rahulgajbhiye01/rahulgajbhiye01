import { Domain, domainOrder, Skills } from "@/constants/tech";
import { useMemo } from "react";
import { Code2 } from "lucide-react";

const SkillCard = ({ skillsData }: { skillsData: Skills[] }) => {
  const domainsData = useMemo(() => {
    const map: Record<Domain, string[]> = {} as Record<Domain, string[]>;

    skillsData.forEach((skill) => {
      skill.domain.forEach((d) => {
        if (!map[d]) map[d] = [];
        map[d].push(skill.skill);
      });
    });

    // Return sorted by domainOrder
    return domainOrder
      .filter((d) => map[d]) // only keep domains that exist in data
      .map((d) => ({ domain: d, skills: map[d] }));
  }, [skillsData]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {domainsData.map((domainData) => (
        <div
          key={domainData.domain}
          className="group border-border/50 bg-card/50 relative overflow-hidden rounded-xl border transition-all duration-300 hover:border-green-400/30 hover:bg-green-500/5 hover:shadow-md"
        >
          {/* Domain Header */}
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-green-400" />
                <h3 className="text-foreground font-mono text-sm font-semibold">
                  {domainData.domain}
                </h3>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-1.5">
              {domainData.skills.map((skill) => (
                <span
                  key={skill}
                  className="border-border/30 bg-muted/50 text-muted-foreground inline-block rounded-md border px-2 py-1 font-mono text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
