import React from 'react';

const NotificationSettingsDropdown: React.FC = () => {
  return (
    <div className="absolute left-full top-0 ml-0.5 bg-indigo-800 bg-opacity-95 rounded-md shadow-lg p-1 w-64">
      <div className="p-2 text-sm text-indigo-100 font-medium border-b border-indigo-700">
        Notification Settings
      </div>
      
      <div className="py-1">
        {[
          'All messages',
          'Only @mentions',
          'Voters',
          'Nothing'
        ].map((option, index) => (
          <label key={index} className="flex items-center px-4 py-2 hover:bg-indigo-700 cursor-pointer">
            <div className="mr-3 h-5 w-5 rounded-full border-2 border-indigo-400 flex items-center justify-center">
              {index === 0 && (
                <div className="h-3 w-3 rounded-full bg-indigo-400"></div>
              )}
            </div>
            <span className="text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettingsDropdown;