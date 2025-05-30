import React from 'react';
import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-indigo-900/90 to-indigo-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white">
          <Vote className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">Suffrage</span>
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Features
          </Link>
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Solutions
          </Link>
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Resources
          </Link>
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Business
          </Link>
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors">
            Programs
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link to="/signin" className="text-white hover:text-indigo-200 transition-colors">
            Sign In
          </Link>
          <Link to="/signup">
            <Button variant="primary" className="rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;