import { getSite } from "@/lib/site";

export async function CurrentlyList() {
  const { currently } = await getSite();

  if (currently.length === 0) {
    return (
      <p className="text-sm leading-7 text-muted">
        Update the Currently list in content/_site.md.
      </p>
    );
  }

  return (
    <dl className="divide-y divide-border border-y border-border">
      {currently.map((item) => (
        <div
          key={item.label}
          className="grid gap-2 py-4 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-x-8 lg:py-5"
        >
          <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
            {item.label}
          </dt>
          <dd className="text-[0.98rem] leading-7 text-foreground">
            {item.text}
          </dd>
        </div>
      ))}
    </dl>
  );
}
