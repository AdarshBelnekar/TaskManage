// components/ProgressCards.js
export const ProgressCard= () => {
  const progresses = [
    {
      title: "Design",
      percent: 15,
      color: "blue-500",
      gradient: "from-blue-100 to-white",
    },
    {
      title: "Development",
      percent: 30,
      color: "orange-500",
      gradient: "from-orange-100 to-white",
    },
  ];

  return (
    <div className="space-y-4">
      {progresses.map((item, idx) => (
        <div key={idx} className="flex items-center bg-white rounded-xl shadow p-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-dotted border-gray-300 text-sm text-gray-700">
            {item.percent}%
          </div>
          <div className="ml-4 flex-1">
            <h3 className={`text-${item.color} font-semibold`}>In Progress</h3>
            <p className="text-xs text-gray-500">
              {item.title} task in progress with team collaboration.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
