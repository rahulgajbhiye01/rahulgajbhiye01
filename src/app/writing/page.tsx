import { ContentEmptyState } from "@/components/content-empty-state";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { TagList } from "@/components/tag-list";
import { getPosts } from "@/lib/posts";

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <PageShell>
      <section aria-labelledby="writing-title">
        <PageIntro
          eyebrow="Notes and essays"
          title="Writing"
          description="Thoughts on infrastructure, reliable systems, and the work around them."
          titleId="writing-title"
        />

        {posts.length ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-lg border border-border p-6 transition-colors hover:border-muted">
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
                  <span>{post.readingTime}</span>
                  {post.date ? <time dateTime={post.date}>{post.date}</time> : null}
                </div>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{post.description}</p>
                <TagList tags={post.tags} label={`${post.title} topics`} />
              </article>
            ))}
          </div>
        ) : (
          <ContentEmptyState>Writing will appear here soon.</ContentEmptyState>
        )}
      </section>
    </PageShell>
  );
}
