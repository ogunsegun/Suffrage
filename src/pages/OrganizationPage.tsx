import React from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import ChatPanel from '../components/ChatPanel';

const OrganizationPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-indigo-900 bg-opacity-90 text-white overflow-hidden">
      <LeftSidebar />
      <Sidebar />
      <MainContent />
      <ChatPanel />
    </div>
  );
};

export default OrganizationPage;
