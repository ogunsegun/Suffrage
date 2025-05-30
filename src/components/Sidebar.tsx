import React from 'react';
import { BarChart2, Settings, Users, Shield, Bell } from 'lucide-react';
import ChannelGroup from './ChannelGroup';
import Calendar from './Calendar';

const Sidebar = () => {
  return (
    <div className="w-55 bg-indigo-950 h-full flex flex-col justify-between">
      <div className="flex-1 overflow-x scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-300">
        {/* <div className="flex-1 overflow-visible scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-300"> */}

        <div className="p-4 space-y-4">
          <div className="flex items-center">
            <div className="rounded-full bg-indigo-800 p-2 mr-3">
              <BarChart2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold">Events</span>
          </div>

          <Calendar />
        </div>

        <div className="flex-1 overflow-visible">
          <ChannelGroup
            title="Text channel"
            channels={[{ name: 'General', id: 'text-general' }]}
          />

          <ChannelGroup
            title="Airing channel"
            channels={[{ name: 'General', id: 'airing-general' }]}
          />

          <ChannelGroup
            title="Live streaming channel"
            channels={[{ name: 'General', id: 'streaming-general' }]}
          />

          <ChannelGroup
            title="Election channel"
            channels={[{ name: 'General', id: 'election-general' }]}
          />
        </div>
      </div>

      <div className="p-4 border-t border-indigo-800">
        <div className="flex items-center mb-2">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1">
            <h3 className="font-medium">Johnson Sam</h3>
            <p className="text-sm text-indigo-300">Admin</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button className="p-2 hover:bg-indigo-800 rounded-lg transition-colors flex items-center justify-center">
              <Settings className="h-3 w-3" />
            </button>
            <button className="p-2 hover:bg-indigo-800 rounded-lg transition-colors flex items-center justify-center">
              <Shield className="h-3 w-3" />
            </button>
            <button className="p-2 hover:bg-indigo-800 rounded-lg transition-colors flex items-center justify-center">
              <Bell className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
