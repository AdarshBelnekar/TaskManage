components/TaskTabs.js
export const TaskTab = () => (
  <div className="flex space-x-4 text-sm mb-4">
    {["Recently", "Today", "Upcoming", "Later"].map((tab, i) => (
      <span
        key={tab}
        className={`cursor-pointer ${tab === "Today" ? "text-pink-600 font-semibold border-b-2 border-pink-600" : "text-gray-400"}`}
      >
        {tab}
      </span>
    ))}
  </div>
);
