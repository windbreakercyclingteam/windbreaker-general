import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
// Adjust path if your plasmic init file lives elsewhere
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicHostPage() {
  return <PlasmicCanvasHost />;
}
