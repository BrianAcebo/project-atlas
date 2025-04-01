import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { CSSTransition } from "react-transition-group";
import { CiSquarePlus } from "react-icons/ci";
import { ClusterSidebar } from "./ClusterSidebar";
import { useLocalClusters } from "../../storage/LocalClusters";
import { NavLink } from "react-router-dom";

export type Cluster = {
  id: string;
  topicsId: string;
  title: string;
};

export const ClusterList = () => {
  const { clustersHaveLoaded, clusters, setClusters } = useLocalClusters();
  const [isUIReady, setIsUIReady] = useState(false);
  const nodeRef = useRef(null);
  const [selectedCluster, setSelectedCluster] = React.useState<Cluster | null>(null);

  // Ensure react has fully loaded and painted
  useEffect(() => {
    if (!clustersHaveLoaded) return;
    const timeout = setTimeout(() => setIsUIReady(true), 1000);
    return () => clearTimeout(timeout);
  }, [clustersHaveLoaded]);

  // A11y close sidebar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCluster(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // UI loading screen
  if (!clustersHaveLoaded || !isUIReady) {
    return (
      <div title="Loading screen" className={`bg-brand-blue px-5 py-18 transition-opacity duration-300 md:py-36 ${clustersHaveLoaded ? "opacity-100" : "opacity-0"} flex h-screen w-full flex-col md:flex-row`}>
        <div className="relative flex-1">
          {clusters.length > 0 && (
            <div className="bg-brand-blue-dark mx-auto flex max-w-2xl flex-col border border-gray-700">
              <div className="bg-brand-blue m-3 h-8 w-32 animate-pulse rounded"></div>

              {[1, 2, 3, 4, 5].map((_, i) => {
                return (
                  <li key={i} className="flex w-full list-none items-center justify-between border-t border-gray-800 p-4 text-sm md:text-base">
                    <div className="bg-brand-blue h-5 w-20 animate-pulse rounded"></div>
                    <div className="bg-brand-blue h-3 w-12 animate-pulse rounded"></div>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Cluster methods
  const addCluster = () => {
    const id = `${Date.now()}`;
    const cluster: Cluster = { id, title: "New Cluster", topicsId: "" };

    setClusters((prev) => [...prev, cluster]);
    setSelectedCluster(cluster);

    toast.success("New cluster added");
  };

  const onClusterEdit = (updated: Cluster) => {
    setClusters((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    toast.success("Changes saved");
    setSelectedCluster(null);
  };

  const onClusterDelete = (id: string) => {
    setClusters((prev) => prev.filter((t) => t.id !== id));
    setSelectedCluster(null);

    toast.success("Cluster deleted");
  };

  const onClusterClick = (id: string) => {
    const cluster = clusters.find((c) => c.id === id);
    if (cluster) setSelectedCluster(cluster);
  };

  // Empty screen
  if (clusters.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-2 text-2xl font-semibold">No Clusters Found</h2>
        <p className="mb-4 max-w-md text-gray-400">Start building your content strategy by creating a topic cluster.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => addCluster()} className="hover:text-brand-blue-dark flex cursor-pointer gap-2 rounded border px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-gray-100">
            <CiSquarePlus className="size-5" /> Create cluster
          </button>
        </div>
      </div>
    );
  }

  // Clusters screen
  return (
    <div className={`bg-brand-blue px-5 py-18 transition-opacity duration-300 md:py-36 ${clustersHaveLoaded ? "opacity-100" : "opacity-0"} flex h-screen w-full flex-col md:flex-row`}>
      <div className="relative flex-1">
        <button aria-label="Add a new cluster" onClick={addCluster} title="Add a new cluster" className="x-3 bg-brand-blue-dark fixed bottom-10 left-3 z-10 rounded-full p-3 text-sm shadow-sm shadow-gray-400">
          <CiSquarePlus className="size-6" />
        </button>

        {clusters.length > 0 && (
          <div className="bg-brand-blue-dark mx-auto flex max-w-2xl flex-col border border-gray-700">
            <h1 className="p-4 text-lg font-semibold md:text-2xl">Clusters</h1>
            {clusters.map(({ title, id }) => {
              return (
                <li className="flex w-full list-none items-center justify-between border-t border-gray-800 p-4 text-sm md:text-base" key={id}>
                  <NavLink to={`/cluster/${id}`}>{title}</NavLink>
                  <button onClick={() => onClusterClick(id)} className="cursor-pointer text-xs md:text-sm">
                    Edit
                  </button>
                </li>
              );
            })}
          </div>
        )}
      </div>

      <CSSTransition nodeRef={nodeRef} in={!!selectedCluster} timeout={200} classNames="my-node">
        <div className={`top-navbar-height h-screen-visible bg-brand-blue-dark fixed z-50 w-[340px] shadow-lg shadow-gray-400 transition-all duration-300 ${selectedCluster ? "right-0 opacity-100" : "pointer-events-none -right-[100%] opacity-0"}`} onClick={() => setSelectedCluster(null)}>
          <div className="flex h-full w-full flex-col p-5 shadow md:p-8" onClick={(e) => e.stopPropagation()}>
            {selectedCluster && (
              <ClusterSidebar
                topic={{ id: selectedCluster.id, title: selectedCluster.title }} // Map Cluster to TopicNode
                onClose={() => setSelectedCluster(null)}
                onSave={(updated) => onClusterEdit({ ...selectedCluster, ...updated, topicsId: selectedCluster.topicsId })} // Ensure topicsId is preserved
                onDelete={() => onClusterDelete(selectedCluster.id)}
              />
            )}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
