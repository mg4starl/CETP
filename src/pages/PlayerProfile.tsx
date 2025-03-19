import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Trophy, Star, Twitter, Twitch, Youtube, Globe2, Disc as Discord, TowerControl as GameController } from 'lucide-react';
import type { Player } from '../types';
import supabase from './supabase';

export function PlayerProfile() {
  const { id } = useParams();
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        const { data, error } = await supabase
          .from('players')  // Make sure 'players' is the table name in your Supabase project
          .select('*')
          .eq('id', id)  // Filter by the player ID
          .single();  // Ensure that we only get a single player result

        if (error) throw error;
        setPlayer(data);
      } catch (error) {
        setError('Player data not found');
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error || !player) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">{error || 'Player not found'}</p>
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
