'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cafe } from '@/types/cafe';
import {
  MapPin,
  Star,
  Wifi,
  Trees,
  Laptop,
  Camera,
  DollarSign,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { MiniMap } from '@/components/MapWrapper';

interface CafePageClientProps {
  cafe: Cafe;
}

export function CafePageClient({ cafe }: CafePageClientProps) {
  const amenities = [
    { icon: Wifi, label: 'WiFi', available: cafe.wifi },
    { icon: Trees, label: 'Outdoor', available: cafe.outdoor },
    { icon: Laptop, label: 'Work Friendly', available: cafe.work_friendly },
    { icon: Camera, label: 'Instagrammable', available: cafe.instagrammable },
  ];

  return (
    <article className="min-h-screen">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <Image
          src={cafe.image_url}
          alt={cafe.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {cafe.area}
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
                {cafe.price_range}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              {cafe.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Star className="h-5 w-5 fill-foreground" />
                <span className="font-semibold">{cafe.rating}</span>
                <span className="text-muted-foreground">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{cafe.area}, Bandung</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {cafe.name} is a popular café located in {cafe.area}, Bandung.
                Known for its {cafe.instagrammable ? 'instagrammable ambiance' : ''}{' '}
                {cafe.outdoor && 'and outdoor seating'}, this spot offers a{' '}
                {cafe.work_friendly ? 'great environment for remote work' : 'relaxing atmosphere'}{' '}
                with {cafe.wifi && 'complimentary WiFi'}.
              </p>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="text-xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amenities.map((amenity) => (
                  <div
                    key={amenity.label}
                    className={`p-4 rounded-lg border ${
                      amenity.available
                        ? 'bg-secondary border-secondary'
                        : 'bg-muted border-border opacity-50'
                    }`}
                  >
                    <amenity.icon
                      className={`h-5 w-5 mb-2 ${
                        amenity.available ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    />
                    <p className="text-xs font-medium">{amenity.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="p-5 rounded-lg border bg-card space-y-4">
              <h3 className="font-semibold">Information</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-secondary">
                    <Star className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-medium">{cafe.rating} / 5.0</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-secondary">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Price Range</p>
                    <p className="font-medium">{cafe.price_range}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-secondary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Area</p>
                    <p className="font-medium">{cafe.area}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Get Directions
                </a>
                <a 
                  href={`https://www.google.com/search?q=${encodeURIComponent(cafe.name + ' ' + cafe.area)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
                >
                  Search Online
                </a>
              </div>
            </div>

            {/* Mini Map */}
            <div className="space-y-3">
              <h3 className="font-semibold">Location</h3>
              <MiniMap 
                singleCafe={cafe} 
                height="h-[250px]"
                interactive={false}
              />
              <p className="text-xs text-muted-foreground">
                {cafe.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
