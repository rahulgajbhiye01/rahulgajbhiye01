type ContentEmptyStateProps = {
  children: string;
};

export function ContentEmptyState({ children }: ContentEmptyStateProps) {
  return <p className="mt-12 border-t border-border pt-6 text-sm text-muted">{children}</p>;
}
