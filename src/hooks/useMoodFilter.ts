'use client';

import { useState, useCallback } from 'react';
import { Cafe, MoodType } from '@/types/cafe';
import cafes from '@/data/cafes';

export function useMoodFilter() {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [recommendations, setRecommendations] = useState<Cafe[]>([]);

  const recommendCafesByMood = useCallback((mood: MoodType) => {
    setSelectedMood(mood);

    const scored = cafes.map((cafe) => {
      let score = 0;

      switch (mood) {
        case 'focus':
          score = (cafe.work_friendly ? 2 : 0) + (cafe.wifi ? 1 : 0);
          break;
        case 'chill':
          score = cafe.rating;
          break;
        case 'instagram':
          score = cafe.instagrammable ? 3 : 0;
          break;
        case 'outdoor':
          score = cafe.outdoor ? 3 : 0;
          break;
        case 'coffee':
          score = cafe.rating * 2;
          break;
      }

      return { ...cafe, score };
    });

    const sorted = scored.sort((a, b) => b.score - a.score);
    setRecommendations(sorted.slice(0, 3));
  }, []);

  const clearMood = useCallback(() => {
    setSelectedMood(null);
    setRecommendations([]);
  }, []);

  return { selectedMood, recommendations, recommendCafesByMood, clearMood };
}
