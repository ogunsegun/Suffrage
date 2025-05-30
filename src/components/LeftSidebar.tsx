import React from 'react';
import { Plus } from 'lucide-react';

const LeftSidebar = () => {
  return (
    <div className="w-15 bg-indigo-950 h-full flex flex-col justify-between">
      <div>
        <div className="p-4 flex items-center justify-center">
          <div className="rounded-full bg-indigo-800 p-2">
            <img 
              src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg" 
              alt="Company Logo" 
              className="h-5 w-5 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="p-2 flex items-center justify-center">
          <div className="rounded-full bg-indigo-800 p-2 hover:bg-indigo-700 transition-colors cursor-pointer">
            <Plus className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;