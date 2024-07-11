/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Optionally, add any other Next.js config below
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/cryptosh",
          destination: "https://cryptosh.rahulgajbhiye.com/",
        },
        {
          source: "/letter",
          destination: "https://letter.rahulgajbhiye.com/",
        },
      ],
    };
  },
};

// Wrap MDX and Next.js config with each other
export default nextConfig;
