import React from 'react';
import { Smile, Image, Paperclip, Gift } from 'lucide-react';

const ActionButtons: React.FC = () => {
  return (
    <div className="flex space-x-2 text-indigo-300">
      <button className="p-1 hover:text-white transition-colors">
        <Smile className="h-5 w-5" />
      </button>
      <button className="p-1 hover:text-white transition-colors">
        <Image className="h-5 w-5" />
      </button>
      <button className="p-1 hover:text-white transition-colors">
        <Paperclip className="h-5 w-5" />
      </button>
      <button className="p-1 hover:text-white transition-colors">
        <Gift className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ActionButtons;