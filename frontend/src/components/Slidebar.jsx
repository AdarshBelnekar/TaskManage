// components/Sidebar.js

import Link from 'next/link';

export const Slidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-2xl  p-6 hidden md:block">
      <div className="text-2xl font-bold mb-10">Pro Manage</div>
      <nav className="space-y-6 text-gray-700">
        <Link href="#" className="flex items-center gap-3 font-medium text-blue-600">
          <p className="w-5 h-5" /> Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-3 font-medium">
          <p className="w-5 h-5" /> Board
        </Link>
        <Link href="#" className="flex items-center gap-3 font-medium">
          <p className="w-5 h-5" /> Analytics
        </Link>
        <Link href="#" className="flex items-center gap-3 font-medium">
          <p className="w-5 h-5" /> Settings
        </Link>
      </nav>
    </aside>
  );
};
