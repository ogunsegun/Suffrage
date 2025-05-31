import React, { useState } from 'react';
import {
  Search,
  Bell,
  MessageSquare,
  SettingsIcon,
  Share2,
  PlusCircle,
  Settings,
  CornerDownLeft,
  Pin,
  FileText,
} from 'lucide-react';
import MessageList from './MessageList';
import ActionButtons from './ActionButtons';

const tabs = [
  { label: '# General', value: 'Rules' },
  { label: 'Members', value: 'Members' },
  { label: 'Media', value: 'Media' },
  { label: 'Pins', value: 'Pins' },
  { label: 'Files', value: 'Files' },
];

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Rules');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Rules':
        return (
          <div>
            <div className="flex-1 overflow-x scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-300 py-4 py-6">
              <div className="text-center mb-8">
                <h2 className="text-lg text-indigo-200">
                  The independent, non-partisan agency responsible for
                  conducting federal elections and referendums.
                </h2>
                <p className="text-indigo-300 mt-2">
                  Let<span className="text-white">vote</span> Getting Started
                  guide.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                      <Share2 className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium">
                      Share your Suffrage Server
                    </h3>
                  </div>
                </div>

                <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                      <PlusCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium">
                      Add your App and link
                    </h3>
                  </div>
                </div>

                <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium">Create Channel</h3>
                  </div>
                </div>

                <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="ml-3 text-lg font-medium">Create Vote</h3>
                  </div>
                </div>
              </div>

              <div className="text-center text-sm text-indigo-300 mb-6">
                14 May 2025
              </div>

              <MessageList />
            </div>
            {/* <div className="fixed bottom-0 w-50 bg-indigo-900 p-4 border-t border-indigo-800 z-10">
              <div className="max-w-4xl mx-auto bg-indigo-800 rounded-lg flex items-center p-2">
                <input
                  type="text"
                  placeholder="Message #general"
                  className="flex-1 bg-transparent border-none outline-none text-white px-2"
                />
                <ActionButtons />
              </div>
            </div> */}{' '}
          </div>
        );
      case 'Members':
        return (
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold mb-2">Members</h3>
            <ul className="space-y-1">
              <li>John Doe</li>
              <li>Jane Smith</li>
              <li>Michael Johnson</li>
            </ul>
          </div>
        );
      case 'Media':
        return (
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold mb-2">Media</h3>
            <img
              src="https://via.placeholder.com/150"
              alt="sample"
              className="mb-2 rounded"
            />
            <video controls className="w-64 rounded">
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        );
      case 'Pins':
        return (
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold mb-2">Pinned Messages</h3>
            <p className="mb-2">📌 Don't forget the meeting at 3 PM.</p>
            <p>📌 Final version of the proposal uploaded.</p>
          </div>
        );
      case 'Files':
        return (
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold mb-2">Documents</h3>
            <ul className="space-y-1">
              <li>📄 Project_Plan.pdf</li>
              <li>📄 Team_List.xlsx</li>
              <li>📄 Guidelines.docx</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <header className="bg-indigo-900 border-b border-indigo-800 p-4">
        <div className="flex items-center">
          <div className="mr-4">
            <img
              src="https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="INEC logo"
              className="w-12 h-12 rounded-md object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold">
              # INEC (Independent National Electoral Commission)
            </h1>
            <div className="flex items-center text-sm text-indigo-200 mt-1">
              <span>12.3M Voters</span>
              <span className="mx-2">|</span>
              <span>General Election</span>
              <span className="mx-2">|</span>
              <span>
                <SettingsIcon className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              </span>
              <span className="mx-2">|</span>
              <span>
                <div className="flex items-center bg-indigo-700 rounded-full px-3 py-1">
                  <Search className="w-4 h-4 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search INEC"
                    className="bg-transparent text-sm text-white placeholder-gray-400 px-2 focus:outline-none"
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex justify-between items-center mt-4 border-t border-indigo-800 pt-3 px-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-4 text-sm font-medium">
              {tabs.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setActiveTab(value)}
                  className={`pb-1 ${
                    activeTab === value
                      ? 'border-b-2 border-white text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <div className="flex items-center bg-indigo-700 rounded-full px-2 py-1 h-8">
                <Search className="w-3 h-3 text-gray-300" />
                <input
                  type="text"
                  placeholder="Search General"
                  className="bg-transparent text-xs text-white placeholder-gray-400 px-1 focus:outline-none w-24 sm:w-32"
                />
              </div>
              <Bell className="w-4 h-4 cursor-pointer hover:text-gray-300" />
              <Settings className="w-4 h-4 cursor-pointer hover:text-gray-300" />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">{renderTabContent()}</div>

      <div className="bg-indigo-900 p-4 border-t border-indigo-800">
        <div className="bg-indigo-800 rounded-lg flex items-center p-2">
          <input
            type="text"
            placeholder="Message #general"
            className="flex-1 bg-transparent border-none outline-none text-white px-2"
          />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
