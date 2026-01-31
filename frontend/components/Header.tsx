import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center px-6 gap-4">
      <span className="font-bold text-lg">Taskboard</span>

      <div className="flex-1 flex justify-center">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-96">
          <Search size={16} className="text-gray-500" />
          <input
            placeholder="Search tasks"
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>
      </div>

      <Bell size={18} />
      <div className="w-8 h-8 rounded-full bg-gray-300" />
    </header>
  );
}