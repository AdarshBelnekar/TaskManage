// components/TaskCards.js
export const TaskCards = ({ counts }) => {
  const tasks = [
        { count: counts.todo, label: "Incomplete", color: "from-pink-500 to-pink-700" },
    { count: counts.inProgress, label: "In Progress", color: "from-blue-400 to-blue-600" },
    { count: counts.done, label: "Complete", color: "from-green-400 to-green-700" },


  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {tasks.map((task, idx) => (
        <div
          key={idx}
          className={`w-full p-4 rounded-xl text-white bg-gradient-to-br ${task.color}`}
        >
          <div className="text-3xl font-bold">{task.count.toString().padStart(2, '0')}</div>
          <div className="text-sm mt-2">{task.label}</div>
        </div>
      ))}
    </div>
  );
};
