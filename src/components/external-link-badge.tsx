import { FaGithub, FaLink } from "react-icons/fa6";

type ExternalLinkBadgeProps = {
  href: string;
  label: string;
};

function getLinkIcon(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("github") || normalizedLabel.includes("repo")) {
    return <FaGithub />;
  }

  return <FaLink />;
}

export function ExternalLinkBadge({ href, label }: ExternalLinkBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="py-1 font-mono text-muted"
    >
      <span className="shrink-0 text-lg text-muted transition-colors duration-200 hover:text-accent">
        {getLinkIcon(label)}
      </span>
    </a>
  );
}
