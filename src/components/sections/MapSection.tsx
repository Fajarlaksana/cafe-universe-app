'use client';

import { useTranslation } from '@/contexts/TranslationContext';
import { MapComponent } from '@/components/MapWrapper';

export function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">
            {t('map.title')}{' '}
            <span className="text-muted-foreground">{t('map.titleHighlight')}</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            {t('map.subtitle')}
          </p>
        </div>

        {/* Map Component */}
        <MapComponent className="mb-6" />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-foreground" />
            <span>{t('map.legend')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{t('map.clickMarker')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
