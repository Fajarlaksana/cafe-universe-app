'use client';

import { useMoodFilter } from '@/hooks/useMoodFilter';
import { MOOD_OPTIONS } from '@/types/cafe';
import { CafeCard } from '@/components/CafeCard';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/contexts/TranslationContext';

export function MoodSection() {
  const { selectedMood, recommendations, recommendCafesByMood, clearMood } = useMoodFilter();
  const { t } = useTranslation();

  return (
    <section id="discover" className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t('mood.title')}{' '}
              <span className="text-muted-foreground">{t('mood.titleHighlight')}</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {t('mood.subtitle')}
            </p>
          </div>

          {/* Mood Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
            {MOOD_OPTIONS.map((mood) => (
              <button
                key={mood.id}
                onClick={() =>
                  selectedMood === mood.id ? clearMood() : recommendCafesByMood(mood.id)
                }
                className={cn(
                  'p-4 rounded-lg border text-center transition-all',
                  selectedMood === mood.id
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background border-border hover:border-foreground/30'
                )}
              >
                <span className="text-2xl block mb-2">{mood.icon}</span>
                <span className="text-xs font-medium">{t(`mood.moods.${mood.id}`)}</span>
              </button>
            ))}
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendations.map((cafe) => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))}
            </div>
          )}

          {selectedMood && (
            <div className="text-center mt-6">
              <button
                onClick={clearMood}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                {t('mood.clearSelection')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
