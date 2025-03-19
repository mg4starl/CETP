import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, School2, Users } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Collegiate Esports Transfer Portal
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connect with top collegiate Esports programs and players. \nYour collegiate future awaits!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Player Profiles</h3>
          <p className="text-gray-600 mb-4">
            Showcase your skills, rank, and achievements to get noticed by collegiate teams.
          </p>
          <Link
            to="/players"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Browse Players
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <School2 className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">School Programs</h3>
          <p className="text-gray-600 mb-4">
            Discover collegiate Esports programs and their competitive opportunities.
          </p>
          <Link
            to="/schools"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            View Schools
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Transfer Portal</h3>
          <p className="text-gray-600 mb-4">
            Connect directly with programs and start your collegiate Esports journey.
          </p>
          <Link
            to="/login"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-xl p-8 mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Programs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Placeholder for featured schools - will be replaced with real data */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="h-32 bg-gray-200 rounded-md mb-4" />
              <h3 className="font-bold">University {i}</h3>
              <p className="text-gray-600">Division {i}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}