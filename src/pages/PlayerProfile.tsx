import React from 'react';
import { useParams } from 'react-router-dom';
import { Trophy, Star, Twitter, Twitch, Youtube, Globe2, Disc as Discord, TowerControl as GameController } from 'lucide-react';
import type { Player } from '../types';

// Using the same mock data for now - in a real app, this would come from an API
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

export function PlayerProfile() {
  const { id } = useParams();
  const player = mockPlayers.find(p => p.id === id);

  if (!player) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">Player not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64">
          <img
            src={player.avatarUrl}
            alt={player.username}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{player.username}</h1>
            <p className="text-white/90">{player.fullName}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Current Rank</p>
                  <p className="font-bold text-lg">{player.rank}</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Peak SR</p>
                  <p className="font-bold text-lg">{player.peakSR}</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <GameController className="h-6 w-6 text-indigo-500" />
                <div>
                  <p className="text-sm text-gray-600">Role</p>
                  <p className="font-bold text-lg">{player.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{player.bio}</p>
          </div>

          {/* Battle Tag */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Battle Tag</h2>
            <div className="bg-gray-50 p-4 rounded-lg inline-block">
              <div className="flex items-center space-x-2">
                <GameController className="h-5 w-5 text-gray-500" />
                <span className="font-mono">{player.battleTag}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {player.socialLinks.twitter && (
                <a
                  href={player.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-blue-500" />
                  <span className="text-blue-900">Twitter</span>
                </a>
              )}
              {player.socialLinks.twitch && (
                <a
                  href={player.socialLinks.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Twitch className="h-5 w-5 text-purple-500" />
                  <span className="text-purple-900">Twitch</span>
                </a>
              )}
              {player.socialLinks.youtube && (
                <a
                  href={player.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-red-500" />
                  <span className="text-red-900">YouTube</span>
                </a>
              )}
              {player.socialLinks.discord && (
                <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
                  <Discord className="h-5 w-5 text-indigo-500" />
                  <span className="text-indigo-900">{player.socialLinks.discord}</span>
                </div>
              )}
              {player.socialLinks.liquipedia && (
                <a
                  href={player.socialLinks.liquipedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Globe2 className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900">Liquipedia</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}