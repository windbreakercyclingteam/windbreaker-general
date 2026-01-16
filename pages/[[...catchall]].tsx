import {
  PlasmicComponent,
  PlasmicRootProvider,
  extractPlasmicQueryData,
} from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { getPlasmicLoader } from "@/plasmic-init";

export async function generateStaticParams() {
  const PLASMIC = getPlasmicLoader();
  const pages = await PLASMIC.fetchPages();
  return pages.map((page: { path: string }) => {
    if (page.path === "/") {
      return { catchall: [] };
    }
    return {
      catchall: page.path.substring(1).split("/"),
    };
  });
}

export default async function CatchallPage({
  params,
}: {
  params: { catchall?: string[] };
}) {
  const PLASMIC = getPlasmicLoader();
  const catchall = params.catchall || [];
  const pagePath = "/" + catchall.join("/");

  const plasmicData = await PLASMIC.fetchComponentData(pagePath);

  if (!plasmicData) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );

  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}
