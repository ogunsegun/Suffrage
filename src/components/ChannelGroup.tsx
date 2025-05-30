import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Hash, Volume2, Video, Vote } from 'lucide-react';
import ChannelItem from './ChannelItem';

interface Channel {
  name: string;
  id: string;
}

interface ChannelGroupProps {
  title: string;
  channels: Channel[];
}

const ChannelGroup: React.FC<ChannelGroupProps> = ({ title, channels }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const getIcon = (title: string) => {
    if (title.includes('Text')) return <Hash className="h-4 w-4 mr-2" />;
    if (title.includes('Airing')) return <Volume2 className="h-4 w-4 mr-2" />;
    if (title.includes('Live')) return <Video className="h-4 w-4 mr-2" />;
    if (title.includes('Election')) return <Vote className="h-4 w-4 mr-2" />;
    return <Hash className="h-4 w-4 mr-2" />;
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center px-3 py-2 cursor-pointer hover:bg-indigo-800 hover:bg-opacity-50 rounded-md transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 mr-1" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-1" />
        )}
        <span className="text-sm font-medium">{title}</span>
      </div>
      
      {isExpanded && (
        <div className="mt-1">
          {channels.map((channel) => (
            <ChannelItem 
              key={channel.id} 
              channel={channel} 
              icon={getIcon(title)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChannelGroup;