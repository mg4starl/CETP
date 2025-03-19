import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GamepadIcon className="h-8 w-8 text-white" />
              <span className="ml-2 text-white text-xl font-bold">EsportsTransfer</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/players" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
              Players
            </Link>
            <Link to="/schools" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
              Schools
            </Link>
            <Link to="/login" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}