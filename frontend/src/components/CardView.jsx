import React, { useState } from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

const CardView = () => {
    const [showAssigneeSelect, setShowAssigneeSelect] = useState(false);
    const [selectedAssignee, setSelectedAssignee] = useState("John Doe");
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Blank Card to Add Task */}
                  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-dashed border-gray-400">
                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full h-full flex items-center justify-center text-gray-500 hover:text-gray-700 text-xl"
                    >
                      <FaPlus />
                      Add New Task
                    </button>
                  </div>
      
                  {/* Sample Task Card */}
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold">Task Example</h3>
                      <p className="text-sm text-gray-500">ID: 1</p>
                    </div>
                    <p className="mt-2 text-gray-600">Description of task</p>
                    <div className="mt-4">
                      <p className="font-medium">Status: In Progress</p>
                      <p>Priority: High</p>
                      <p>Assignee: {selectedAssignee}</p>
                      <button
                        onClick={() => setShowAssigneeSelect((prev) => !prev)}
                        className="mt-2 text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      >
                        {showAssigneeSelect ? "Cancel" : "Assign"}
                      </button>
                      {showAssigneeSelect && (
                        <select
                          className="mt-2 block w-full p-1 border border-gray-300 rounded"
                          onChange={(e) => {
                            setSelectedAssignee(e.target.value);
                            setShowAssigneeSelect(false);
                          }}
                          value={selectedAssignee}
                        >
                          {users.map((user) => (
                            <option key={user} value={user}>
                              {user}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition">
                        <FaEdit />
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 transition">
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default CardView
