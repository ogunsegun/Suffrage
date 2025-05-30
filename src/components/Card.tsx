import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-indigo-800/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;