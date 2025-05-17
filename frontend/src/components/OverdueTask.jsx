// components/OverdueTask.js
'use client';
import React from 'react';

export const OverdueTask = ({ tasks = [] }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500 mt-2">No overdue tasks 🎉</p>;
  }

  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-red-50 border border-red-300 shadow-sm"
        >
          <h3 className="font-semibold text-base text-red-800 mb-1">
            {task.title}
          </h3>
          <p className="text-sm text-red-700">
            <strong>Assigned To:</strong> {task.assignees?.join(', ') || '—'}
          </p>
          <p className="text-sm text-red-700">
            <strong>Due Date:</strong> {task.dueDate}
          </p>
        </div>
      ))}
    </div>
  );
};
