import { FaAd, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { TaskCards } from './TaskCards';

export const TaskCar = ({ task }) => {
  const priorityColor =
    task.priority === 'High'
      ? 'text-red-600 font-semibold'
      : task.priority === 'Low'
      ? 'text-blue-600 font-semibold'
      : 'text-Orange-600'; // Default color for Medium or undefined

  return (
    <div className="bg-white relative rounded-xl shadow-sm p-4 space-y-3 border hover:shadow-md transition">
      {/* Edit & Delete Icons */}

      <div className="text-xs font-semibold text-gray-500 uppercase">{task.tag}</div>
      <div className="text-sm font-semibold">{task.title}</div>
      <p className="text-xs text-gray-500">{task.description}</p>

      {/* Priority */}
      {task.priority && (
        <p className={`text-xs ${priorityColor}`}>{task.priority}</p>
      )}

      <p className="text-xs text-gray-500">  Due Date :{task.dueDate}</p>

      {/* Assignees */}
      {task.assignees.length > 0 && (
        <div className="flex space-x-2 mt-2">
          {task.assignees.map((a, i) => (
            <div
              key={i}
              className="w-7 h-7 flex items-center justify-center bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
              title={a}
            >
              {a}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
