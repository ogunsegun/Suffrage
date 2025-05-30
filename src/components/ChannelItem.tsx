import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import ChannelDropdown from './dropdowns/ChannelDropdown';

interface ChannelItemProps {
  channel: {
    name: string;
    id: string;
  };
  icon: React.ReactNode;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ channel, icon }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="group relative flex items-center px-3 py-2 hover:bg-indigo-800 hover:bg-opacity-30 rounded-md">
      <div className="flex items-center flex-1">
        {icon}
        <span className="text-sm text-gray-300">{channel.name}</span>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          setIsDropdownOpen(!isDropdownOpen);
        }}
        className="opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
      >
        <MoreVertical className="h-4 w-4 text-gray-400 hover:text-white" />
      </button>
      
      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute right-0 top-full z-50">
          <ChannelDropdown onClose={() => setIsDropdownOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default ChannelItem;