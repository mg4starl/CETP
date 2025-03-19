import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Users, Trophy, Mail, Globe2, School2, Newspaper, GraduationCap } from 'lucide-react';
import type { School } from '../types';

// Using the same mock data for now - in a real app, this would come from an API
const mockSchools = [
  {
    id: '1',
    name: 'University of Gaming',
    location: 'Los Angeles, CA',
    division: 'I',
    teamName: 'Digital Dragons',
    logoUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Leading collegiate esports program with state-of-the-art facilities. Our program focuses on developing both competitive skills and academic excellence. We offer comprehensive support including dedicated coaching staff, mental health resources, and academic tutoring.',
    currentRoster: [],
    scholarshipInfo: 'Full and partial scholarships available based on competitive skill and academic performance. Scholarships range from $5,000 to full tuition coverage.',
    contactEmail: 'esports@uog.edu',
    website: 'https://uog.edu/esports',
    facilities: 'State-of-the-art gaming arena with 30 high-end gaming stations, practice rooms, and streaming setup',
    achievements: [
      'Collegiate Championship Winners 2024',
      'Regional Champions 2023',
      'Top 4 National Finals 2022'
    ],
    socialLinks: {
      twitter: 'https://twitter.com/uogesports',
      twitch: 'https://twitch.tv/uogesports',
      youtube: 'https://youtube.com/@uogesports'
    }
  },
  {
    id: '2',
    name: 'Tech Institute',
    location: 'Seattle, WA',
    division: 'II',
    teamName: 'Cyber Knights',
    logoUrl: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Competitive program with focus on player development and academic excellence. We believe in fostering both gaming talent and professional growth.',
    currentRoster: [],
    scholarshipInfo: 'Merit-based scholarships available up to $10,000 per year',
    contactEmail: 'esports@techins.edu',
    website: 'https://techins.edu/esports',
    facilities: 'Modern gaming center with 20 gaming stations and team meeting rooms',
    achievements: [
      'Division II Champions 2023',
      'Best New Program Award 2022'
    ],
    socialLinks: {
      twitter: 'https://twitter.com/tiesports',
      discord: 'TIEsports'
    }
  }
];

export function SchoolProfile() {
  const { id } = useParams();
  const school = mockSchools.find(s => s.id === id);

  if (!school) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">School not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-64">
          <img
            src={school.logoUrl}
            alt={school.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white mb-2">{school.name}</h1>
            <p className="text-white/90">{school.teamName}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600">Division</p>
                  <p className="font-bold text-lg">Division {school.division}</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-red-500" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-bold text-lg">{school.location}</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-600">Team Size</p>
                  <p className="font-bold text-lg">{school.currentRoster.length} Players</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">About the Program</h2>
            <p className="text-gray-600">{school.description}</p>
          </div>

          {/* Facilities Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Facilities</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <School2 className="h-5 w-5 text-gray-500" />
                <p className="text-gray-700">{school.facilities}</p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Achievements</h2>
            <div className="space-y-3">
              {school.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-yellow-50 p-3 rounded-lg">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span className="text-yellow-900">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship Info */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Scholarship Information</h2>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                <p className="text-green-900">{school.scholarshipInfo}</p>
              </div>
            </div>
          </div>

          {/* Contact & Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href={`mailto:${school.contactEmail}`}
                className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-blue-900">{school.contactEmail}</span>
              </a>
              <a
                href={school.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Globe2 className="h-5 w-5 text-gray-500" />
                <span className="text-gray-900">Program Website</span>
              </a>
              {school.socialLinks.twitter && (
                <a
                  href={school.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Newspaper className="h-5 w-5 text-blue-500" />
                  <span className="text-blue-900">News & Updates</span>
                </a>
              )}
              {school.socialLinks.twitch && (
                <a
                  href={school.socialLinks.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Users className="h-5 w-5 text-purple-500" />
                  <span className="text-purple-900">Watch Our Teams</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}