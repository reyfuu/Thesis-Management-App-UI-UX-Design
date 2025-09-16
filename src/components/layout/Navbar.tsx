import React from 'react';
import { BellIcon, SearchIcon } from 'lucide-react';
const Navbar = () => {
  return <header className="bg-white border-b border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex-1">
          <div className="relative max-w-md">
            <input type="text" placeholder="Search projects, documents..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <BellIcon size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Semester 2</p>
              <p className="text-xs text-gray-500">2023/2024</p>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;