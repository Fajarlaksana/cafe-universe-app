import { Hero } from '@/components/sections/Hero';
import { MoodSection } from '@/components/sections/MoodSection';
import { MapSection } from '@/components/sections/MapSection';
import { TrendingSection } from '@/components/sections/TrendingSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MoodSection />
      <MapSection />
      <TrendingSection />
    </>
  );
}
