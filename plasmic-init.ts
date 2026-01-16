import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

let plasmicLoader: ReturnType<typeof initPlasmicLoader> | null = null;

// We wrap the initialization in a function to avoid calling it at the top level
export function getPlasmicLoader() {
  if (!plasmicLoader) {
    plasmicLoader = initPlasmicLoader({
      projects: [
        {
          id: "gDcrBQgUDAPSPX7kSZtPse",
          // PASTE YOUR NEW TOKEN HERE
          token: "YOUR_NEW_REGENERATED_TOKEN_HERE", 
        },
      ],
    });
  }
  return plasmicLoader;
}
