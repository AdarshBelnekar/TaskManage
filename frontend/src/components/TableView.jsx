import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const TableView = () => {
    const [selectedAssignee, setSelectedAssignee] = useState("John Doe");
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full table-auto text-sm text-left">
                  <thead className="bg-[#181818] text-white" >
                    <tr>
                      <th className="px-6 py-3">ID</th>
                      <th className="px-6 py-3">Title</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Priority</th>
                      <th className="px-6 py-3">Assignee</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Task Example</td>
                      <td className="px-6 py-4">Description of task</td>
                      <td className="px-6 py-4">In Progress</td>
                      <td className="px-6 py-4">High</td>
                      <td className="px-6 py-4">{selectedAssignee}</td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 transition">
                          <FaEdit />
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 transition">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
  )
}

export default TableView
