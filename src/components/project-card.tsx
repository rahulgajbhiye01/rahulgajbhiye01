import type { ComponentPropsWithoutRef } from "react";

import { TagList } from "@/components/tag-list";

type ProjectCardProps = ComponentPropsWithoutRef<"article"> & {
  title: string;
  summary: string;
  tags: readonly string[];
  githubUrl: string;
  demoUrl?: string;
  architectureUrl?: string;
};

type ProjectLinkProps = {
  href: string;
  children: string;
};

function ProjectLink({ href, children }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm font-medium text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function ProjectCard({
  title,
  summary,
  tags,
  githubUrl,
  demoUrl,
  architectureUrl,
  className,
  ...props
}: ProjectCardProps) {
  return (
    <article
      className={`rounded-lg border border-border bg-background p-6 shadow-sm ${className ?? ""}`}
      {...props}
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="text-sm leading-6 text-muted">{summary}</p>
      </div>

      <TagList tags={tags} label={`${title} technologies`} />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5">
        <ProjectLink href={githubUrl}>GitHub</ProjectLink>
        {demoUrl ? <ProjectLink href={demoUrl}>Demo</ProjectLink> : null}
        {architectureUrl ? <ProjectLink href={architectureUrl}>Architecture</ProjectLink> : null}
      </div>
    </article>
  );
}
