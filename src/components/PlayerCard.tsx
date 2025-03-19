import React from 'react';
import { Link } from 'react-router-dom';
import type { Player } from '../types';
import { Trophy, Star, Twitter, Twitch, Youtube, Globe2, TowerControl as GameController } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={player.avatarUrl}
          alt={player.username}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{player.username}</h3>
          <p className="text-white/80 text-sm">{player.fullName}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">{player.rank}</span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Star className="h-5 w-5 text-purple-500" />
          <span>Peak SR: {player.peakSR}</span>
        </div>
        <div className="bg-indigo-50 rounded-md p-2 mb-4">
          <span className="text-indigo-700 font-medium">{player.role}</span>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 text-sm line-clamp-2">{player.bio}</p>
        </div>

        <div className="border-t pt-4 mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <GameController className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">{player.battleTag}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {player.socialLinks.twitter && (
              <a
                href={player.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Twitter className="h-4 w-4 text-blue-500" />
              </a>
            )}
            {player.socialLinks.twitch && (
              <a
                href={player.socialLinks.twitch}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
              >
                <Twitch className="h-4 w-4 text-purple-500" />
              </a>
            )}
            {player.socialLinks.youtube && (
              <a
                href={player.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-50 rounded-full hover:bg-red-100 transition-colors"
              >
                <Youtube className="h-4 w-4 text-red-500" />
              </a>
            )}
            {player.socialLinks.liquipedia && (
              <a
                href={player.socialLinks.liquipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Globe2 className="h-4 w-4 text-gray-500" />
              </a>
            )}
          </div>
        </div>

        <Link
          to={`/players/${player.id}`}
          className="block w-full text-center bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}