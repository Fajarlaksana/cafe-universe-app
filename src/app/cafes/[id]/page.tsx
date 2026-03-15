import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import cafes from '@/data/cafes';
import { CafePageClient } from '@/components/CafePageClient';

interface PageProps {
  params: { id: string };
}

function getCafe(id: string) {
  const cafe = cafes.find((c) => c.id === parseInt(id));
  return cafe || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cafe = getCafe(params.id);

  if (!cafe) {
    return {
      title: 'Café Not Found',
    };
  }

  return {
    title: `${cafe.name} – Café Universe`,
    description: `${cafe.name} in ${cafe.area}, Bandung. Rated ${cafe.rating} stars. ${cafe.address}`,
    openGraph: {
      title: `${cafe.name} – Café Universe`,
      description: `${cafe.name} in ${cafe.area}, Bandung. Rated ${cafe.rating} stars.`,
      images: [cafe.image_url],
    },
  };
}

export async function generateStaticParams() {
  return cafes.map((cafe) => ({
    id: cafe.id.toString(),
  }));
}

export default function CafePage({ params }: PageProps) {
  const cafe = getCafe(params.id);

  if (!cafe) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: cafe.name,
    image: cafe.image_url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: cafe.address,
      addressLocality: 'Bandung',
      addressRegion: 'West Java',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cafe.latitude,
      longitude: cafe.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: cafe.rating,
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: cafe.price_range,
    servesCuisine: 'Coffee',
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CafePageClient cafe={cafe} />
    </>
  );
}
