import React from 'react';
import { SchoolCard } from '../components/SchoolCard';
import { Search, Filter } from 'lucide-react';

// Temporary mock data
const mockSchools = [
  {
    id: 'IllinoisState',
    name: 'Illinois State University',
    location: 'Normal, IL',
    division: 'I',
    teamName: 'Redbird Esports',
    logoUrl: 'https://cdn.illinoisstate.edu/web/meta/home/homepage.jpg',
    description: 'public research university in Normal, Illinois, United States. It was founded in 1857 as Illinois State Normal University and is the oldest public university in Illinois.',
    currentRoster: ['Lethal','Admiral'],
    scholarshipInfo: 'Full scholarships available',
    contactEmail: 'esports@ilstu.edu',
    website: 'https://esports.illinoisstate.edu/',
    facilities: 'State-of-the-art gaming arena with 30 high-end gaming stations, practice rooms, and streaming setup',
    achievements: [
      'Overwatch Collegiate Homecoming 2024 Champions',
      'Overwatch Collegiate Championship Series',
      'Collegiate Esports Commissioners Cup 2024',
      'NACE - Fall 2024 Varsity Premier Playoffs',
      'NACE Starleague - Spring 2024 Varsity Premier Playoffs',
      'NECC Legends National Champions 2024',
      'NECC Division I Champions Fall 2024'
    ],
    socialLinks: {
      twitter: 'https://twitter.com/redbird_esports',
      twitch: 'https://twitch.tv/redbirdesports',
      youtube: 'https://youtube.com/@redbirdesports'
    }
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
  },
  {
  id: 'Maryville',
    name: 'Maryville University',
    location: 'Creve Coeur, MO',
    division: 'I',
    teamName: 'Maryville Saints',
    logoUrl: 'https://www.maryville.edu/studentlife/wp-content/uploads/sites/5/2021/03/health-and-wellness-header-image.jpg',
    description: 'public research university in Normal, Illinois, United States. It was founded in 1857 as Illinois State Normal University and is the oldest public university in Illinois.',
    currentRoster: ['L','A', 'T', 'd','L'],
    scholarshipInfo: 'Full scholarships available',
    contactEmail: 'esports@ilstu.edu',
    website: 'https://www.maryville.edu/studentlife/esports-clubs/',
    facilities: 'State-of-the-art gaming arena with 30 high-end gaming stations, practice rooms, and streaming setup',
    achievements: [
      'Overwatch Collegiate Homecoming 2024 Champions',
      'Overwatch Collegiate Championship Series'
    ],
    socialLinks: {
      twitter: 'https://twitter.com/MaryvilleGG',
    }
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