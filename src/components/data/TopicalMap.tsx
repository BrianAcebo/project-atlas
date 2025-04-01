import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { CSSTransition } from "react-transition-group";
import { CiSquarePlus } from "react-icons/ci";
import { TopicSidebar } from "./TopicSidebar";
import { useLocalTopics } from "../../storage/LocalTopics";
import ReactFlow, { Background, Controls, MiniMap, Node, Edge, Position, addEdge, Connection, applyNodeChanges, applyEdgeChanges, NodeChange, EdgeChange } from "react-flow-renderer";
import type { CSSProperties } from "react";

export type TopicStatus = "draft" | "published" | "in-progress";

export type TopicNode = {
  id: string;
  title: string;
  status?: TopicStatus;
  position?: { x: number; y: number };
  internalLinks?: string[];
  targetUrl?: string;
  parentId?: string;
};

const statusColors: Record<TopicStatus, string> = {
  draft: "#8c8abb",
  "in-progress": "#446ce1",
  published: "#428551",
};

const exampleTopicClusters: {
  id: string;
  name: string;
  topics: TopicNode[];
}[] = [
  {
    id: "cluster-seo",
    name: "SEO Cluster",
    topics: [
      { id: "pillar", title: "Ultimate Guide to SEO", status: "draft" },
      { id: "sub1", title: "Keyword Research", status: "in-progress", parentId: "pillar" },
      { id: "sub2", title: "On-Page Optimization", status: "draft", parentId: "pillar" },
      { id: "sub3", title: "Technical SEO", status: "published", parentId: "pillar" },
    ],
  },
  {
    id: "cluster-faq",
    name: "FAQ Cluster",
    topics: [
      { id: "faq-root", title: "Startup Questions", status: "draft" },
      { id: "faq-1", title: "What is a SaaS?", status: "draft", parentId: "faq-root" },
      { id: "faq-2", title: "How does billing work?", status: "in-progress", parentId: "faq-root" },
    ],
  },
];

