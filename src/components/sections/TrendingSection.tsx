'use client';

import { usePopularity } from '@/hooks/usePopularity';
import { CafeCard } from '@/components/CafeCard';
import { useTranslation } from '@/contexts/TranslationContext';

export function TrendingSection() {
  const { trendingCafes } = usePopularity();
  const { t } = useTranslation();

  return (
    <section id="trending" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-2">
            {t('trending.badge')}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {t('trending.title')}{' '}
            <span className="text-muted-foreground">{t('trending.titleHighlight')}</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('trending.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {trendingCafes.map((cafe, index) => (
            <CafeCard key={cafe.id} cafe={cafe} trending rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
