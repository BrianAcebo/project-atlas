// src/components/TopicNode.tsx
import React from "react";

export type TopicStatus = "draft" | "in-progress" | "published";

export interface TopicNodeProps {
  title: string;
  status?: TopicStatus;
}

const statusColorMap: Record<TopicStatus, string> = {
  draft: "bg-purple-500",
  "in-progress": "bg-blue-500",
  published: "bg-green-600",
};

export const TopicNode: React.FC<TopicNodeProps> = ({ title, status = "draft" }) => {
  return (
    <div className={`w-[160px] rounded-lg p-4 text-center text-sm text-white shadow-md transition-all ${statusColorMap[status]}`} data-testid="topic-node">
      {title}
    </div>
  );
};
