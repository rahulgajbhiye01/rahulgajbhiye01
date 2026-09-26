import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahul Gajbhiye",
    short_name: "Rahul",
    description:
      "A living archive of what Rahul Gajbhiye builds, learns, and documents.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f5",
    theme_color: "#faf7f5",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
