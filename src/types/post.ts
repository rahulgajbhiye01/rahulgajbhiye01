export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  enableComments?: boolean;
  showTableOfContents?: boolean;
  published?: boolean;
  coverImage?: string;
  readingTime?: number;
  content: string;
}

export interface PostFrontmatter {
  slug?: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  enableComments?: boolean;
  showTableOfContents?: boolean;
  published?: boolean;
  coverImage?: string;
  readingTime?: number;
}
