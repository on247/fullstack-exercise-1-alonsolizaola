import { Plus, ChevronDown } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">OnPoint Studio</span>
        <ChevronDown size={16} />
      </div>

      <button className="bg-purple-600 text-white rounded-lg py-2 flex items-center justify-center gap-2">
        <Plus size={16} /> Add New
      </button>

      <nav className="space-y-2">
        {[
          "Dashboard",
          "Inbox",
          "Teams",
          "Analytics",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <span>{item}</span>
            {item === "Inbox" && (
              <span className="bg-purple-100 text-purple-600 px-2 rounded-full">3</span>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Projects</span>
          <Plus size={14} />
        </div>
        <ul className="space-y-1">
          {["Website Redesign", "Mobile App", "Brand Kit"].map((p) => (
            <li key={p} className="pl-3 py-1 hover:bg-gray-100 rounded">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}