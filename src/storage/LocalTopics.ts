import { useEffect, useState, useCallback } from "react";
import { Edge, Node } from "react-flow-renderer";
import { TopicNode } from "../components/data/TopicalMap";
import { useLocation } from "react-router-dom";

const STORAGE_KEY = "project-atlas-editor_clusters";

type EditorTopicsData = {
  topics: TopicNode[];
  nodes: Node[];
  edges: Edge[];
};

type Cluster = EditorTopicsData & {
  id: string;
};

export const useLocalTopics = () => {
  const [topicsHaveLoaded, setTopicsHaveLoaded] = useState(false);
  const [topics, setTopics] = useState<TopicNode[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const location = useLocation();
  const clusterId = location.pathname.replace("/cluster/", "");

  const getClusterIndex = useCallback(
    (parsed: Cluster[]) => {
      const clusterIndex = parsed?.findIndex(({ id }: { id: string }) => id === clusterId);
      return clusterIndex === -1 ? 0 : clusterIndex;
    },
    [clusterId],
  );

  // Only run on first initial load
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const clusterIndex = getClusterIndex(parsed);

        setTopics(parsed[clusterIndex].topics || []);
        setNodes(parsed[clusterIndex].nodes || []);
        setEdges(parsed[clusterIndex].edges || []);
      } catch {
        console.warn("Could not parse saved data");
      }
    }
    setTopicsHaveLoaded(true);
  }, [getClusterIndex]);

  // Save any time something changes
  useEffect(() => {
    if (!topicsHaveLoaded) return;

    const data: EditorTopicsData = { topics, nodes, edges };
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(stored ?? "[]") ?? [];

    const clusterIndex = getClusterIndex(parsed);
    parsed[clusterIndex] = { ...parsed[clusterIndex], ...data };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
  }, [topics, nodes, edges, topicsHaveLoaded, getClusterIndex]);

  return {
    topics,
    setTopics,
    nodes,
    setNodes,
    edges,
    setEdges,
    topicsHaveLoaded,
  };
};
