'use client';

import { Button } from '@/components/ui/button';
import { Coffee, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary mb-4">
            <Coffee className="h-10 w-10 text-foreground" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Café Not Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The café you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="h-11 px-8">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="h-11 px-8">
            <Link href="/explore">
              Explore All Cafés
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
