import React from 'react';
import { ClockIcon, CalendarIcon, FileTextIcon, MessageSquareIcon, AlertCircleIcon, ArrowUpIcon, ArrowDownIcon, CheckCircleIcon } from 'lucide-react';
const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">
            Welcome back, John! Here's your thesis progress.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FileTextIcon size={16} />
          <span>New Document</span>
        </button>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Project Status" value="In Progress" icon={<FileTextIcon className="text-blue-600" />} indicator={<span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              75% Complete
            </span>} />
        <StatCard title="Next Deadline" value="Research Draft" icon={<CalendarIcon className="text-red-600" />} indicator={<span className="text-xs text-red-600">3 days left</span>} />
        <StatCard title="Advisor Feedback" value="2 New Comments" icon={<MessageSquareIcon className="text-purple-600" />} indicator={<span className="text-xs text-gray-500">Updated 2h ago</span>} />
        <StatCard title="Tasks" value="4 Pending" icon={<CheckCircleIcon className="text-green-600" />} indicator={<span className="text-xs text-gray-500">12 completed</span>} />
      </div>
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project progress */}
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Thesis Progress
            </h2>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="space-y-4">
            <ProgressItem title="Research Phase" progress={100} status="Completed" date="Oct 15, 2023" />
            <ProgressItem title="Literature Review" progress={100} status="Completed" date="Dec 10, 2023" />
            <ProgressItem title="Methodology" progress={75} status="In Progress" date="Feb 28, 2024" />
            <ProgressItem title="Data Collection" progress={30} status="In Progress" date="Apr 15, 2024" />
            <ProgressItem title="Analysis & Results" progress={0} status="Not Started" date="May 30, 2024" />
            <ProgressItem title="Conclusion" progress={0} status="Not Started" date="Jul 15, 2024" />
          </div>
        </div>
        {/* Activity & Deadlines */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <ActivityItem icon={<MessageSquareIcon size={16} className="text-purple-600" />} title="New comment from Dr. Smith" time="2 hours ago" description="Please revise the methodology section..." />
              <ActivityItem icon={<FileTextIcon size={16} className="text-blue-600" />} title="You uploaded a new document" time="Yesterday" description="Literature_Review_v2.pdf" />
              <ActivityItem icon={<CheckCircleIcon size={16} className="text-green-600" />} title="Completed research milestone" time="3 days ago" description="Data collection plan approved" />
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800">
              View all activity
            </button>
          </div>
          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming Deadlines
            </h2>
            <div className="space-y-3">
              <DeadlineItem title="Research Draft Submission" date="Feb 20, 2024" urgent={true} />
              <DeadlineItem title="Advisor Meeting" date="Feb 25, 2024" urgent={false} />
              <DeadlineItem title="Methodology Chapter Due" date="Feb 28, 2024" urgent={false} />
              <DeadlineItem title="Mid-term Presentation" date="Mar 15, 2024" urgent={false} />
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-800">
              View all deadlines
            </button>
          </div>
        </div>
      </div>
    </div>;
};
// Helper components
const StatCard = ({
  title,
  value,
  icon,
  indicator
}) => <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold mt-1 text-gray-900">{value}</h3>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="mt-3">{indicator}</div>
  </div>;
const ProgressItem = ({
  title,
  progress,
  status,
  date
}) => {
  const getStatusColor = () => {
    if (status === 'Completed') return 'text-green-600';
    if (status === 'In Progress') return 'text-yellow-600';
    return 'text-gray-500';
  };
  return <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <span className={`text-xs font-medium ${getStatusColor()}`}>
          {status}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`h-2 rounded-full ${progress === 100 ? 'bg-green-600' : 'bg-blue-600'}`} style={{
        width: `${progress}%`
      }}></div>
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-500">{progress}% complete</span>
        <span className="text-xs text-gray-500">Due: {date}</span>
      </div>
    </div>;
};
const ActivityItem = ({
  icon,
  title,
  time,
  description
}) => <div className="flex gap-3">
    <div className="mt-0.5">{icon}</div>
    <div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  </div>;
const DeadlineItem = ({
  title,
  date,
  urgent
}) => <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${urgent ? 'bg-red-500' : 'bg-blue-500'}`}></div>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">Due {date}</p>
      </div>
    </div>
    <CalendarIcon size={16} className="text-gray-400" />
  </div>;
export default Dashboard;