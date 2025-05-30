import React from 'react';
import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center text-indigo-900">
              <Vote className="h-6 w-6 mr-2" />
              <span className="font-bold text-xl">Suffrage</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Online elections made safe, secure, and accessible for all.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Features</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Solutions</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Resources</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Business</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Programs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Social media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-700">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-700">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-700">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-700">Instagram</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Privacy policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Terms of service</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-indigo-700">Cookie policy</Link></li>
            </ul>
            <div className="mt-4">
              <h3 className="font-semibold mb-1">Email</h3>
              <a href="mailto:info@suffrage.com" className="text-gray-600 hover:text-indigo-700">info@suffrage.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;