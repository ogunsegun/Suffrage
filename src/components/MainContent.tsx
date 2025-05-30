import React from 'react';
import { Search, Bell, MessageSquare, Share2, PlusCircle } from 'lucide-react';
import MessageList from './MessageList';
import ActionButtons from './ActionButtons';

const MainContent: React.FC = () => {
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
            <h1 className="text-xl font-bold"># INEC (Independent National Electoral Commission)</h1>
            <div className="flex items-center text-sm text-indigo-200 mt-1">
              <span>12.3M Voters</span>
              <span className="mx-2">|</span>
              <span>General Election</span>
            </div>
          </div>
          
          <div className="relative rounded-full bg-indigo-800 flex items-center px-3 py-2 ml-4">
            <Search className="h-5 w-5 text-indigo-300 mr-2" />
            <input 
              type="text" 
              placeholder="Search INEC" 
              className="bg-transparent border-none outline-none text-sm text-white placeholder-indigo-300 w-40"
            />
          </div>
          
          <button className="ml-4 text-indigo-300 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex items-center mt-4 pb-2 border-b border-indigo-800">
          <button className="text-white mr-6 font-medium text-sm flex items-center">
            <span># General</span>
          </button>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="text-center mb-8">
          <h2 className="text-lg text-indigo-200">
            The independent, non-partisan agency responsible for conducting 
            federal elections and referendums.
          </h2>
          <p className="text-indigo-300 mt-2">
            Let<span className="text-white">vote</span> Getting Started guide.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                <Share2 className="h-5 w-5 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-medium">Share your Suffrage Server</h3>
            </div>
          </div>
          
          <div className="bg-indigo-950 bg-opacity-80 rounded-lg p-6 transform transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md flex items-center justify-center">
                <PlusCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="ml-3 text-lg font-medium">Add your App and link</h3>
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