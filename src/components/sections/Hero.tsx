'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/hooks/useSearch';
import { CafeCard } from '@/components/CafeCard';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/contexts/TranslationContext';

export function Hero() {
  const { query, results, isSearching, searchCafes, clearSearch } = useSearch();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2070&q=80"
          alt="Café background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-xs font-medium">
            {t('hero.badge')}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            {t('hero.title')}{' '}
            <span className="text-muted-foreground">{t('hero.titleHighlight')}</span>{' '}
            {t('hero.titleLocation')}
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-11 px-8">
              <Link href="/explore">
                {t('nav.explore')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-8">
              <a href="#map">
                {t('nav.map')}
              </a>
            </Button>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('hero.searchPlaceholder')}
              value={query}
              onChange={(e) => searchCafes(e.target.value)}
              className="pl-10 h-11 rounded-lg border-border bg-background/80 backdrop-blur-sm"
            />
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
              >
                {t('hero.clear')}
              </Button>
            )}
          </div>

          {/* Search Results */}
          {results.length > 0 && (
            <div className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto transition-all pt-8",
              isSearching ? "opacity-50" : "opacity-100"
            )}>
              {results.map((result) => (
                <CafeCard key={result.cafe.id} cafe={result.cafe} />
              ))}
            </div>
          )}

          {/* Hints */}
          <p className="text-xs text-muted-foreground">
            {t('hero.hints')}{' '}
            <span className="font-medium">&quot;{t('hero.hint1')}&quot;</span>,{' '}
            <span className="font-medium">&quot;{t('hero.hint2')}&quot;</span>,{' '}
            <span className="font-medium">&quot;{t('hero.hint3')}&quot;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
