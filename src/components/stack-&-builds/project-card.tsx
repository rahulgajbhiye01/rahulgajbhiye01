import React from "react";
import Link from "next/link";
import { FaGithub, FaCog, FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  projectData,
}: {
  projectData: {
    title: string;
    description: string;
    tech: string[];
    domain: string[];
    link: string;
    github: string;
  };
}) => {
  return (
    <div
      key={projectData.link}
      className="group bg-card flex flex-col justify-between gap-1 rounded-2xl border border-white/10 p-6 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-[#4cc9f055]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-white group-hover:text-[#4cc9f0]">
            {projectData.title}
          </h2>

          <p className="text-muted-foreground mb-4 text-sm">
            {projectData.description}
          </p>
        </div>
        <div className="flex flex-col sm:items-end">
          {/* Tech Stack Section */}
          {projectData.tech.length > 0 && (
            <div className="mb-3">
              <div className="mb-2 flex items-center gap-2 sm:flex-row-reverse">
                <FaCog className="text-sm text-[#4cc9f0]" />
                <span className="text-xs font-medium tracking-wider text-[#4cc9f0] uppercase">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:flex-row-reverse">
                {projectData.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-[#4cc9f0]/30 bg-gradient-to-r from-[#4cc9f0]/20 to-[#4cc9f0]/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#4cc9f0]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Domain Section */}
          {projectData.domain.length > 0 && (
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-2 sm:flex-row-reverse">
                <FaGlobe className="text-sm text-[#f72585]" />
                <span className="text-xs font-medium tracking-wider text-[#f72585] uppercase">
                  Domain
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:flex-row-reverse">
                {projectData.domain.map((domain, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-[#f72585]/30 bg-gradient-to-r from-[#f72585]/20 to-[#f72585]/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#f72585]/20"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row justify-between">
        {projectData.link && (
          <Link
            href={projectData.link}
            target="_blank"
            className="inline-block bg-gradient-to-r from-[#4cc9f0] via-[#4cc9f0] to-[#f72585] bg-clip-text font-semibold text-transparent hover:underline"
          >
            View Project →
          </Link>
        )}

        {projectData.github && (
          <Link
            href={projectData.github}
            target="_blank"
            className="text-muted-foreground hover:text-accent"
          >
            <FaGithub className="text-lg" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
