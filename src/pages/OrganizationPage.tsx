import React, { useState } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import ChatPanel from '../components/ChatPanel';
import { MessageCircle, X } from 'lucide-react';

const OrganizationPage: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex h-screen bg-indigo-900 bg-opacity-90 text-white overflow-hidden relative">
      <LeftSidebar />
      <Sidebar />
      <MainContent />

      {/* Chat Toggle Icon Button */}
      <button
        onClick={() => setIsChatOpen((prev) => !prev)}
        className="absolute bottom-20 right-2 z-50 bg-indigo-700 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-colors"
      >
        {isChatOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}
      </button>

      {/* Conditionally render ChatPanel */}
      {isChatOpen && <ChatPanel />}
    </div>
  );
};

export default OrganizationPage;
