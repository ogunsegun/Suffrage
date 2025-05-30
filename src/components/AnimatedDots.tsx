import React from 'react';

interface AnimatedDotsProps {
  className?: string;
}

const AnimatedDots: React.FC<AnimatedDotsProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dots-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="4"
              cy="4"
              r="2"
              fill="white"
              fillOpacity="0.3"
              className="dot"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .dot {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedDots;