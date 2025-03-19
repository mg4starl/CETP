import React from 'react';
import { Link } from 'react-router-dom';
import type { School } from '../types';
import { MapPin, Users } from 'lucide-react';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={school.logoUrl || 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}
          alt={school.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{school.name}</h3>
        <div className="flex items-center space-x-2 text-gray-600 mb-2">
          <MapPin className="h-4 w-4" />
          <span>{school.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Users className="h-4 w-4" />
          <span>{school.currentRoster.length} Players</span>
        </div>
        <div className="bg-orange-50 rounded-md p-2 mb-4">
          <span className="text-orange-700 font-medium">Division {school.division}</span>
        </div>
        <Link
          to={`/schools/${school.id}`}
          className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          View Team
        </Link>
      </div>
    </div>
  );
}