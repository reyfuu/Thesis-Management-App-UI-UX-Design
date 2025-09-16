import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboardIcon, FileTextIcon, CalendarIcon, SettingsIcon, MenuIcon, XIcon, GraduationCapIcon } from 'lucide-react';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navItems = [{
    name: 'Dashboard',
    path: '/',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    name: 'Projects',
    path: '/projects',
    icon: <FileTextIcon size={20} />
  }, {
    name: 'Calendar',
    path: '/calendar',
    icon: <CalendarIcon size={20} />
  }, {
    name: 'Settings',
    path: '/settings',
    icon: <SettingsIcon size={20} />
  }];
  return <>
      {/* Mobile menu button */}
      <button className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-md bg-white shadow-md" onClick={toggleSidebar}>
        {isOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>
      {/* Sidebar backdrop for mobile */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar} />}
      {/* Sidebar */}
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-20 w-64 transform transition-transform duration-300 ease-in-out bg-white border-r border-gray-200 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b flex items-center gap-3">
          <GraduationCapIcon size={32} className="text-blue-600" />
          <div>
            <h1 className="text-lg font-bold text-gray-900">ThesisTrack</h1>
            <p className="text-xs text-gray-500">
              Manage your academic journey
            </p>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => <NavLink key={item.path} to={item.path} className={({
          isActive
        }) => `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100'}`} onClick={() => setIsOpen(false)} end={item.path === '/'}>
              <span className="mr-3">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>)}
        </nav>
        {/* User profile */}
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
              JD
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Computer Science</p>
            </div>
          </div>
        </div>
      </aside>
    </>;
};
export default Sidebar;