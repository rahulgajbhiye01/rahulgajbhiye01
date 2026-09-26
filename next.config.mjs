/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/work", destination: "/projects", permanent: true },
      { source: "/articles", destination: "/writing", permanent: true },
    ];
  },
};

export default nextConfig;
