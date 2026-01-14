import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IME FTUI 2026",
    short_name: "IME FTUI",
    description: "Official website of Ikatan Mahasiswa Elektro FTUI",
    start_url: "/",
    display: "standalone",
    background_color: "#000722",
    theme_color: "#2463EB",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
