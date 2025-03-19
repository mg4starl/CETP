import React from 'react';
import { PlayerCard } from '../components/PlayerCard';
import { Search, Filter } from 'lucide-react';

// Temporary mock data
const mockPlayers = [
    {
      id: 'Lethal',
      username: 'Lethal',
      fullName: 'Denis Tari',
      email: 'dtari@ilstu.edu',
      role: 'Damage' as const,
      rank: 'Top 500',
      peakSR: 'Rank #1',
      highlights: ['https://clips.twitch.tv/example1'],
      bio: 'Denis "Lethal" Tari (born October 1, 2002) is a Turkish player who is currently playing for NTMR.',
      avatarUrl: 'https://pbs.twimg.com/profile_banners/1100961896616943622/1738878720/1080x360',
      battleTag: 'Lethal#21513',
      socialLinks: {
        twitter: 'https://twitter.com/Lethal_ow',
        twitch: 'https://twitch.tv/lethal__ow',
        discord: 'ihavelethal',
        liquipedia: 'https://liquipedia.net/overwatch/Lethal',
        youtube: 'https://youtube.com/@lethal6641'
      }
    },
  {
    id: 'Goose',
    username: 'Goose',
    fullName: 'Matthew Gisi',
    email: 'mtgisi@ilstu.edu',
    role: 'Support' as const,
    rank: 'Top 500',
    peakSR: 'Rank #250',
    highlights: ['https://clips.twitch.tv/example2'],
    bio: 'Matthew "Goose" Gisi (born May 11, 2004) is an American player who is currently playing for Illinois State University.',
    avatarUrl: 'https://pbs.twimg.com/profile_banners/1395551273810862082/1700348330/1080x360',
    battleTag: 'Goose#16238',
    socialLinks: {
      discord: 'goose.gg',
      twitter: 'https://x.com/ow_goose',
      liquipedia: 'https://liquipedia.net/overwatch/Goose_(Matthew_Gisi)'
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