type ExternalLinkBadgeProps = {
  href: string;
  label: string;
};

export function ExternalLinkBadge({ href, label }: ExternalLinkBadgeProps) {
  const sponsored = label.toLowerCase().includes("affiliate");

  return (
    <a
      href={href}
      target="_blank"
      rel={sponsored ? "sponsored noopener noreferrer" : "noopener noreferrer"}
      className="font-mono text-xs text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-foreground hover:decoration-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
    >
      {label}
    </a>
  );
}
