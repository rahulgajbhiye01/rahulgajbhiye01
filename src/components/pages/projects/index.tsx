import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-foreground">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#4cc9f0] via-[#f72585] to-[#7209b7] bg-clip-text text-transparent">
        Projects & Builds
      </h1>
      <p className="mb-10 text-muted-foreground">
        A curated collection of things I&apos;ve built – from full-stack apps to
        helpful developer tools.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-white/10 bg-card p-6 transition-all hover:shadow-lg hover:shadow-[#4cc9f055] backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-white group-hover:text-[#4cc9f0]">
                {project.title}
              </h2>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="text-muted-foreground hover:text-accent"
                >
                  <FaGithub className="text-lg" />
                </Link>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#4cc9f015] px-3 py-1 text-[#4cc9f0] border border-[#4cc9f055]"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-sm text-accent hover:underline"
              >
                View Project →
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
