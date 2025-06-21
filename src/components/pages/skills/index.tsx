import { skillsData } from "@/constants/skills";
import { Domain } from "@/constants/skills";
import { Code2 } from "lucide-react";

export default function Skills() {
  const domains = Object.values(Domain);

  const skillsByDomain = domains.map((domain) => ({
    domain,
    skills: skillsData.filter((skill) => skill.domain.includes(domain)),
  }));

  return (
    <div className="px-4 py-8" id="skills">
      <h1 className="text-3xl font-bold mb-6 text-center text-foreground">
        🛠️ Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsByDomain.map(({ domain, skills }) => (
          <div
            key={domain}
            className="p-5 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-primary" />
              <h2 className="font-mono text-lg text-foreground">{domain}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.skill}
                  className="inline-block font-mono text-sm text-primary bg-primary-foreground border border-border px-3 py-1 rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-1 hover:shadow-md hover:border-primary"
                >
                  {skill.skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
