import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { getPlasmicLoader } from "../plasmic-init";

const PLASMIC = getPlasmicLoader();

export default function MyApp({ Component, pageProps }: { Component: any; pageProps: any; }) {
  return (
      <PlasmicRootProvider loader={PLASMIC}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
  );
}