export const TopicalMap = () => {
  const { topicsHaveLoaded, topics, setTopics, nodes, setNodes, edges, setEdges } = useLocalTopics();
  const [isUIReady, setIsUIReady] = useState(false);
  const nodeRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = React.useState<TopicNode | null>(null);

  // Ensure react has fully loaded and painted
  useEffect(() => {
    if (!topicsHaveLoaded) return;
    const timeout = setTimeout(() => setIsUIReady(true), 1000);
    return () => clearTimeout(timeout);
  }, [topicsHaveLoaded]);

  // Map topics into react-flow nodes
  useEffect(() => {
    if (!topicsHaveLoaded) return;

    const restoredNodes = topics.map((topic) => ({
      id: topic.id,
      data: { label: topic.title },
      position: topic.position || { x: 200 + Math.random() * 300, y: 150 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: {
        backgroundColor: statusColors[topic.status || "draft"],
        padding: 10,
        borderRadius: 6,
        minWidth: 120,
        textAlign: "center" as CSSProperties["textAlign"],
      },
    }));

    // Set state to mapped nodes
    setNodes(restoredNodes);
  }, [topics, topicsHaveLoaded, setNodes]);

  // A11y close sidebar
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTopic(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // UI loading screen
  if (!topicsHaveLoaded || !isUIReady) {
    return (
      <div title="Loading screen" className="flex h-screen w-full items-center justify-center">
        <div className="relative h-96 w-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div className="bg-brand-blue h-14 w-28 animate-pulse rounded shadow md:h-26 md:w-64" />
          </div>

          <div className="absolute top-14 left-1/2 h-6 w-0.5 -translate-x-1/2 bg-gray-700 md:top-26" />
          <div className="absolute top-20 left-1/2 h-0.5 w-[265px] -translate-x-1/2 bg-gray-700 md:top-32 md:w-[610px]" />

          <div className="absolute top-20 left-1/2 flex -translate-x-1/2 gap-5 md:top-32 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="h-6 w-0.5 bg-gray-700" />
              <div className="bg-brand-blue h-14 w-28 animate-pulse rounded shadow md:h-26 md:w-64" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-0.5 bg-gray-700" />
              <div className="bg-brand-blue h-14 w-28 animate-pulse rounded shadow md:h-26 md:w-64" />
            </div>
            <div className="flex flex-col items-center">
              <div className="h-6 w-0.5 bg-gray-700" />
              <div className="bg-brand-blue h-14 w-28 animate-pulse rounded shadow md:h-26 md:w-64" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Topic methods
  const addTopic = () => {
    const id = `${Date.now()}`;
    const topic: TopicNode = { id, title: "New Topic", status: "draft" };
    const node: Node = {
      id,
      data: { label: topic.title },
      position: topic.position || {
        x: 200 + Math.random() * 300,
        y: 150 + Math.random() * 300,
      },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
      style: {
        backgroundColor: statusColors[topic.status || "draft"],
        padding: 10,
        borderRadius: 6,
        minWidth: 120,
        textAlign: "center",
      },
    };

    // Set state
    setTopics((prev) => [...prev, topic]);
    setNodes((prev) => [...prev, node]);
    setSelectedTopic(topic);

    toast.success("New topic added");
  };

  const onNodeClick = (_: React.MouseEvent, node: Node) => {
    const topic = topics.find((t) => t.id === node.id);
    if (topic) setSelectedTopic(topic);
  };

  const onTopicEdit = (updated: TopicNode) => {
    // Update topic state
    setTopics((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));

    // Update node state
    setNodes((prev) =>
      prev.map((n) =>
        n.id === updated.id
          ? {
              ...n,
              data: { label: updated.title },
              style: {
                ...n.style,
                backgroundColor: statusColors[updated.status || "draft"],
              },
            }
          : n,
      ),
    );

    toast.success("Changes saved");
    setSelectedTopic(null);
  };

  const onTopicDelete = (id: string) => {
    // Remove all topic data
    setTopics((prev) => prev.filter((t) => t.id !== id));
    setNodes((prev) => prev.filter((n) => n.id !== id));
    setEdges((prev) => prev.filter((e) => e.source !== id && e.target !== id));

    // Close sidebar
    setSelectedTopic(null);

    toast.success("Topic deleted");
  };

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((prevNodes) => {
      const updatedNodes = applyNodeChanges(changes, prevNodes);

      // Persist updated positions into topics
      setTopics((prevTopics) =>
        prevTopics.map((topic) => {
          const match = updatedNodes.find((n) => n.id === topic.id);
          return match
            ? {
                ...topic,
                position: match.position,
              }
            : topic;
        }),
      );

      return updatedNodes;
    });
  };

  // Edge methods
  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };

  const onConnect = (connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  };

  const handleEdgeDelete = (edgeId: string) => {
    setEdges((prev) => prev.filter((e) => e.id !== edgeId));
  };

  // Example topics
  if (topicsHaveLoaded && topics.length === 0) {
    const createFromTemplate = (cluster: (typeof exampleTopicClusters)[0]) => {
      const newNodes: Node[] = cluster.topics.map((t, i) => ({
        id: t.id,
        data: { label: t.title },
        position: {
          x: 100 + (i % 3) * 200,
          y: 100 + Math.floor(i / 3) * 150,
        },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
        style: {
          backgroundColor: statusColors[(t.status as TopicStatus) || "draft"],
          padding: 10,
          borderRadius: 6,
          textAlign: "center",
          minWidth: 120,
        },
      }));

      const newEdges: Edge[] = cluster.topics
        .filter((t) => t.parentId)
        .map((t) => ({
          id: `e-${t.parentId}-${t.id}`,
          source: t.parentId!,
          target: t.id,
          type: "smoothstep",
        }));

      setTopics(cluster.topics);
      setNodes(newNodes);
      setEdges(newEdges);
    };

    // Empty screen
    return (
      <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-2 text-2xl font-semibold">No Topics Found</h2>
        <p className="mb-4 max-w-md text-gray-400">Choose a topic cluster type below or creating one from scratch.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {exampleTopicClusters.map((cluster) => (
            <button key={cluster.id} onClick={() => createFromTemplate(cluster)} className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
              <CiSquarePlus className="size-3" /> {cluster.name}
            </button>
          ))}
          <button onClick={() => addTopic()} className="rounded border px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <CiSquarePlus className="size-3" /> Start from scratch
          </button>
        </div>
      </div>
    );
  }

  // Topics screen
  return (
    <div className={`bg-brand-blue transition-opacity duration-300 ${topicsHaveLoaded ? "opacity-100" : "opacity-0"} flex h-screen w-full flex-col md:flex-row`}>
      <div className="relative flex-1">
        <button aria-label="Add a new topic" onClick={addTopic} title="Add a new topic" className="x-3 bg-brand-blue-dark fixed top-[calc(var(--navbar-height)+20px)] left-3 z-10 rounded-full p-3 text-sm shadow-sm shadow-gray-400">
          <CiSquarePlus className="size-6" />
        </button>

        {nodes.length > 0 && edges.length >= 0 && (
          <ReactFlow elementsSelectable onEdgeClick={(_, edge) => handleEdgeDelete(edge.id)} nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onNodeClick={onNodeClick} onConnect={onConnect} fitView snapToGrid snapGrid={[10, 10]}>
            <MiniMap nodeColor={(n) => n.style?.backgroundColor || "#999"} />
            <Controls />
            <Background color="#f0f0f0" gap={16} />
          </ReactFlow>
        )}
      </div>

      <CSSTransition nodeRef={nodeRef} in={!!selectedTopic} timeout={200} classNames="my-node">
        <div className={`top-navbar-height h-screen-visible bg-brand-blue-dark fixed z-50 w-[340px] shadow-lg shadow-gray-400 transition-all duration-300 ${selectedTopic ? "right-0 opacity-100" : "pointer-events-none -right-[100%] opacity-0"}`} onClick={() => setSelectedTopic(null)}>
          <div className="flex h-full w-full flex-col p-5 shadow md:p-8" onClick={(e) => e.stopPropagation()}>
            {selectedTopic && <TopicSidebar topic={selectedTopic} onClose={() => setSelectedTopic(null)} onSave={onTopicEdit} onDelete={() => onTopicDelete(selectedTopic.id)} />}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};
