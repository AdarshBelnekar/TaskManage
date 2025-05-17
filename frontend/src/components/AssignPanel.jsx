'use client';

import React, { useState } from 'react';

export const AddTaskPanel = ({ users = [], onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUser = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleCreate = () => {
    if (!title || !dueDate || !description) return;

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      status,
      assignees: selectedUsers,
    };

    onCreate(newTask);
    onClose();
  };

  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 transition-transform duration-300 transform translate-x-0 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Create New Task</h2>
        <button onClick={onClose} className="text-xl font-bold">&times;</button>
      </div>

      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter task title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            rows={3}
            placeholder="Describe the task..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Assign Users</label>
          {users.length === 0 && <p className="text-gray-500">No users available</p>}
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user}
                className={`cursor-pointer px-3 py-2 rounded-md border ${
                  selectedUsers.includes(user)
                    ? 'bg-blue-600 text-white'
                    : 'border-gray-300'
                }`}
                onClick={() => toggleUser(user)}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 border-t flex justify-end">
        <button
          onClick={handleCreate}
          className="bg-black text-white px-4 py-2 rounded-md disabled:opacity-50"
          disabled={!title || !description || !dueDate}
        >
          Create Task
        </button>
      </div>
    </div>
  );
};
