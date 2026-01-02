import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "YOUR_PROJECT_ID",
      token: "YOUR_PROJECT_API_TOKEN",
    },
  ],
  preview: false,
});
