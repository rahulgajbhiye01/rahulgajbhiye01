type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
};

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
}: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",

    headline: title,
    description,

    url,

    datePublished,
    dateModified: dateModified ?? datePublished,

    author: {
      "@type": "Person",
      name: author,
      url: "https://rahulgajbhiye.com",
    },

    publisher: {
      "@type": "Person",
      name: "Rahul Gajbhiye",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
