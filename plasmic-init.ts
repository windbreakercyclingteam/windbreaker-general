import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

let plasmicLoader: ReturnType<typeof initPlasmicLoader> | null = null;

export function getPlasmicLoader() {
  if (!plasmicLoader) {
    plasmicLoader = initPlasmicLoader({
      projects: [
        {
          id: "1h4uDQ4Npe9cos6PwaUVtB",
          token: "RYfPQ8LwWvsttR8S3r8cKYix56lBZpFc8N7OlmSkhVnaP0UuFk4LTXndjD3LCw3QxK7wOOmbxwoDol9ZS0rQ",
        },
      ],
    });
  }
  return plasmicLoader;
}
