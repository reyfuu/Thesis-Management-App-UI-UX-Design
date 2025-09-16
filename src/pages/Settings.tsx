import React, { useState } from 'react';
import { UserIcon, BellIcon, ShieldIcon, PaletteIcon, SaveIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  return <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">
          Manage your account preferences and settings
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <nav className="space-y-1">
              <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'profile' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                <UserIcon size={18} className="mr-3" />
                Profile Information
              </button>
              <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                <BellIcon size={18} className="mr-3" />
                Notifications
              </button>
              <button onClick={() => setActiveTab('security')} className={`w-full flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'security' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                <ShieldIcon size={18} className="mr-3" />
                Password & Security
              </button>
              <button onClick={() => setActiveTab('appearance')} className={`w-full flex items-center px-4 py-3 text-sm font-medium ${activeTab === 'appearance' ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                <PaletteIcon size={18} className="mr-3" />
                Appearance
              </button>
            </nav>
          </div>
        </div>
        {/* Content */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-sm p-6">
          {activeTab === 'profile' && <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Profile Information
              </h2>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-semibold mr-4">
                  JD
                </div>
                <div>
                  <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG or PNG. 1MB max size.
                  </p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="john.doe@university.edu" />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                    Department
                  </label>
                  <select id="department" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="Computer Science">
                    <option>Computer Science</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Arts & Humanities</option>
                    <option>Medicine</option>
                    <option>Law</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                  </label>
                  <textarea id="bio" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" defaultValue="PhD candidate researching machine learning applications in healthcare."></textarea>
                </div>
                <div className="pt-4 flex justify-end">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <SaveIcon size={16} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>}
          {activeTab === 'notifications' && <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Notification Settings
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Email Notifications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Deadline Reminders
                        </p>
                        <p className="text-xs text-gray-500">
                          Get notified before your deadlines
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Advisor Comments
                        </p>
                        <p className="text-xs text-gray-500">
                          Get notified when your advisor leaves feedback
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Document Updates
                        </p>
                        <p className="text-xs text-gray-500">
                          Get notified when documents are updated
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Meeting Reminders
                        </p>
                        <p className="text-xs text-gray-500">
                          Get reminded about upcoming meetings
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Notification Frequency
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                        Immediately
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                        Daily digest
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                        Weekly digest
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex justify-end">
                <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <SaveIcon size={16} />
                  <span>Save Preferences</span>
                </button>
              </div>
            </div>}
          {activeTab === 'security' && <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Password & Security
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Change Password
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input type="password" id="currentPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input type="password" id="newPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input type="password" id="confirmPassword" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="pt-2">
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <SaveIcon size={16} />
                        <span>Update Password</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Enable 2FA
                      </p>
                      <p className="text-xs text-gray-500">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Login Sessions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <CheckIcon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Current Session
                          </p>
                          <p className="text-xs text-gray-500">
                            Windows • Chrome • Last active now
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      <span>View all login activity</span>
                      <ChevronRightIcon size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>}
          {activeTab === 'appearance' && <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Appearance
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Theme
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border rounded-lg p-3 cursor-pointer bg-gray-50 ring-2 ring-blue-500">
                      <div className="h-20 bg-white rounded-md mb-2"></div>
                      <div className="text-center text-sm font-medium text-gray-900">
                        Light
                      </div>
                    </div>
                    <div className="border rounded-lg p-3 cursor-pointer">
                      <div className="h-20 bg-gray-800 rounded-md mb-2"></div>
                      <div className="text-center text-sm font-medium text-gray-900">
                        Dark
                      </div>
                    </div>
                    <div className="border rounded-lg p-3 cursor-pointer">
                      <div className="h-20 bg-gradient-to-b from-white to-gray-800 rounded-md mb-2"></div>
                      <div className="text-center text-sm font-medium text-gray-900">
                        System
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Color Accent
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 cursor-pointer ring-2 ring-offset-2 ring-blue-600"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-600 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-green-600 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-red-600 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-yellow-500 cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 cursor-pointer"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Dashboard Layout
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-3 cursor-pointer bg-gray-50 ring-2 ring-blue-500">
                      <div className="h-20 bg-white rounded-md mb-2 flex">
                        <div className="w-1/4 h-full bg-gray-200 rounded-l-md"></div>
                        <div className="w-3/4 h-full p-1">
                          <div className="h-1/3 bg-gray-100 mb-1 rounded-sm"></div>
                          <div className="h-1/3 bg-gray-100 mb-1 rounded-sm"></div>
                          <div className="h-1/3 bg-gray-100 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="text-center text-sm font-medium text-gray-900">
                        Default
                      </div>
                    </div>
                    <div className="border rounded-lg p-3 cursor-pointer">
                      <div className="h-20 bg-white rounded-md mb-2 flex flex-col">
                        <div className="h-1/4 w-full bg-gray-200 rounded-t-md"></div>
                        <div className="h-3/4 w-full p-1">
                          <div className="h-1/3 bg-gray-100 mb-1 rounded-sm"></div>
                          <div className="h-2/3 bg-gray-100 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="text-center text-sm font-medium text-gray-900">
                        Compact
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                    <SaveIcon size={16} />
                    <span>Save Preferences</span>
                  </button>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default Settings;