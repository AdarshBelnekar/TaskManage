"use client";
import { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddTaskPanel } from "./AddTaskPanel";

export const TaskList = () => {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [tasks, setTasks] = useState([]);

  // ✅ Move fetchTasks outside useEffect
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // ✅ Call fetchTasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (taskData) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        toast.success("Task added successfully!");
        fetchTasks(); // ✅ Now properly accessible
      } else {
        toast.error("Failed to add task!");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error("An error occurred!");
    }
  };

 const editTask = async (taskId, updatedTask) => {
  try {
    const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    if (response.ok) {
      toast.success("Task updated successfully!");
      
      // ✅ Update the task directly in the state
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === taskId ? { ...task, ...updatedTask } : task))
      );

      setShowForm(false);
      setEditIndex(null);
    } else {
      toast.error("Failed to update task!");
    }
  } catch (error) {
    console.error("Error updating task:", error);
    toast.error("An error occurred!");
  }
};

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.info("Task deleted!");
        fetchTasks(); // ✅ Now properly accessible
      } else {
        toast.error("Failed to delete task!");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("An error occurred!");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl md:text-2xl">Tasks Created By You</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-400 p-2 text-white rounded-full"
          aria-label="Add Task"
        >
          <FaPlus />
        </button>
      </div>

      <div className="mt-4 space-y-4 max-h-64 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="p-4 rounded-xl shadow border border-amber-100 bg-white flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold text-sm mb-1">{task.title}</h3>
              <p className="text-xs text-gray-600 mb-1"><strong>Description:</strong> {task.description || "N/A"}</p>
              <p className="text-xs text-gray-600 mb-1"><strong>Priority:</strong> {task.priority}</p>
              <p className="text-xs text-gray-600 mb-1"><strong>Status:</strong> {task.status}</p>
              <p className="text-xs text-gray-600 mb-1"><strong>Due Date:</strong> {task.dueDate}</p>
              <p className="text-xs text-gray-600 mb-1"><strong>Assigned By:</strong> {task.assignedBy}</p>
              <p className="text-xs text-gray-600"><strong>Assignees:</strong> {task.assignees?.join(", ") || "None"}</p>
            </div>

            <div className="flex flex-col gap-2 ml-4">
              <button
                onClick={() => { setEditIndex(task._id); setShowForm(true); }}
                className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition"
                aria-label={`Edit ${task.title}`}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="px-3 py-1 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 transition"
                aria-label={`Delete ${task.title}`}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <AddTaskPanel
          users={["John", "Emma", "Sophia", "David", "Lisa", "Tom"]}
          onCreate={(task) => editIndex ? editTask(editIndex, task) : addTask(task)}
          onClose={() => setShowForm(false)}
          task={editIndex !== null ? tasks.find(t => t._id === editIndex) : null}
        />
      )}
    </>
  );
};