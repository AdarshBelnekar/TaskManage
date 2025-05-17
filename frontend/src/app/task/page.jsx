// app/board/page.js
'use client';

import React, { useState } from 'react';
import { TaskCar } from '@/components/TaskCar';
import { TaskCards } from '@/components/TaskCards';
import { TaskList } from '@/components/TaskList';
import { OverdueTask } from '@/components/OverdueTask';
import { FaBackspace, FaBackward, FaHome, FaTasks, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';


const tasks = {
  



  todo: [
    {
      title: 'Hero section',
      description: 'Create a design system for a hero section.',
      tag: 'Design System',
      assignees: ['VH', 'AS'],
      priority: 'High',
      status: 'To Do',
      dueDate: '2025-05-10',
    },
    {
      title: 'Typography change',
      description: 'Modify typography on 6 screens.',
      tag: 'Typography',
      assignees: ['ML'],
      priority: 'Medium',
      status: 'To Do',
      dueDate: '2025-05-18',
    },
  ],
  inProgress: [
    {
      title: 'Implement design screens',
      description: 'Implement 6 design screens.',
      tag: 'Development',
      assignees: ['WT', 'IK'],
      priority: 'High',
      status: 'In Progress',
      dueDate: '2025-05-15',
    },
  ],
  done: [
    {
      title: 'Fix bugs in the CSS code',
      description: 'Fix CSS bugs.',
      tag: 'Development',
      assignees: ['HI', 'LT'],
      priority: 'Low',
      status: 'Done',
      dueDate: '2025-05-10',
    },
  ],
};

export default function BoardPage() {
 const router = useRouter();


  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('title');

   

  const priorityRank = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  const filterAndSort = (taskArray) => {
    return taskArray
      .filter((task) => {
        const search = searchTerm.toLowerCase();
        return (
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search) ||
          task.tag.toLowerCase().includes(search)
        );
      })
      .sort((a, b) => {
        const multiplier = sortOrder === 'asc' ? 1 : -1;

        if (sortBy === 'title') {
          return a.title.localeCompare(b.title) * multiplier;
        } else if (sortBy === 'priority') {
          return (priorityRank[a.priority] - priorityRank[b.priority]) * multiplier;
        } else if (sortBy === 'status') {
          return a.status.localeCompare(b.status) * multiplier;
        }

        return 0;
      });
  };

  const taskCounts = {
    todo: tasks.todo.length,
    inProgress: tasks.inProgress.length,
    done: tasks.done.length,
  };

  const today = new Date().toISOString().split('T')[0];
  const allTasks = [...tasks.todo, ...tasks.inProgress];
  const overdueTasks = allTasks.filter(
    (task) => task.dueDate && task.dueDate < today
  );

 
  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      <div className="flex justify-between mb-10">
        <button onClick={() => router.push("/")}><FaHome className=' text-3xl'/></button>
        
        <div className="bg-black text-white px-8 py-3 rounded-full shadow-md text-base sm:text-lg font-semibold text-center">
          Task Dashboard
        </div>
        <button
        
        className='   text-black p-2  rounded-full text-3xl'> <FaUser/></button>
      </div>

      <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
        <TaskList />
        <div>
          <h2 className="mt-10 text-xl font-semibold">Tasks Assigned</h2>
          <TaskCards counts={taskCounts} />
        </div>

        <div className="mb-4 sm:mb-6 p-4 flex gap-4 flex-wrap items-center">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full sm:w-[200px] border border-gray-300 rounded-md px-4 py-2 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border border-gray-300 rounded-md px-2 py-2 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Sort by Title</option>
            <option value="priority">Sort by Priority</option>
            <option value="status">Sort by Status</option>
          </select>
          <select
            className="border border-gray-300 rounded-md px-2 py-2 text-sm"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Asc ↑</option>
            <option value="desc">Desc ↓</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-100 p-3 rounded-2xl shadow-gray-50 max-h-[80vh] overflow-hidden">
            <h2 className="font-semibold text-lg mb-3">To do</h2>
            <div className="space-y-4 overflow-y-auto pr-1 max-h-[65vh] scrollbar-hide">
              {filterAndSort(tasks.todo).map((task, idx) => (
                <TaskCar key={idx} task={task} />
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-2xl shadow-gray-50 max-h-[80vh] overflow-hidden">
            <h2 className="font-semibold text-lg mb-3">In Progress</h2>
            <div className="space-y-4 overflow-y-auto pr-1 max-h-[65vh] scrollbar-hide">
              {filterAndSort(tasks.inProgress).map((task, idx) => (
                <TaskCar key={idx} task={task} />
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-2xl shadow-gray-50 max-h-[80vh] overflow-hidden">
            <h2 className="font-semibold text-lg mb-3">Done</h2>
            <div className="space-y-4 overflow-y-auto pr-1 max-h-[65vh] scrollbar-hide">
              {filterAndSort(tasks.done).map((task, idx) => (
                <TaskCar key={idx} task={task} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <h2 className="mt-10 text-xl font-semibold">Overdue Tasks</h2>
      <OverdueTask tasks={overdueTasks} />
    </div>
    
  );
}
