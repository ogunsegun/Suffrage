import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-8"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <button
        key={i}
        className={`h-8 w-8 rounded-full hover:bg-indigo-700 flex items-center justify-center transition-colors ${
          i === currentDate.getDate() ? 'bg-indigo-600' : ''
        }`}
      >
        {i}
      </button>
    );
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-indigo-800 px-3 py-2 rounded-md transition-colors"
      >
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-indigo-900 rounded-lg shadow-lg p-4 w-64 z-50">
          <div className="flex items-center justify-between mb-4">
            <button onClick={previousMonth} className="p-1 hover:bg-indigo-800 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button onClick={nextMonth} className="p-1 hover:bg-indigo-800 rounded-full">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
              <div key={index} className="text-xs font-medium text-indigo-300">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;