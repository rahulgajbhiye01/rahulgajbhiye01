"use client";

import { Domain, domainOrder, Skills } from "@/constants/tech";
import { useMemo, useState } from "react";
import { Code2 } from "lucide-react";

const SkillCard = ({ skillsData }: { skillsData: Skills[] }) => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
          className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
            selectedDomain === domainData.domain
              ? "border-green-400/50 bg-green-500/10 shadow-lg shadow-green-500/20"
              : "border-border/50 bg-card/50 hover:border-green-400/30 hover:bg-green-500/5 hover:shadow-md"
          }`}
        >
          {/* Domain Header */}
          <div className="cursor-pointer p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-green-400" />
                <h3 className="text-foreground font-mono text-sm font-semibold">
                  {domainData.domain}
                </h3>
              </div>
              <span className="text-muted-foreground text-xs">
                {domainData.skills.length}
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-1.5">
              {domainData.skills.map((skill) => (
                <button
                  key={skill}
                  className={`inline-block cursor-pointer rounded-md border px-2 py-1 font-mono text-xs transition-all duration-200 ${
                    selectedSkill === skill
                      ? "border-green-400/50 bg-green-500/20 text-green-300 shadow-sm"
                      : "border-border/30 bg-muted/50 text-muted-foreground hover:border-green-400/40 hover:bg-green-500/10 hover:text-green-300"
                  }`}
                >
                  {skill}
                </button>
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
