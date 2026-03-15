'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import cafes from '@/data/cafes';
import { CafeCard } from '@/components/CafeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MOOD_OPTIONS } from '@/types/cafe';
import { useTranslation } from '@/contexts/TranslationContext';

type SortOption = 'rating' | 'name' | 'area';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [selectedMood, setSelectedMood] = useState<string>('');
  const { t } = useTranslation();

  const areas = useMemo(() => {
    const uniqueAreas = new Set(cafes.map((c) => c.area));
    return Array.from(uniqueAreas).sort();
  }, []);

  const filteredCafes = useMemo(() => {
    let result = [...cafes];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (cafe) =>
          cafe.name.toLowerCase().includes(query) ||
          cafe.area.toLowerCase().includes(query) ||
          cafe.address.toLowerCase().includes(query)
      );
    }

    if (selectedArea) {
      result = result.filter((cafe) => cafe.area === selectedArea);
    }

    if (selectedMood) {
      switch (selectedMood) {
        case 'focus':
          result = result.filter((cafe) => cafe.work_friendly && cafe.wifi);
          break;
        case 'chill':
          result = result.filter((cafe) => cafe.rating >= 4.5);
          break;
        case 'instagram':
          result = result.filter((cafe) => cafe.instagrammable);
          break;
        case 'outdoor':
          result = result.filter((cafe) => cafe.outdoor);
          break;
        case 'coffee':
          result = result.filter((cafe) => cafe.rating >= 4.6);
          break;
      }
    }

    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'area':
        result.sort((a, b) => a.area.localeCompare(b.area));
        break;
    }

    return result;
  }, [searchQuery, selectedArea, sortBy, selectedMood]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedArea('');
    setSortBy('rating');
    setSelectedMood('');
  };

  const hasActiveFilters = searchQuery || selectedArea || sortBy !== 'rating' || selectedMood;

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-8 mb-6 border-b border-border">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {t('explore.title')}{' '}
            <span className="text-muted-foreground">{t('explore.titleHighlight')}</span>
          </h1>
          <p className="text-muted-foreground">
            {t('explore.subtitle')} {cafes.length} {t('explore.subtitleCount')}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('explore.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{t('explore.filters')}</span>
            </div>

            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="">{t('explore.allAreas')}</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>

            <select
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
              className="h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="">{t('explore.allMoods')}</option>
              {MOOD_OPTIONS.map((mood) => (
                <option key={mood.id} value={mood.id}>
                  {mood.icon} {t(`mood.moods.${mood.id}`)}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="rating">{t('explore.sortBy')} {t('explore.rating')}</option>
              <option value="name">{t('explore.sortBy')} {t('explore.name')}</option>
              <option value="area">{t('explore.sortBy')} {t('explore.area')}</option>
            </select>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-2 h-9">
                <X className="h-4 w-4" />
                {t('explore.clear')}
              </Button>
            )}

            <span className="ml-auto text-sm text-muted-foreground">
              {filteredCafes.length} {t('explore.results')} {cafes.length} {t('explore.cafes')}
            </span>
          </div>
        </div>

        {/* Results Grid */}
        {filteredCafes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCafes.map((cafe, index) => (
              <div
                key={cafe.id}
                className="animate-in fade-in"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <CafeCard cafe={cafe} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t('explore.noResults')}</h3>
            <p className="text-muted-foreground mb-4">{t('explore.noResultsDesc')}</p>
            <Button onClick={clearFilters}>{t('explore.clearAll')}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
