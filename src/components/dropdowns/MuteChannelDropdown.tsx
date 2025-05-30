import React from 'react';

const MuteChannelDropdown: React.FC = () => {
  return (
    <div className="absolute left-full top-0 ml-0.5 bg-indigo-800 bg-opacity-95 rounded-md shadow-lg p-1 w-64">
      <div className="p-2 text-sm text-indigo-100 font-medium border-b border-indigo-700">
        Mute Channel
      </div>
      
      <div className="py-1">
        {[
          'For 30 Minutes',
          'For 1 Hour',
          'For 24 Hours',
          'For 7 Days',
          'Until I turn it back on'
        ].map((option, index) => (
          <button
            key={index}
            className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MuteChannelDropdown;