import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import type { Post, PostFrontmatter } from "@/types/post";

// Import all custom components
import { Callout } from "./ui/callout";
import { YouTube } from "./ui/youtube";
import { Tweet } from "./ui/tweet";
import { Counter } from "./ui/counter";

// Custom heading without wrapping <a>; rehype-autolink-headings will append its own link
function CustomH2({ children }: { children: ReactNode }) {
  const id =
    children
      ?.toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "") || "";

  return (
    <h2 id={id} className="group mt-8 mb-4 scroll-mt-4 text-3xl font-bold">
      {children}
    </h2>
  );
}

function CustomH3({ children }: { children: ReactNode }) {
  const id =
    children
      ?.toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "") || "";

  return (
    <h3 id={id} className="group mt-6 mb-3 scroll-mt-4 text-2xl font-semibold">
      {children}
    </h3>
  );
}

// Custom image wrapper with optimization
function CustomImage({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: unknown;
}) {
  return (
    <div className="my-8">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        {/* For external images, you might want to use regular img */}
        {src.startsWith("http") ? (
          <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className="h-auto w-full"
            {...props}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className="h-auto w-full"
            {...props}
          />
        )}
      </div>
      {alt && (
        <p className="mt-3 text-center text-sm text-gray-600 italic">{alt}</p>
      )}
    </div>
  );
}

// Create components function for MDX rendering
export function createMDXComponents(post?: Post | PostFrontmatter) {
  // You can use the post parameter for conditional rendering
  // For example: showTableOfContents, enableComments, etc.

  return {
    // Override default HTML elements
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="mb-6 text-4xl font-bold">{children}</h1>
    ),
    h2: CustomH2,
    h3: CustomH3,
    h4: ({ children }: { children: ReactNode }) => (
      <h4 className="mt-4 mb-2 text-xl font-medium">{children}</h4>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    a: ({ href, children }: { href: string; children: ReactNode }) => {
      const isExternal = href?.startsWith("http");

      if (isExternal) {
        return (
          <a
            href={href}
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          href={href}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </Link>
      );
    },
    img: CustomImage,
    pre: ({ children }: { children: ReactNode }) => {
      return (
        <div className="relative my-6 overflow-hidden rounded-lg bg-gray-900">
          <button className="absolute top-3 right-3 z-10 rounded bg-gray-700 px-3 py-1 text-xs text-white transition-colors hover:bg-gray-600"></button>
          <pre className="overflow-x-auto p-4 text-sm">{children}</pre>
        </div>
      );
    },
    code: ({
      children,
      className,
      ...props
    }: {
      children: ReactNode;
      className?: string;
      [key: string]: unknown;
    }) => {
      // Inline code
      if (!className) {
        return (
          <code
            className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800"
            {...props}
          >
            {children}
          </code>
        );
      }

      // Code block - let rehype-highlight handle syntax highlighting
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-blue-300 bg-blue-50 py-2 pl-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="mb-4 list-inside list-disc space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="mb-4 list-inside list-decimal space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
    table: ({ children }: { children: ReactNode }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }: { children: ReactNode }) => (
      <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
    ),
    tbody: ({ children }: { children: ReactNode }) => <tbody>{children}</tbody>,
    tr: ({ children }: { children: ReactNode }) => (
      <tr className="border-b border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700/50">
        {children}
      </tr>
    ),
    th: ({ children }: { children: ReactNode }) => (
      <th className="border border-gray-300 bg-gray-50 px-4 py-3 text-left font-semibold text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
        {children}
      </th>
    ),
    td: ({ children }: { children: ReactNode }) => (
      <td className="border border-gray-300 px-4 py-3 text-gray-700 dark:border-gray-600 dark:text-gray-300">
        {children}
      </td>
    ),

    // Custom components
    Callout,
    YouTube,
    Tweet,
    Counter,

    // Post-specific components (can be conditionally rendered based on post data)
    ...(post && {
      // Example: Post metadata component
      PostMeta: () => (
        <div className="my-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              <strong>Published:</strong> {post.date}
            </p>
            {post.author && (
              <p>
                <strong>Author:</strong> {post.author}
              </p>
            )}
            {post.readingTime && (
              <p>
                <strong>Reading time:</strong> {post.readingTime} min
              </p>
            )}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-2">
                <strong>Tags:</strong>
                <div className="mt-1 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ),
    }),
  };
}

// Default components export for basic usage
export const components = createMDXComponents();
