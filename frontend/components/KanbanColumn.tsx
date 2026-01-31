import TaskCard from "./TaskCard";

export default function KanbanColumn({ column, tasks }: any) {
  return (
    <div className="bg-gray-100 rounded-xl p-3">
      <div className="flex items-center gap-2 mb-3">
        <span className={`w-2 h-2 rounded-full ${column.color}`} />
        <span className="font-medium">{column.title}</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task: any, i: number) => (
          <TaskCard key={i} task={task} />
        ))}
      </div>
    </div>
  );
}