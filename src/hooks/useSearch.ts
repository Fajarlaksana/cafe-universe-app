'use client';

import { useState } from 'react';
import { SearchResult } from '@/types/cafe';
import cafes from '@/data/cafes';

export function useSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchCafes = (searchQuery: string) => {
    setIsSearching(true);
    setQuery(searchQuery);

    const keywords = searchQuery.toLowerCase().split(' ');

    const scored = cafes.map((cafe) => {
      let score = 0;

      keywords.forEach((word) => {
        if (word.includes('wifi') && cafe.wifi) score += 2;
        if (word.includes('instagram') && cafe.instagrammable) score += 2;
        if (word.includes('outdoor') && cafe.outdoor) score += 2;
        if (word.includes('work') && cafe.work_friendly) score += 2;
        if (word.includes('coffee')) score += cafe.rating;
        if (cafe.area.toLowerCase().includes(word)) score += 3;
        if (cafe.name.toLowerCase().includes(word)) score += 3;
      });

      return { cafe, score };
    });

    const sorted = scored
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(sorted.slice(0, 5));
    setIsSearching(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return { query, results, isSearching, searchCafes, clearSearch };
}
