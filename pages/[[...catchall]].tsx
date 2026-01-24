import {
  PlasmicComponent,
  PlasmicRootProvider,
  extractPlasmicQueryData,
} from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPlasmicLoader } from "@/plasmic-init";

// 1. getStaticPaths: Fetches the list of pages
export const getStaticPaths: GetStaticPaths = async () => {
  const PLASMIC = getPlasmicLoader();
  const pages = await PLASMIC.fetchPages();
  
  // --- DEBUG LOG ---
  console.log("PLASMIC RETURNED THESE PAGES:", pages);
  // -----------------

  return {
    paths: pages.map((page) => ({
      params: {
        catchall: page.path === "/" ? [] : page.path.substring(1).split("/"),
      },
    })),
    fallback: "blocking",
  };
};

// 2. getStaticProps: Fetches data for the specific page
export const getStaticProps: GetStaticProps = async (context) => {
  const PLASMIC = getPlasmicLoader();
  
  // Safe access to catchall
  const catchall = (context.params?.catchall as string[]) || [];
  const pagePath = "/" + catchall.join("/");

  const plasmicData = await PLASMIC.fetchComponentData(pagePath);
  
  if (!plasmicData) {
    return { notFound: true };
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  // Cache data for performance
  const cache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );

  return {
    props: {
      plasmicData,
      prefetchedQueryData: cache,
    },
  };
};

// 3. CatchallPage: Renders the page
// NOTE: This receives 'props', not 'params'
export default function CatchallPage(props: any) {
  const { plasmicData, prefetchedQueryData } = props;
  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider
      loader={getPlasmicLoader()}
      prefetchedData={plasmicData}
      prefetchedQueryData={prefetchedQueryData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}