// Type definitions for the app

export interface Location {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  heading?: number;
  speed?: number;
}

export interface PointOfInterest {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  type?: string;
  description?: string;
}

export interface Briefing {
  text: string;
  audioUrl?: string;
}

export interface Suggestion {
  id: string;
  name: string;
  location: Location;
  description?: string;
  distance?: number;
}

export interface AIProvider {
  id: string;
  name: string;
  type: 'openai' | 'anthropic' | 'other';
  isActive: boolean;
}

