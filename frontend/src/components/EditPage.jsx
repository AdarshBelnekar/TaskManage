import React, { useState } from 'react';

const initialFormState = {
  title: '',
  description: '',
  tag: '',
  assignees: [],
};

export default function EditPage({ onClose, onCreate }) {
  const [form, setForm] = useState(initialFormState);
  const [assigneeInput, setAssigneeInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAssignee = () => {
    if (assigneeInput.trim() && !form.assignees.includes(assigneeInput.trim())) {
      setForm((prev) => ({
        ...prev,
        assignees: [...prev.assignees, assigneeInput.trim()],
      }));
      setAssigneeInput('');
    }
  };

  const handleRemoveAssignee = (assignee) => {
    setForm((prev) => ({
      ...prev,
      assignees: prev.assignees.filter((a) => a !== assignee),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert('Title is required');
      return;
    }
    onCreate(form);
    setForm(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Task title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Task description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tag</label>
        <input
          type="text"
          name="tag"
          value={form.tag}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Task tag/category"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Assignees</label>
        <div className="flex space-x-2 mb-2">
          <input
            type="text"
            value={assigneeInput}
            onChange={(e) => setAssigneeInput(e.target.value)}
            placeholder="Add assignee"
            className="flex-grow border border-gray-300 rounded-md p-2"
          />
          <button
            type="button"
            onClick={handleAddAssignee}
            className="bg-blue-500 text-white px-3 rounded-md"
          >
            Add
          </button>
        </div>
        <div className="flex space-x-2 flex-wrap">
          {form.assignees.map((a) => (
            <div
              key={a}
              className="flex items-center space-x-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full cursor-pointer"
              onClick={() => handleRemoveAssignee(a)}
              title="Click to remove"
            >
              <span>{a}</span>
              <span className="font-bold">&times;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white">
          Create
        </button>
      </div>
    </form>
  );
}
