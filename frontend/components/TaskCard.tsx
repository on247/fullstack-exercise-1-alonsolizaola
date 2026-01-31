export default function TaskCard({ task }: any) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">
      <h3 className="font-medium mb-2">{task.title}</h3>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{task.due}</span>
        <span
          className={`px-2 rounded-full ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : "bg-gray-200"
          }`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
}
