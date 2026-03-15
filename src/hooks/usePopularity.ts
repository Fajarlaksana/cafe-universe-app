'use client';

import { useMemo } from 'react';
import { Cafe } from '@/types/cafe';
import cafes from '@/data/cafes';

export function usePopularity() {
  const trendingCafes = useMemo<Cafe[]>(() => {
    const scored = cafes.map((cafe) => {
      const score =
        cafe.rating * 2 +
        (cafe.instagrammable ? 1 : 0) +
        (cafe.work_friendly ? 1 : 0);

      return { ...cafe, score };
    });

    const sorted = scored.sort((a, b) => b.score - a.score);
    return sorted.slice(0, 5);
  }, []);

  const topRated = useMemo<Cafe[]>(() => {
    return [...cafes].sort((a, b) => b.rating - a.rating).slice(0, 5);
  }, []);

  const getByArea = useMemo(() => {
    const areas = new Map<string, Cafe[]>();
    cafes.forEach((cafe) => {
      const existing = areas.get(cafe.area) || [];
      areas.set(cafe.area, [...existing, cafe]);
    });
    return areas;
  }, []);

  return { trendingCafes, topRated, getByArea };
}
