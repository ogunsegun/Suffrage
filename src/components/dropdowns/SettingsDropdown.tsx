import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import NotificationSettingsDropdown from './NotificationSettingsDropdown';
import SecuritySettingsDropdown from './SecuritySettingsDropdown';

const SettingsDropdown: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const handleSubmenuClick = (menu: string) => {
    if (activeSubmenu === menu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menu);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute left-full top-0 ml-0.5 bg-indigo-800 bg-opacity-95 rounded-md shadow-lg p-1 w-64"
    >
      <button 
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm"
        onClick={() => handleSubmenuClick('notifications')}
      >
        <span>Notification Settings</span>
        <ChevronRight className="h-4 w-4" />
      </button>
      
      <button 
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-indigo-700 rounded-sm"
        onClick={() => handleSubmenuClick('security')}
      >
        <span>Security Settings</span>
        <ChevronRight className="h-4 w-4" />
      </button>
      
      {activeSubmenu === 'notifications' && <NotificationSettingsDropdown />}
      {activeSubmenu === 'security' && <SecuritySettingsDropdown />}
    </div>
  );
};

export default SettingsDropdown;