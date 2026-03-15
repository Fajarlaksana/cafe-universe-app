export interface Cafe {
  id: number;
  name: string;
  area: string;
  address: string;
  rating: number;
  price_range: string;
  wifi: boolean;
  outdoor: boolean;
  work_friendly: boolean;
  instagrammable: boolean;
  image_url: string;
  latitude: number;
  longitude: number;
}

export type MoodType = 'focus' | 'chill' | 'instagram' | 'outdoor' | 'coffee';

export interface MoodOption {
  id: MoodType;
  label: string;
  icon: string;
  description: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  { id: 'focus', label: 'Need to Focus', icon: '💻', description: 'Quiet spaces with WiFi for productive work' },
  { id: 'chill', label: 'Chill with Friends', icon: '☕', description: 'Relaxed atmosphere for socializing' },
  { id: 'instagram', label: 'Instagram Photos', icon: '📸', description: 'Picture-perfect spots for your feed' },
  { id: 'outdoor', label: 'Outdoor Relaxation', icon: '🌿', description: 'Fresh air and open spaces' },
  { id: 'coffee', label: 'Coffee Enthusiast', icon: '🔥', description: 'Premium coffee for true connoisseurs' },
];

export interface SearchResult {
  cafe: Cafe;
  score: number;
}
