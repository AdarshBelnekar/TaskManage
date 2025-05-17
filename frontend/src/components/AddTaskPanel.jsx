'use client';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export function AddTaskPanel({ users = [], onClose, onCreate, task = null }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    if (task) {
      setTitle(task.title || '');
      setDescription(task.description || '');
      setDueDate(task.dueDate || '');
      setPriority(task.priority || 'Medium');
      setStatus(task.status || 'To Do');
      setSelectedUsers(task.assignees || []);
    }
  }, [task]);

  const toggleUser = (user) => {
    setSelectedUsers((prev) =>
      prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
    );
  };

  const handleCreate = async () => {
    if (!title || !dueDate) {
      toast.error('Title and Due Date are required!');
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      priority,
      status,
      assignees: selectedUsers,
    };

    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        toast.success("Task created successfully!");
        onCreate(); // Refresh task list
        onClose();
      } else {
        toast.error("Failed to create task!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred!");
    }
  };

  return (
    <div className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">{task ? 'Edit Task' : 'Create New Task'}</h2>
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
            placeholder="Enter task description"
            rows={3}
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
            <option>Done</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Assign Users</label>
          {users.length === 0 && <p className="text-gray-500">No users available</p>}
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {users.map((user) => (
              <li
                key={user}
                className={`cursor-pointer px-3 py-2 rounded-md border ${
                  selectedUsers.includes(user) ? 'bg-blue-600 text-white' : 'border-gray-300'
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
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-900"
        >
          {task ? 'Update Task' : 'Create Task'}
        </button>
      </div>
    </div>
  );
}