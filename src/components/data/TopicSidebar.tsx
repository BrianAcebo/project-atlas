import { useState, type SetStateAction } from "react";
import { TopicNode } from "./TopicalMap";

type Props = {
  topic: TopicNode;
  onSave: (updated: TopicNode) => void;
  onClose: () => void;
  onDelete: () => void;
};

export const TopicSidebar = ({ topic, onSave, onClose, onDelete }: Props) => {
  const [title, setTitle] = useState(topic.title);
  const [status, setStatus] = useState(topic.status || "draft");
  const [interlinks, setInterlinks] = useState<string[]>(topic.internalLinks || []);
  const [newLink, setNewLink] = useState("");

  const handleAddLink = () => {
    if (newLink.trim()) {
      setInterlinks([...interlinks, newLink.trim()]);
      setNewLink("");
    }
  };

  const handleRemoveLink = (link: string) => {
    setInterlinks(interlinks.filter((l) => l !== link));
  };

  const handleSubmit = () => {
    onSave({
      ...topic,
      title,
      status,
      internalLinks: interlinks,
    });
  };

  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className="flex h-full flex-col gap-6">
        <div className="mb-10 flex items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Edit Topic</h2>

          <button aria-label="Close cluster side panel" onClick={onClose} className="hover:bg-brand-accent-primary relative z-20 flex size-8 cursor-pointer flex-col items-center justify-center rounded-md transition-colors">
            <div className="mb-0 h-[0.5px] w-5 rotate-45 bg-white transition-all duration-200"></div>
            <div className="h-[0.5px] w-5 -rotate-45 bg-white transition-all duration-200"></div>
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium md:text-sm">Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="rounded border px-3 py-2 text-sm md:text-base" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium md:text-sm">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value as SetStateAction<"draft" | "published" | "in-progress">)} className="rounded border px-3 py-2 text-sm md:text-base">
            <option value="draft">Draft</option>
            <option value="in-progress">In Progress</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium md:text-sm">Interlinks</label>
          <div className="mb-2 flex gap-2">
            <input value={newLink} onChange={(e) => setNewLink(e.target.value)} className="flex-1 rounded border px-3 py-2 text-sm md:text-base" placeholder="Add internal link" />
            <button onClick={handleAddLink} className="bg-brand-blue border-brand-blue rounded border px-3 py-2 text-xs font-semibold text-white">
              Add
            </button>
          </div>

          <ul className="space-y-3">
            {interlinks.map((link, i) => (
              <li key={`${link}-${i}`} className="bg-brand-blue flex items-center justify-between rounded px-3 py-1">
                <span className="text-sm">{link}</span>
                <button onClick={() => handleRemoveLink(link)} className="text-semibold text-xs text-red-500 hover:underline md:text-sm">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
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
