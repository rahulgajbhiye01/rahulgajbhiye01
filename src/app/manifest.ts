import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahul Gajbhiye",
    short_name: "Rahul",
    description:
      "Portfolio and writing site for Rahul Gajbhiye, covering DevOps, systems thinking, and product engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#020202",
    theme_color: "#10b981",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
