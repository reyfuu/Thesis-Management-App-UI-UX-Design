import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, FilterIcon, SearchIcon, FileTextIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon, ClipboardIcon } from 'lucide-react';
const Projects = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  // Mock project data
  const projects = [{
    id: '1',
    title: 'Machine Learning for Predictive Analysis',
    status: 'in-progress',
    progress: 75,
    advisor: 'Dr. Sarah Smith',
    department: 'Computer Science',
    lastUpdated: '2 days ago',
    dueDate: 'May 15, 2024'
  }, {
    id: '2',
    title: 'Sustainable Urban Development Models',
    status: 'review',
    progress: 60,
    advisor: 'Dr. Michael Johnson',
    department: 'Urban Planning',
    lastUpdated: '1 week ago',
    dueDate: 'June 30, 2024'
  }, {
    id: '3',
    title: 'Quantum Computing Applications in Cryptography',
    status: 'completed',
    progress: 100,
    advisor: 'Dr. Robert Chen',
    department: 'Physics',
    lastUpdated: '1 month ago',
    dueDate: 'January 10, 2024'
  }, {
    id: '4',
    title: 'Impact of Social Media on Political Discourse',
    status: 'in-progress',
    progress: 45,
    advisor: 'Dr. Emily Williams',
    department: 'Political Science',
    lastUpdated: '3 days ago',
    dueDate: 'July 22, 2024'
  }, {
    id: '5',
    title: 'Biomarkers for Early Cancer Detection',
    status: 'review',
    progress: 80,
    advisor: 'Dr. James Thompson',
    department: 'Biomedical Sciences',
    lastUpdated: '5 days ago',
    dueDate: 'April 8, 2024'
  }];
  const filteredProjects = filterStatus === 'all' ? projects : projects.filter(project => project.status === filterStatus);
  const getStatusBadge = status => {
    switch (status) {
      case 'in-progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <ClockIcon size={12} className="mr-1" />
            In Progress
          </span>;
      case 'review':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <ClipboardIcon size={12} className="mr-1" />
            Under Review
          </span>;
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon size={12} className="mr-1" />
            Completed
          </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Unknown
          </span>;
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Thesis Projects</h1>
          <p className="text-gray-500">
            Manage and track all your academic projects
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusIcon size={16} />
          <span>New Project</span>
        </button>
      </div>
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative max-w-md">
            <input type="text" placeholder="Search projects..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 flex items-center">
              <FilterIcon size={16} className="mr-2" />
              Filter by:
            </span>
            <div className="flex space-x-1">
              <button onClick={() => setFilterStatus('all')} className={`px-3 py-1 text-sm rounded-md ${filterStatus === 'all' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                All
              </button>
              <button onClick={() => setFilterStatus('in-progress')} className={`px-3 py-1 text-sm rounded-md ${filterStatus === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                In Progress
              </button>
              <button onClick={() => setFilterStatus('review')} className={`px-3 py-1 text-sm rounded-md ${filterStatus === 'review' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                Under Review
              </button>
              <button onClick={() => setFilterStatus('completed')} className={`px-3 py-1 text-sm rounded-md ${filterStatus === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileTextIcon size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No projects found
            </h3>
            <p className="text-gray-500 mb-4">
              {filterStatus === 'all' ? "You haven't created any projects yet." : `You don't have any ${filterStatus.replace('-', ' ')} projects.`}
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <PlusIcon size={16} className="mr-2" />
              Create your first project
            </button>
          </div> : filteredProjects.map(project => <Link to={`/projects/${project.id}`} key={project.id} className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getStatusBadge(project.status)}
                    <span className="text-sm text-gray-500">
                      Last updated {project.lastUpdated}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-x-4 text-sm text-gray-500">
                    <span>Advisor: {project.advisor}</span>
                    <span>Dept: {project.department}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Due: </span>
                    <span className={`font-medium ${project.status === 'completed' ? 'text-green-600' : 'text-gray-900'}`}>
                      {project.dueDate}
                    </span>
                  </div>
                  <div className="w-32">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700">
                        {project.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${project.status === 'completed' ? 'bg-green-600' : project.status === 'review' ? 'bg-yellow-500' : 'bg-blue-600'}`} style={{
                  width: `${project.progress}%`
                }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>)}
      </div>
    </div>;
};
export default Projects;