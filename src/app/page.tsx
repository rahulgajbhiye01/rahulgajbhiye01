import { CurrentlyList } from "@/components/currently-list";
import { EntryRow } from "@/components/entry-row";
import { SectionHeading } from "@/components/section-heading";
import { entryTypeLabel, getSelectedContentItems } from "@/lib/content";
import { getSite } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rahul Gajbhiye",
  description:
    "Rahul Gajbhiye builds software and writes about engineering, infrastructure, and the systems behind the work.",
  pathname: "/",
});

const elsewhere = [
  { href: "https://www.github.com/rahulgajbhiye01", label: "GitHub" },
  { href: "https://www.x.com/rahulgajbhiye01", label: "X" },
  { href: "https://www.instagram.com/rahulgajbhiye01", label: "Instagram" },
  { href: "https://www.linkedin.com/in/rahulgajbhiye01", label: "LinkedIn" },
  { href: "https://www.youtube.com/@rahulgajbhiye01", label: "YouTube" },
] as const;

export default async function HomePage() {
  const [site, selected] = await Promise.all([
    getSite(),
    getSelectedContentItems(),
  ]);

  return (
    <main className="enter flex flex-col">
      <div>
        <h1 className="max-w-xl font-serif text-[2rem] leading-[1.18] tracking-[-0.03em] text-foreground sm:text-[2.35rem] lg:text-[2.75rem] lg:leading-[1.12]">
          {site.tagline}
        </h1>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {site.collaborate ? (
            <li>
              <a
                href={site.collaborate.href}
                {...(site.collaborate.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
              >
                {site.collaborate.label}
              </a>
            </li>
          ) : null}
          {elsewhere.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="currently-heading" className="mt-20 lg:mt-32">
        <SectionHeading id="currently-heading">Currently</SectionHeading>
        <div className="mt-6">
          <CurrentlyList />
        </div>
      </section>

      <section aria-labelledby="selected-heading" className="mt-12 lg:mt-16">
        <SectionHeading id="selected-heading">Selected</SectionHeading>
        {selected.length > 0 ? (
          <div className="mt-6">
            {selected.map((item) => (
              <EntryRow
                key={item.id}
                href={item.route}
                title={item.title}
                description={item.description}
                type={entryTypeLabel(item)}
              />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm leading-7 text-muted">
            Nothing selected yet.
          </p>
        )}
      </section>
    </main>
  );
}
