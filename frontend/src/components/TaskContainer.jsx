import React, { useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

export function TaskContainer({ task, onDelete, onAssignClick }) {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete task "${task.title}"?`)) {
      onDelete(task);
      toast.success('Task deleted');
    }
  };

  return (
    <div className="bg-white relative rounded-xl shadow-sm p-4 space-y-3 border hover:shadow-md transition">
      {/* Edit & Delete Icons */}
      <div className="absolute top-2 right-2 flex space-x-2 text-gray-400">
        <button className="text-blue-500 hover:text-blue-400 cursor-pointer" title="Edit task">
          <FaEdit size={14} />
        </button>
        <button
          onClick={handleDelete}
          className="text-red-500 cursor-pointer"
          title="Delete task"
        >
          <FaTrash size={14} />
        </button>
      </div>

      <div className="text-xs font-semibold text-gray-500 uppercase">{task.tag}</div>
      <div className="text-sm font-semibold">{task.title}</div>
      <p className="text-xs text-gray-500">{task.description}</p>

      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => onAssignClick(task)}
          className="w-7 h-7 flex items-center justify-center bg-green-100 text-green-700 text-xs font-semibold rounded-full cursor-pointer"
          title="Assign users"
        >
          <FaPlus />
        </button>
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
    </div>
  );
}
