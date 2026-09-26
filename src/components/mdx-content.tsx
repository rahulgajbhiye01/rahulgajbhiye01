import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { normalizeHeading } from "@/lib/headings";

type MdxContentProps = {
  source: string;
  pageTitle?: string;
};

const headingTwoClass =
  "mt-10 scroll-mt-28 border-b border-border pb-2 font-serif text-[1.3rem] font-medium tracking-[-0.02em] text-foreground sm:text-[1.5rem]";

function textFromChildren(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(textFromChildren).join("");
  }

  if (node && typeof node === "object" && "props" in node) {
    return textFromChildren(
      (node as { props: { children?: ReactNode } }).props.children,
    );
  }

  return "";
}

function Paragraph({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} className="text-[1.125rem] leading-[1.8] text-foreground/90">
      {children}
    </p>
  );
}

function UnorderedList({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      {...props}
      className="my-2 space-y-3 pl-6 text-[1.125rem] leading-[1.8] text-foreground/90"
    >
      {children}
    </ul>
  );
}

function OrderedList({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      {...props}
      className="my-2 space-y-3 pl-6 text-[1.125rem] leading-[1.8] text-foreground/90"
    >
      {children}
    </ol>
  );
}

function ListItem({ children, ...props }: ComponentPropsWithoutRef<"li">) {
  return (
    <li {...props} className="leading-8 text-foreground/90">
      {children}
    </li>
  );
}

function NativeCodeBlock({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      {...props}
      className={`px-4 py-4 font-mono text-sm leading-6 text-foreground ${className ?? ""}`.trim()}
    >
      {children}
    </pre>
  );
}

function Table({ children, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-6 max-w-full overflow-x-auto border border-border">
      <table
        {...props}
        className="w-max min-w-full border-collapse text-left text-sm leading-6 [&_a]:text-foreground [&_a]:underline [&_code]:rounded-sm [&_code]:bg-foreground/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:whitespace-nowrap [&_code]:text-foreground"
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
    <td {...props} className="px-3 py-3 align-top text-foreground/90 sm:px-4">
      {children}
    </td>
  );
}

function TableHeader({
  children,
  ...props
}: ComponentPropsWithoutRef<"thead">) {
  return (
    <thead {...props} className="border-b border-border bg-foreground/[0.03]">
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
      className="border-b border-border/80 transition-colors last:border-b-0 hover:bg-foreground/[0.03]"
    >
      {children}
    </tr>
  );
}

export function MdxContent({ source, pageTitle }: MdxContentProps) {
  let skippedMatchingTitle = false;

  function Heading1({
    children,
    id,
    ...props
  }: ComponentPropsWithoutRef<"h1">) {
    const matchesTitle =
      pageTitle &&
      !skippedMatchingTitle &&
      normalizeHeading(textFromChildren(children)) ===
        normalizeHeading(pageTitle);

    if (matchesTitle) {
      skippedMatchingTitle = true;
      return null;
    }

    return (
      <h2 {...props} id={id} className={headingTwoClass}>
        {children}
      </h2>
    );
  }

  function H2({ children, id, ...props }: ComponentPropsWithoutRef<"h2">) {
    return (
      <h2 {...props} id={id} className={headingTwoClass}>
        {children}
      </h2>
    );
  }

  function H3({ children, id, ...props }: ComponentPropsWithoutRef<"h3">) {
    return (
      <h3
        {...props}
        id={id}
        className="mt-8 scroll-mt-28 font-serif text-[1.08rem] font-medium tracking-[-0.02em] text-foreground sm:text-[1.16rem]"
      >
        {children}
      </h3>
    );
  }

  function H4({ children, id, ...props }: ComponentPropsWithoutRef<"h4">) {
    return (
      <h4
        {...props}
        id={id}
        className="mt-7 scroll-mt-28 font-serif text-[1rem] font-medium tracking-[-0.02em] text-foreground"
      >
        {children}
      </h4>
    );
  }

  return (
    <div className="mdx-content mt-0">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [
                rehypePrettyCode,
                { theme: "vitesse-light", keepBackground: false },
              ],
            ],
          },
        }}
        components={{
          h1: Heading1,
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
