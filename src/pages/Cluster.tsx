import { TopicalMap } from "../components/data/TopicalMap";
import { ReactFlowProvider } from "react-flow-renderer";
import { Helmet } from "react-helmet";

export const Cluster = () => {
  return (
    <>
      <Helmet>
        <title>Cluster | Project Atlas</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <ReactFlowProvider>
        <TopicalMap />
      </ReactFlowProvider>
    </>
  );
};
