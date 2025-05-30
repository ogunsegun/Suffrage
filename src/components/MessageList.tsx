import React from 'react';
import { MessageSquare, Reply, Share, Bookmark, Smile } from 'lucide-react';

const MessageList: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <img 
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Johnson sam" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h4 className="font-medium text-white">Johnson sam</h4>
            <span className="ml-2 text-xs text-indigo-300">Admin</span>
            <span className="ml-2 text-xs text-indigo-400">20/05/2025 10:12</span>
          </div>
          <p className="text-white font-medium mt-1">Welcome to the Future of Voting: E-Election Platform</p>
          <p className="text-indigo-200 mt-2">
            Welcome to our E-Election Portal, where technology meets democracy. This platform is designed to make the voting 
            process simple, secure, transparent, and accessible to all eligible voters—anytime, anywhere.
          </p>
          <p className="text-indigo-200 mt-2">With our electronic voting system, you can:</p>
          <ul className="mt-1 text-indigo-200 list-disc list-inside">
            <li>Register and verify your voter status</li>
            <li>Cast your vote online securely</li>
            <li>Track election updates in real-time</li>
            <li>Access results transparently and instantly</li>
          </ul>
          
          <div className="flex space-x-3 mt-3">
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Smile className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Reply className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Share className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-indigo-300 my-6">
        14 May 2025
      </div>
      
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <img 
            src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Luis Wood" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h4 className="font-medium text-white">Luis Wood</h4>
            <span className="ml-2 text-xs text-indigo-400">20/05/2025 10:12</span>
          </div>
          <p className="text-indigo-200 mt-1">
            I can't login with my Voter's card
          </p>
          
          <div className="flex space-x-3 mt-3">
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Smile className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Reply className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Share className="h-5 w-5" />
            </button>
            <button className="text-indigo-400 hover:text-white transition-colors">
              <Bookmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageList;