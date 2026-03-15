'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Cafe } from '@/types/cafe';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star } from 'lucide-react';

interface CafeCardProps {
  cafe: Cafe;
  trending?: boolean;
  rank?: number;
}

export function CafeCard({ cafe, trending, rank }: CafeCardProps) {
  return (
    <Link href={`/cafes/${cafe.id}`}>
      <Card className="group overflow-hidden border border-border hover:border-foreground/30 transition-all duration-200">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={cafe.image_url}
            alt={cafe.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
          
          {/* Trending Badge */}
          {trending && rank && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium">
              #{rank}
            </div>
          )}

          {/* Rating Badge */}
          <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium">
            <Star className="h-3 w-3 fill-foreground" />
            <span>{cafe.rating}</span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-3 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-sm line-clamp-1 group-hover:underline">
              {cafe.name}
            </h3>
            <span className="text-xs text-muted-foreground shrink-0">
              {cafe.price_range}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="line-clamp-1">{cafe.area}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
