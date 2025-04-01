import { useEffect, useState } from "react";
import { Cluster } from "../components/data/ClusterList";

const STORAGE_KEY = "project-atlas-editor_clusters";

export const useLocalClusters = () => {
  const [clustersHaveLoaded, setClustersHaveLoaded] = useState(false);
  const [clusters, setClusters] = useState<Cluster[]>([]);

  // Only run on first initial load
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setClusters(parsed || []);
      } catch {
        console.warn("Could not parse saved data");
      }
    }
    setClustersHaveLoaded(true);
  }, []);

  // Save any time something changes
  useEffect(() => {
    if (!clustersHaveLoaded) return;
    const data = [...clusters];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [clusters, clustersHaveLoaded]);

  return {
    clusters,
    setClusters,
    clustersHaveLoaded,
  };
};
