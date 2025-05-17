export default function Navbar() {
    return (
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TaskTracker</div>
        <nav className="space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
        </nav>
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">U</div>
      </header>
    );
  }