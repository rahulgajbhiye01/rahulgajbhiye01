type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  titleId: string;
};

export function PageIntro({ eyebrow, title, description, titleId }: PageIntroProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
      <h1 id={titleId} className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 text-pretty leading-7 text-muted">{description}</p>
    </div>
  );
}
