import dynamic from 'next/dynamic';

export const MapComponent = dynamic(
  () => import('@/components/MapComponent').then((mod) => mod.MapComponent),
  {
    ssr: false,
    loading: () => (
      <div className="relative rounded-lg overflow-hidden border border-border bg-muted h-[450px] md:h-[550px] min-h-[450px]">
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-[400]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-muted-foreground">Loading map...</p>
          </div>
        </div>
      </div>
    ),
  }
);

export const MiniMap = dynamic(
  () => import('@/components/MapComponent').then((mod) => mod.MapComponent),
  {
    ssr: false,
    loading: () => (
      <div className="relative rounded-lg overflow-hidden border border-border bg-muted h-[250px] min-h-[250px]">
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-[400]">
          <div className="h-4 w-4 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    ),
  }
);
