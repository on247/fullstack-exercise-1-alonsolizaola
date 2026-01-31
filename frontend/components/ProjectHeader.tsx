import { Pencil, Filter } from "lucide-react";

export default function ProjectHeader() {
  return (
    <div className="p-6 border-b bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Website Redesign</h1>
          <Pencil size={16} />
        </div>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Share</button>
          <button className="border px-3 py-1 rounded">Automation</button>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {[
          "Overview",
          "List",
          "Board",
          "Calendar",
          "Files",
        ].map((tab) => (
          <button
            key={tab}
            className={`px-3 py-1 rounded ${
              tab === "Board" ? "bg-purple-100 text-purple-600" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-4">
        {["Due Date", "Assignee", "Priority"].map((f) => (
          <button key={f} className="border px-3 py-1 rounded">
            {f}
          </button>
        ))}
        <button className="border px-3 py-1 rounded flex gap-1 items-center">
          <Filter size={14} /> Advanced Filters
        </button>
        <button className="ml-auto bg-purple-600 text-white px-4 py-1 rounded">
          + Add New
        </button>
      </div>
    </div>
  );
}