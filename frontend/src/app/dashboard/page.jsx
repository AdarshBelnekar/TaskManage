import { OverdueTask } from "@/components/OverdueTask";
import { ProgressCard } from "@/components/ProgressCard";
import { TaskCards } from "@/components/TaskCards";
import { TaskList } from "@/components/TaskList";
import { FaParachuteBox } from "react-icons/fa";

export default function Dashboard() {
  return (
    <main className="px-4 py-6 sm:px-6 md:px-12 lg:px-24 xl:px-40 max-w-7xl mx-auto">
      {/* Navbar */}
      <div className="flex justify-center mb-10">
        <div className="bg-black text-white px-8 py-3 rounded-full shadow-md text-base sm:text-lg font-semibold text-center">
          Task Dashboard
        </div>
      </div>

      {/* Task Overview Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl md:text-2xl">Dashboard</h2>
        <button ><FaParachuteBox/></button>
      </div>

      {/* Task Overview Cards */}
      <TaskCards />

      {/* Assigned Task Section */}
      <h2 className="mt-10 text-xl font-semibold">Tasks Assigned </h2>
      <TaskList />

      <h2 className="mt-10 text-xl font-semibold">Overdue Tasks</h2>
      <ProgressCard/>
      <OverdueTask />
    </main>
  );
}
