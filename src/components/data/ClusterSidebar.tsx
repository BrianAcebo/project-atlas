import { useState } from "react";
import { TopicNode } from "./TopicalMap";

type Props = {
  topic: TopicNode;
  onSave: (updated: TopicNode) => void;
  onClose: () => void;
  onDelete: () => void;
};

export const ClusterSidebar = ({ topic, onSave, onClose, onDelete }: Props) => {
  const [title, setTitle] = useState(topic.title);

  const handleSubmit = () => {
    onSave({
      ...topic,
      title,
    });
  };

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex flex-col">
        <div className="mb-10 flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold md:text-xl">Edit Cluster</h2>

          <button aria-label="Close cluster side panel" onClick={onClose} className="hover:bg-brand-accent-primary relative z-20 flex size-8 cursor-pointer flex-col items-center justify-center rounded-md transition-colors">
            <div className="mb-0 h-[0.5px] w-5 rotate-45 bg-white transition-all duration-200"></div>
            <div className="h-[0.5px] w-5 -rotate-45 bg-white transition-all duration-200"></div>
          </button>
        </div>

        <label htmlFor="sidebarTitle" className="mb-2 text-xs font-medium md:text-sm">
          Title
        </label>
        <input id="sidebarTitle" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded border px-3 py-2 text-sm md:text-base" />
      </div>

      <div className="mt-auto mb-0 flex gap-2">
        <button onClick={handleSubmit} className="cursor-pointer rounded bg-green-900 px-4 py-2 text-xs font-semibold md:text-sm">
          Save
        </button>
        <button onClick={onDelete} className="cursor-pointer rounded bg-red-700 px-4 py-2 text-xs font-semibold md:text-sm">
          Delete
        </button>
      </div>
    </div>
  );
};
