import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import SettingsDropdown from './SettingsDropdown';
import MuteChannelDropdown from './MuteChannelDropdown';

interface DropdownProps {
  onClose: () => void;
}

const ChannelDropdown: React.FC<DropdownProps> = ({ onClose }) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleSubmenuClick = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      <div className="bg-indigo-800 bg-opacity-95 rounded-md shadow-lg p-1 w-64">
        <div className="p-2 text-sm text-indigo-100 font-medium border-b border-indigo-700">
          # General
        </div>
        
        <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm">
          Invite to Channel
        </button>
        
        <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm">
          Copy Link
        </button>
        
        <button 
          className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm"
          onClick={() => handleSubmenuClick('settings')}
        >
          <span>Settings</span>
          <ChevronRight className="h-4 w-4" />
        </button>
        
        <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm">
          Duplicate Channel
        </button>
        
        <button className="flex items-center w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm">
          Edit Channel
        </button>
        
        <button 
          className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm"
          onClick={() => handleSubmenuClick('mute')}
        >
          <span>Mute Channel</span>
          <ChevronRight className="h-4 w-4" />
        </button>
        
        <button className="flex items-center w-full px-4 py-2 text-sm text-left text-red-400 hover:bg-indigo-700 rounded-sm">
          Delete Channel
        </button>
      </div>
      
      {activeSubmenu === 'settings' && <SettingsDropdown />}
      {activeSubmenu === 'mute' && <MuteChannelDropdown />}
    </div>
  );
};

export default ChannelDropdown;