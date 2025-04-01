import { ClusterList } from "../components/data/ClusterList";
import { ReactFlowProvider } from "react-flow-renderer";
import { Helmet } from "react-helmet";

export const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard | Project Atlas</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </Helmet>

      <ReactFlowProvider>
        <ClusterList />
      </ReactFlowProvider>
    </>
  );
};
