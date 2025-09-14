"use client";

import { createContext, useContext, ReactNode } from "react";
import type { PostFrontmatter } from "@/types/post";

interface PostContextValue {
  frontmatter: PostFrontmatter;
  slug: string;
}

const PostContext = createContext<PostContextValue | undefined>(undefined);

export function PostProvider({
  frontmatter,
  slug,
  children,
}: {
  frontmatter: PostFrontmatter;
  slug: string;
  children: ReactNode;
}) {
  return (
    <PostContext.Provider value={{ frontmatter, slug }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
}
