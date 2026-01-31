"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectHeader from "@/components/ProjectHeader";
import KanbanBoard from "@/components/KanbanBoard";

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ProjectHeader />
        <KanbanBoard />
      </div>
    </div>
  );
}