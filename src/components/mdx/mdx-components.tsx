import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import type { PostFrontmatter } from "@/types/post";

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
    <h2 id={id} className="text-3xl font-bold mt-8 mb-4 scroll-mt-4 group">
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
    <h3 id={id} className="text-2xl font-semibold mt-6 mb-3 scroll-mt-4 group">
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
  [key: string]: any;
}) {
  return (
    <div className="my-8">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* For external images, you might want to use regular img */}
        {src.startsWith("http") ? (
          <img src={src} alt={alt} className="w-full h-auto" {...props} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={800}
            height={400}
            className="w-full h-auto"
            {...props}
          />
        )}
      </div>
      {alt && (
        <p className="text-center text-sm text-gray-600 mt-3 italic">{alt}</p>
      )}
    </div>
  );
}

// Create components function that accepts frontmatter for conditional rendering
export function createMDXComponents(frontmatter: PostFrontmatter) {
  return {
    // Override default HTML elements
    h1: ({ children }: { children: ReactNode }) => (
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    ),
    h2: CustomH2,
    h3: CustomH3,
    h4: ({ children }: { children: ReactNode }) => (
      <h4 className="text-xl font-medium mt-4 mb-2">{children}</h4>
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
            className="text-blue-600 hover:text-blue-800 underline"
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
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </Link>
      );
    },
    img: CustomImage,
    pre: ({ children }: { children: ReactNode }) => {
      return (
        <div className="relative my-6 rounded-lg overflow-hidden bg-gray-900">
          <button className="absolute top-3 right-3 z-10 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"></button>
          <pre className="p-4 overflow-x-auto text-sm">{children}</pre>
        </div>
      );
    },
    code: ({ children, className, ...props }: any) => {
      // Inline code
      if (!className) {
        return (
          <code
            className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
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
      <blockquote className="border-l-4 border-blue-300 pl-4 italic text-gray-700 my-6 bg-blue-50 py-2">
        {children}
      </blockquote>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="ml-4">{children}</li>
    ),
    table: ({ children }: { children: ReactNode }) => (
      <div className="overflow-x-auto my-6">
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
      <tr className="border-b border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700/50">
        {children}
      </tr>
    ),
    th: ({ children }: { children: ReactNode }) => (
      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800">
        {children}
      </th>
    ),
    td: ({ children }: { children: ReactNode }) => (
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">
        {children}
      </td>
    ),

    // Custom components
    Callout,
    YouTube,
    Tweet,
    Counter,
  };
}

// Default components export for basic usage
export const components = createMDXComponents({} as PostFrontmatter);
