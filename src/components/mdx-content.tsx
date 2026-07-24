import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { Callout, CodeBlock, Details, Metric } from "@/components/mdx";

type MdxContentProps = {
  source: string;
};

function H1({ children, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      {...props}
      className="mt-10 scroll-mt-24 text-[1.7rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[2.1rem]"
    >
      {children}
    </h1>
  );
}

function H2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      {...props}
      className="mt-8 scroll-mt-24 border-b border-border/70 pb-2 text-[1.25rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.45rem]"
    >
      {children}
    </h2>
  );
}

function H3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      {...props}
      className="mt-8 scroll-mt-24 text-[1rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.08rem]"
    >
      {children}
    </h3>
  );
}

function H4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      {...props}
      className="mt-7 scroll-mt-24 text-[0.95rem] font-semibold tracking-[-0.02em] text-foreground"
    >
      {children}
    </h4>
  );
}

function Paragraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p
      {...props}
      className="text-[0.96rem] leading-8 text-muted sm:text-[1rem]"
    >
      {children}
    </p>
  );
}

function UnorderedList({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className="my-2 space-y-3 pl-6 text-[0.95rem] leading-7 text-muted sm:text-[0.98rem]"
    >
      {children}
    </ul>
  );
}

function OrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      {...props}
      className="my-2 space-y-3 pl-6 text-[0.95rem] leading-7 text-muted sm:text-[0.98rem]"
    >
      {children}
    </ol>
  );
}

function ListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
  return (
    <li {...props} className="leading-7 text-muted">
      {children}
    </li>
  );
}

function NativeCodeBlock({
  children,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-md border border-border bg-zinc-950 shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2 font-mono text-xs text-muted">
        <span className="h-2 w-2 rounded-full bg-rose-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-1">terminal</span>
      </div>
      <pre
        {...props}
        className="overflow-x-auto px-4 py-4 font-mono text-sm leading-6 text-zinc-100"
      >
        {children}
      </pre>
    </div>
  );
}

function Table({ children, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-md border border-border bg-black/30 shadow-sm">
      <table
        {...props}
        className="w-full border-collapse text-left text-sm leading-6 [&_a]:text-accent [&_a]:underline [&_code]:rounded [&_code]:bg-white/6 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-foreground"
      >
        {children}
      </table>
    </div>
  );
}

function TableHead({ children, ...props }: ComponentPropsWithoutRef<"th">) {
  return (
    <th {...props} className="px-3 py-3 font-medium text-foreground sm:px-4">
      {children}
    </th>
  );
}

function TableCell({ children, ...props }: ComponentPropsWithoutRef<"td">) {
  return (
    <td {...props} className="px-3 py-3 align-top text-muted sm:px-4">
      {children}
    </td>
  );
}

function TableHeader({
  children,
  ...props
}: ComponentPropsWithoutRef<"thead">) {
  return (
    <thead {...props} className="border-b border-border bg-white/3">
      {children}
    </thead>
  );
}

function TableBody({ children, ...props }: ComponentPropsWithoutRef<"tbody">) {
  return <tbody {...props}>{children}</tbody>;
}

function TableRow({ children, ...props }: ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      {...props}
      className="border-b border-border/80 transition-colors last:border-b-0 hover:bg-white/3"
    >
      {children}
    </tr>
  );
}

export function MdxContent({ source }: MdxContentProps) {
  return (
    <div className="mdx-content max-w-4xl mt-4">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: "vitesse-black" }]],
          },
        }}
        components={{
          Callout,
          CodeBlock,
          Details,
          Metric,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          p: Paragraph,
          ul: UnorderedList,
          ol: OrderedList,
          li: ListItem,
          pre: NativeCodeBlock,
          table: Table,
          thead: TableHeader,
          tbody: TableBody,
          tr: TableRow,
          th: TableHead,
          td: TableCell,
        }}
      />
    </div>
  );
}
