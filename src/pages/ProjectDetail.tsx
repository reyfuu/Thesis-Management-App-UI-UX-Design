import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon, CalendarIcon, FileTextIcon, MessageSquareIcon, ClockIcon, UsersIcon, BookmarkIcon, CheckCircleIcon, PlusIcon, FileIcon, PaperclipIcon, SendIcon, DownloadIcon, EditIcon, MoreHorizontalIcon, AlertCircleIcon } from 'lucide-react';
const ProjectDetail = () => {
  const {
    id
  } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  // Mock project data
  const project = {
    id,
    title: 'Machine Learning for Predictive Analysis',
    status: 'in-progress',
    progress: 75,
    description: 'This thesis explores advanced machine learning techniques for predictive analysis in healthcare settings, focusing on early disease detection and treatment optimization.',
    advisor: 'Dr. Sarah Smith',
    department: 'Computer Science',
    startDate: 'September 15, 2023',
    dueDate: 'May 15, 2024',
    lastUpdated: '2 days ago',
    documents: [{
      id: 'd1',
      name: 'Research Proposal',
      type: 'pdf',
      date: 'Sep 20, 2023',
      size: '1.2 MB'
    }, {
      id: 'd2',
      name: 'Literature Review',
      type: 'docx',
      date: 'Nov 15, 2023',
      size: '3.5 MB'
    }, {
      id: 'd3',
      name: 'Methodology Draft',
      type: 'docx',
      date: 'Jan 10, 2024',
      size: '2.8 MB'
    }, {
      id: 'd4',
      name: 'Data Collection Results',
      type: 'xlsx',
      date: 'Feb 5, 2024',
      size: '4.1 MB'
    }],
    milestones: [{
      id: 'm1',
      title: 'Research Proposal Approval',
      date: 'Oct 1, 2023',
      completed: true
    }, {
      id: 'm2',
      title: 'Literature Review Submission',
      date: 'Nov 30, 2023',
      completed: true
    }, {
      id: 'm3',
      title: 'Methodology Approval',
      date: 'Jan 15, 2024',
      completed: true
    }, {
      id: 'm4',
      title: 'Data Collection Completion',
      date: 'Feb 28, 2024',
      completed: false
    }, {
      id: 'm5',
      title: 'Analysis & Results Draft',
      date: 'Apr 10, 2024',
      completed: false
    }, {
      id: 'm6',
      title: 'Final Thesis Submission',
      date: 'May 15, 2024',
      completed: false
    }],
    comments: [{
      id: 'c1',
      user: 'Dr. Sarah Smith',
      role: 'Advisor',
      avatar: 'SS',
      text: 'The methodology section needs more detail on the validation approach. Please revise and highlight the statistical methods used.',
      date: 'Feb 10, 2024',
      time: '10:23 AM'
    }, {
      id: 'c2',
      user: 'John Doe',
      role: 'Student',
      avatar: 'JD',
      text: "I've updated the methodology section with more details on cross-validation and added the statistical significance tests as requested.",
      date: 'Feb 12, 2024',
      time: '3:45 PM'
    }, {
      id: 'c3',
      user: 'Dr. Sarah Smith',
      role: 'Advisor',
      avatar: 'SS',
      text: 'Much better. Now please expand the limitations section to address potential biases in the data collection process.',
      date: 'Feb 13, 2024',
      time: '9:15 AM'
    }],
    team: [{
      id: 'u1',
      name: 'John Doe',
      role: 'Student',
      avatar: 'JD'
    }, {
      id: 'u2',
      name: 'Dr. Sarah Smith',
      role: 'Primary Advisor',
      avatar: 'SS'
    }, {
      id: 'u3',
      name: 'Dr. Michael Johnson',
      role: 'Committee Member',
      avatar: 'MJ'
    }, {
      id: 'u4',
      name: 'Dr. Lisa Wong',
      role: 'Committee Member',
      avatar: 'LW'
    }]
  };
  // Determine status badge styling
  const getStatusBadge = () => {
    switch (project.status) {
      case 'in-progress':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <ClockIcon size={12} className="mr-1" />
            In Progress
          </span>;
      case 'review':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <AlertCircleIcon size={12} className="mr-1" />
            Under Review
          </span>;
      case 'completed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon size={12} className="mr-1" />
            Completed
          </span>;
      default:
        return null;
    }
  };
  return <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <a href="/projects" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-2">
            <ChevronLeftIcon size={16} className="mr-1" />
            Back to Projects
          </a>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h1>
            {getStatusBadge()}
          </div>
          <p className="text-gray-500">
            {project.department} • Last updated {project.lastUpdated}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <EditIcon size={16} />
            <span>Edit</span>
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <PlusIcon size={16} />
            <span>Add Document</span>
          </button>
        </div>
      </div>
      {/* Progress bar */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Overall Progress
            </h2>
            <p className="text-sm text-gray-500">
              {project.progress}% complete • Due {project.dueDate}
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-sm">
            <span className="text-gray-500">Started: </span>
            <span className="font-medium text-gray-900">
              {project.startDate}
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="h-3 rounded-full bg-blue-600" style={{
          width: `${project.progress}%`
        }}></div>
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          <button onClick={() => setActiveTab('overview')} className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <FileTextIcon size={18} className="mr-2" />
            Overview
          </button>
          <button onClick={() => setActiveTab('documents')} className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${activeTab === 'documents' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <FileIcon size={18} className="mr-2" />
            Documents
          </button>
          <button onClick={() => setActiveTab('milestones')} className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${activeTab === 'milestones' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <BookmarkIcon size={18} className="mr-2" />
            Milestones
          </button>
          <button onClick={() => setActiveTab('feedback')} className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${activeTab === 'feedback' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <MessageSquareIcon size={18} className="mr-2" />
            Feedback
          </button>
          <button onClick={() => setActiveTab('team')} className={`py-4 px-1 inline-flex items-center border-b-2 text-sm font-medium ${activeTab === 'team' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            <UsersIcon size={18} className="mr-2" />
            Team
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {activeTab === 'overview' && <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Project Description
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Information
                </h3>
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="w-36 text-sm font-medium text-gray-500">
                      Department:
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {project.department}
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="w-36 text-sm font-medium text-gray-500">
                      Primary Advisor:
                    </dt>
                    <dd className="text-sm text-gray-900">{project.advisor}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-36 text-sm font-medium text-gray-500">
                      Start Date:
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {project.startDate}
                    </dd>
                  </div>
                  <div className="flex">
                    <dt className="w-36 text-sm font-medium text-gray-500">
                      Due Date:
                    </dt>
                    <dd className="text-sm text-gray-900">{project.dueDate}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-36 text-sm font-medium text-gray-500">
                      Status:
                    </dt>
                    <dd className="text-sm text-gray-900">
                      {getStatusBadge()}
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Recent Documents
                </h3>
                <div className="space-y-2">
                  {project.documents.slice(0, 3).map(doc => <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3">
                          <FileTextIcon size={16} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {doc.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {doc.date} • {doc.size}
                          </p>
                        </div>
                      </div>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <DownloadIcon size={16} />
                      </button>
                    </div>)}
                  <button className="text-sm text-blue-600 hover:text-blue-800 mt-2">
                    View all documents
                  </button>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'documents' && <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Documents
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                <PlusIcon size={16} />
                <span>Upload</span>
              </button>
            </div>
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Type
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Size
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {project.documents.map(doc => <tr key={doc.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3">
                            <FileTextIcon size={16} />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {doc.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {doc.type.toUpperCase()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {doc.date}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {doc.size}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-500 hover:text-gray-700">
                            <DownloadIcon size={16} />
                          </button>
                          <button className="text-gray-500 hover:text-gray-700">
                            <MoreHorizontalIcon size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>}
        {activeTab === 'milestones' && <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Milestones
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                <PlusIcon size={16} />
                <span>Add Milestone</span>
              </button>
            </div>
            <ol className="relative border-l border-gray-200 ml-3">
              {project.milestones.map(milestone => <li key={milestone.id} className="mb-6 ml-6">
                  <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white ${milestone.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
                    {milestone.completed ? <CheckCircleIcon size={16} className="text-green-600" /> : <ClockIcon size={16} className="text-gray-400" />}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className={`flex items-center text-lg font-semibold ${milestone.completed ? 'text-green-600' : 'text-gray-900'}`}>
                      {milestone.title}
                      {milestone.completed && <span className="bg-green-100 text-green-800 text-xs font-medium ml-2 px-2.5 py-0.5 rounded">
                          Completed
                        </span>}
                    </h3>
                    <time className="text-sm font-normal text-gray-500">
                      {milestone.date}
                    </time>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    {!milestone.completed ? <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        <CheckCircleIcon size={14} />
                        Mark as Complete
                      </button> : <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                        <ClockIcon size={14} />
                        Mark as Incomplete
                      </button>}
                    <span className="text-gray-300">|</span>
                    <button className="text-sm text-gray-500 hover:text-gray-700">
                      Edit
                    </button>
                  </div>
                </li>)}
            </ol>
          </div>}
        {activeTab === 'feedback' && <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Advisor Feedback
            </h3>
            <div className="space-y-6">
              {project.comments.map(comment => <div key={comment.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                      {comment.avatar}
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-900">
                          {comment.user}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">
                          {comment.role}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {comment.date} at {comment.time}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{comment.text}</p>
                    </div>
                  </div>
                </div>)}
            </div>
            <div className="mt-6 border-t pt-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">
                Add your comment
              </h4>
              <div className="flex space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    JD
                  </div>
                </div>
                <div className="flex-1">
                  <div className="border rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                    <textarea rows={3} className="block w-full p-3 text-sm text-gray-700 border-0 focus:ring-0 rounded-lg" placeholder="Write your comment..."></textarea>
                    <div className="px-3 py-2 bg-gray-50 rounded-b-lg flex items-center justify-between">
                      <button className="p-1 rounded hover:bg-gray-100">
                        <PaperclipIcon size={16} className="text-gray-500" />
                      </button>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                        <SendIcon size={14} />
                        <span>Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>}
        {activeTab === 'team' && <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Project Team
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1">
                <PlusIcon size={16} />
                <span>Add Member</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.team.map(member => <div key={member.id} className="border rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                    {member.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>)}
            </div>
          </div>}
      </div>
    </div>;
};
export default ProjectDetail;