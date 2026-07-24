type TagListProps = {
  tags: readonly string[];
  label: string;
};

export function TagList({ tags, label }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
