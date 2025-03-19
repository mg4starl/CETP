import React from 'react';
import { PlayerCard } from '../components/PlayerCard';
import { Search, Filter } from 'lucide-react';

// Temporary mock data
const mockPlayers = [
  {
    id: '1',
    username: 'ProMercy',
    fullName: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Support' as const,
    rank: 'Grandmaster',
    peakSR: 4250,
    highlights: ['https://clips.twitch.tv/example1'],
    bio: 'Support main specializing in Mercy and Ana. Former collegiate player with 2 years of competitive experience.',
    avatarUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    battleTag: 'ProMercy#12345',
    socialLinks: {
      twitter: 'https://twitter.com/promercy',
      twitch: 'https://twitch.tv/promercy',
      discord: 'promercy',
      liquipedia: 'https://liquipedia.net/overwatch/ProMercy',
      youtube: 'https://youtube.com/@ProMercy'
    }
  },
  {
    id: '2',
    username: 'TankMaster',
    fullName: 'John Smith',
    email: 'john@example.com',
    role: 'Tank' as const,
    rank: 'Master',
    peakSR: 3800,
    highlights: ['https://clips.twitch.tv/example2'],
    bio: 'Main tank player focusing on Reinhardt and Winston. Looking to join a competitive collegiate program.',
    avatarUrl: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    battleTag: 'TankMaster#67890',
    socialLinks: {
      discord: 'tankmaster',
      twitter: 'https://twitter.com/tankmaster',
      liquipedia: 'https://liquipedia.net/overwatch/TankMaster'
    }
  }
];

export function Players() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Available Players</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search players..."
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
        {mockPlayers.map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
}