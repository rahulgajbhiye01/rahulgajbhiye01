import { ContentEmptyState } from "@/components/content-empty-state";
import { PageIntro } from "@/components/page-intro";
import { ProjectCard } from "@/components/project-card";
import { PageShell } from "@/components/page-shell";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <PageShell>
      <section aria-labelledby="projects-title">
        <PageIntro
          eyebrow="Selected work"
          title="Projects"
          description="A selection of infrastructure, automation, and platform work."
          titleId="projects-title"
        />

        {projects.length ? (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                summary={project.summary}
                tags={project.tags}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                architectureUrl={project.architectureUrl}
              />
            ))}
          </div>
        ) : (
          <ContentEmptyState>Projects will appear here soon.</ContentEmptyState>
        )}
      </section>
    </PageShell>
  );
}
