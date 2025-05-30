import React from 'react';
import { Users } from 'lucide-react';

const ChatPanel: React.FC = () => {
  return (
    <div className="hidden lg:block w-72 bg-indigo-950 h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b border-indigo-800 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Chat</h2>
        <button className="text-indigo-300 hover:text-white transition-colors">
          <Users className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-2 mb-6">
          <img 
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-20 object-cover rounded-md"
          />
          <img 
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-20 object-cover rounded-md"
          />
          <img 
            src="https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-20 object-cover rounded-md"
          />
          <img 
            src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-20 object-cover rounded-md"
          />
          <img 
            src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="User" 
            className="w-full h-20 object-cover rounded-md"
          />
        </div>
        
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex items-center p-2 hover:bg-indigo-900 rounded-md transition-colors cursor-pointer">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Johnson sam" 
                className="w-10 h-10 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-medium text-white">Johnson sam</h4>
                <p className="text-sm text-indigo-300">Welcome to our E-Election Portal</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;