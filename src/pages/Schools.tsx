import React from 'react';
import { SchoolCard } from '../components/SchoolCard';
import { Search, Filter } from 'lucide-react';

// Temporary mock data
const mockSchools = [
  {
    id: '1',
    name: 'Illinois State University',
    location: 'Normal, IL',
    division: 'I',
    teamName: 'Redbird Esports',
    logoUrl: 'https://drive.google.com/uc?export=view&id=1YakXq_rLr8biJdyv1dgdiwR9OJW9ITMT',
    description: 'Leading collegiate esports program with state-of-the-art facilities',
    currentRoster: [],
    scholarshipInfo: 'Full scholarships available',
    contactEmail: 'esports@ilstu.edu',
    website: 'https://esports.illinoisstate.edu/'
  },
  {
    id: '2',
    name: 'Tech Institute',
    location: 'Seattle, WA',
    division: 'II',
    teamName: 'Cyber Knights',
    logoUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Competitive program with focus on player development',
    currentRoster: [],
    scholarshipInfo: 'Merit-based scholarships available',
    contactEmail: 'esports@techins.edu',
    website: 'https://techins.edu/esports'
  }
];

export function Schools() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Collegiate Programs</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search schools..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSchools.map(school => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>
    </div>
  );
}