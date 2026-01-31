import KanbanColumn from "./KanbanColumn";

const columns = [
  { key: "pending", title: "Pending", color: "bg-gray-400" },
  { key: "progress", title: "In Progress", color: "bg-yellow-400" },
  { key: "completed", title: "Completed", color: "bg-green-500" },
  { key: "launched", title: "Launched", color: "bg-purple-500" },
];

const tasks = {
  pending: [{ title: "Design landing page", due: "Mar 12", priority: "High" }],
  progress: [{ title: "API Integration", due: "Mar 15", priority: "Normal" }],
  completed: [{ title: "Wireframes", due: "Mar 5", priority: "Normal" }],
  launched: [{ title: "Marketing Website", due: "Mar 1", priority: "High" }],
};

export default function KanbanBoard() {
  return (
    <div className="flex-1 p-6 overflow-x-auto">
      <div className="grid grid-cols-4 gap-4 min-w-[900px]">
        {columns.map((col) => (
          <KanbanColumn
            key={col.key}
            column={col}
            tasks={tasks[col.key]}
          />
        ))}
      </div>
    </div>
  );
}