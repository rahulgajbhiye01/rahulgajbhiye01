import { ReadingColumn } from "@/components/reading-column";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <ReadingColumn>
        <h1 className="font-serif text-[2.15rem] tracking-tight text-foreground sm:text-[2.5rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">{description}</p>
        ) : null}
      </ReadingColumn>
    </header>
  );
}
