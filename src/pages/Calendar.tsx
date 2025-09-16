import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, CalendarIcon, ClockIcon, FileTextIcon, UsersIcon } from 'lucide-react';
const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // Mock events data
  const events = [{
    id: 'e1',
    title: 'Advisor Meeting',
    date: new Date(2024, 1, 15),
    time: '10:00 AM - 11:00 AM',
    type: 'meeting',
    description: 'Weekly progress review with Dr. Smith'
  }, {
    id: 'e2',
    title: 'Research Draft Due',
    date: new Date(2024, 1, 20),
    type: 'deadline',
    description: 'Submit initial research findings draft'
  }, {
    id: 'e3',
    title: 'Department Seminar',
    date: new Date(2024, 1, 22),
    time: '2:00 PM - 4:00 PM',
    type: 'event',
    description: 'Attend department research seminar'
  }, {
    id: 'e4',
    title: 'Committee Meeting',
    date: new Date(2024, 1, 25),
    time: '1:00 PM - 2:30 PM',
    type: 'meeting',
    description: 'Present progress to thesis committee'
  }, {
    id: 'e5',
    title: 'Methodology Chapter Due',
    date: new Date(2024, 1, 28),
    type: 'deadline',
    description: 'Submit final methodology chapter'
  }];
  const getMonthData = (year, month) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    const days = [];
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };
  const days = getMonthData(currentMonth.getFullYear(), currentMonth.getMonth());
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  const isToday = date => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };
  const getEventsForDate = date => {
    if (!date) return [];
    return events.filter(event => event.date.getDate() === date.getDate() && event.date.getMonth() === date.getMonth() && event.date.getFullYear() === date.getFullYear());
  };
  const getEventTypeColor = type => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-500';
      case 'deadline':
        return 'bg-red-500';
      case 'event':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateEvents = getEventsForDate(selectedDate);
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-500">Manage your deadlines and meetings</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <PlusIcon size={16} />
          <span>Add Event</span>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 flex items-center justify-between bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <div className="flex items-center space-x-2">
              <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-200">
                <ChevronLeftIcon size={20} />
              </button>
              <button onClick={() => setCurrentMonth(new Date())} className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-md">
                Today
              </button>
              <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-200">
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 text-center py-2 border-b bg-gray-50">
            {weekdays.map(day => <div key={day} className="text-xs font-medium text-gray-500">
                {day}
              </div>)}
          </div>
          <div className="grid grid-cols-7 h-full">
            {days.map((day, index) => <div key={index} className={`min-h-[100px] p-1 border-t border-l ${index % 7 === 6 ? 'border-r' : ''} ${index >= 35 ? 'border-b' : ''} relative`} onClick={() => day && setSelectedDate(day)}>
                {day && <>
                    <div className={`h-6 w-6 flex items-center justify-center rounded-full text-sm ${isToday(day) ? 'bg-blue-600 text-white' : day.getMonth() === currentMonth.getMonth() ? 'text-gray-900' : 'text-gray-400'} ${selectedDate && day.getDate() === selectedDate.getDate() && day.getMonth() === selectedDate.getMonth() && day.getFullYear() === selectedDate.getFullYear() && !isToday(day) ? 'bg-blue-100' : ''}`}>
                      {day.getDate()}
                    </div>
                    <div className="mt-1 space-y-1">
                      {getEventsForDate(day).map((event, eventIndex) => <div key={event.id} className={`${getEventTypeColor(event.type)} h-1.5 rounded-full mx-1`} title={event.title}></div>)}
                    </div>
                  </>}
              </div>)}
          </div>
        </div>
        {/* Event details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {selectedDate.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric'
            })}
            </h2>
          </div>
          {selectedDateEvents.length === 0 ? <div className="text-center py-12">
              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                <CalendarIcon size={24} className="text-gray-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                No events scheduled
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                This day is clear. Add a new event to get started.
              </p>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <PlusIcon size={16} className="mr-1" />
                Add Event
              </button>
            </div> : <div className="space-y-4">
              {selectedDateEvents.map(event => <div key={event.id} className="border rounded-lg overflow-hidden">
                  <div className={`${getEventTypeColor(event.type)} h-1`}></div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${event.type === 'meeting' ? 'bg-blue-100 text-blue-800' : event.type === 'deadline' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                    </div>
                    {event.time && <div className="flex items-center mt-2 text-xs text-gray-500">
                        <ClockIcon size={12} className="mr-1" />
                        <span>{event.time}</span>
                      </div>}
                    <p className="mt-2 text-sm text-gray-600">
                      {event.description}
                    </p>
                    <div className="mt-3 pt-3 border-t flex justify-end space-x-2">
                      <button className="text-xs text-gray-500 hover:text-gray-700">
                        Edit
                      </button>
                      <button className="text-xs text-red-500 hover:text-red-700">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>}
          <div className="mt-6 border-t pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Upcoming Events
            </h3>
            <div className="space-y-3">
              {events.filter(event => event.date >= new Date()).sort((a, b) => a.date - b.date).slice(0, 3).map(event => <div key={event.id} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                    <div className={`w-2 h-2 rounded-full ${getEventTypeColor(event.type)} mr-3`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {event.date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                        {event.time ? ` • ${event.time}` : ''}
                      </p>
                    </div>
                  </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Calendar;