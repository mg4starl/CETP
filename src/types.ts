export interface Player {
  id: string;
  username: string;
  fullName: string;
  email: string;
  role: 'Tank' | 'DPS' | 'Support';
  rank: string;
  peakSR: number;
  highlights: string[];
  bio: string;
  avatarUrl: string;
  battleTag?: string;
  socialLinks: {
    twitter?: string;
    twitch?: string;
    discord?: string;
    liquipedia?: string;
    youtube?: string;
  };
}

export interface School {
  id: string;
  name: string;
  location: string;
  division: string;
  teamName: string;
  logoUrl: string;
  description: string;
  currentRoster: Player[];
  scholarshipInfo: string;
  contactEmail: string;
  website: string;
  facilities: string;
  achievements: string[];
  socialLinks: {
    twitter?: string;
    twitch?: string;
    youtube?: string;
    discord?: string;
  };
}