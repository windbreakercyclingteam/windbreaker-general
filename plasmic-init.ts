import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

let plasmicLoader: ReturnType<typeof initPlasmicLoader> | null = null;

export function getPlasmicLoader() {
  if (!plasmicLoader) {
    plasmicLoader = initPlasmicLoader({
      projects: [
        {
          // THIS IS THE CORRECT ID FROM YOUR LINK
          id: "wa7nk6HAnWkgnsQkSsW3sr",
          // PASTE YOUR API TOKEN HERE
          token: "YOUR_NEW_REGENERATED_TOKEN_HERE",
        },
      ],
    });
  }
  return plasmicLoader;
}
