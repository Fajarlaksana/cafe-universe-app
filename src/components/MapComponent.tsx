'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import cafes from '@/data/cafes';
import { Cafe } from '@/types/cafe';

interface MapComponentProps {
  className?: string;
  height?: string;
  singleCafe?: Cafe | null;
  interactive?: boolean;
}

export function MapComponent({ 
  className = '', 
  height = 'h-[450px] md:h-[550px]',
  singleCafe = null,
  interactive = true
}: MapComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const createPopupContent = useCallback((cafe: Cafe): HTMLElement => {
    const container = document.createElement('div');
    container.innerHTML = `
      <a href="/cafes/${cafe.id}" style="text-decoration:none;color:inherit;display:block;">
        <div style="width:100%;height:140px;overflow:hidden;">
          <img src="${cafe.image_url}" alt="${cafe.name}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy" />
        </div>
        <div style="padding:12px;background:#fff;">
          <h4 style="margin:0 0 6px;font-weight:600;font-size:14px;line-height:1.3;color:#1a1a1a;">${cafe.name}</h4>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
            <span style="color:#f59e0b;font-size:13px;font-weight:500;">⭐ ${cafe.rating}</span>
            <span style="color:#999;font-size:12px;">•</span>
            <span style="color:#666;font-size:12px;">${cafe.price_range}</span>
          </div>
          <p style="margin:0;font-size:12px;color:#666;line-height:1.4;">${cafe.area}</p>
        </div>
      </a>
    `;
    return container;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    let map: L.Map | null = null;
    const markers: L.Marker[] = [];

    const initMap = async () => {
      try {
        // Fix for default marker icon
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        const center = singleCafe 
          ? [singleCafe.latitude, singleCafe.longitude] as [number, number]
          : [-6.9175, 107.6191] as [number, number];

        const zoom = singleCafe ? 15 : 13;

        // Create map with optimized settings
        map = L.map(container, {
          zoomControl: interactive,
          scrollWheelZoom: interactive ? false : false,
          doubleClickZoom: interactive,
          zoomAnimation: true,
          fadeAnimation: true,
          markerZoomAnimation: true,
          preferCanvas: true,
          attributionControl: false,
        }).setView(center, zoom);

        // Add tiles with optimized loading
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap',
          maxZoom: 19,
          minZoom: 3,
          updateWhenIdle: true,
          updateWhenZooming: false,
          updateInterval: 200,
          keepBuffer: 2,
        }).addTo(map);

        // Critical: Invalidate size to fix tile rendering
        setTimeout(() => {
          if (map) {
            map.invalidateSize();
            setIsMapReady(true);
          }
        }, 100);

        // Double check invalidate
        setTimeout(() => {
          if (map) {
            map.invalidateSize();
          }
        }, 300);

        // Add markers
        const cafesToShow = singleCafe ? [singleCafe] : cafes;

        cafesToShow.forEach((cafe) => {
          const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                width: ${singleCafe ? '40' : '32'}px;
                height: ${singleCafe ? '40' : '32'}px;
                background: #1a1a1a;
                border: 3px solid #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
                cursor: pointer;
              ">
                <svg width="${singleCafe ? '20' : '16'}" height="${singleCafe ? '20' : '16'}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            `,
            iconSize: [singleCafe ? 40 : 32, singleCafe ? 40 : 32],
            iconAnchor: [singleCafe ? 20 : 16, singleCafe ? 40 : 32],
            popupAnchor: [0, singleCafe ? -40 : -32],
          });

          const marker = L.marker([cafe.latitude, cafe.longitude], {
            icon: customIcon,
            title: cafe.name,
          });

          if (!singleCafe && interactive) {
            const popup = L.popup({
              maxWidth: 280,
              minWidth: 260,
              className: 'cafe-popup',
              offset: [0, -10],
            });

            const popupContent = createPopupContent(cafe);
            popup.setContent(popupContent);
            marker.bindPopup(popup);

            marker.on('click', () => {
              if (map) {
                map.flyTo([cafe.latitude, cafe.longitude], 15, {
                  animate: true,
                  duration: 1.2,
                  easeLinearity: 0.25,
                });
              }
            });

            marker.on('mouseover', () => {
              marker.openPopup();
            });
          }

          marker.addTo(map!);
          markers.push(marker);
        });

        mapRef.current = map;

        // Cleanup
        return () => {
          if (map) {
            markers.forEach(m => m.remove());
            map.remove();
            mapRef.current = null;
          }
        };
      } catch (error) {
        console.error('Map initialization error:', error);
      }
    };

    initMap();
  }, [singleCafe, interactive, createPopupContent]);

  const enableScrollZoom = useCallback(() => {
    if (mapRef.current && interactive) {
      mapRef.current.scrollWheelZoom.enable();
    }
  }, [interactive]);

  const disableScrollZoom = useCallback(() => {
    if (mapRef.current) {
      mapRef.current.scrollWheelZoom.disable();
    }
  }, []);

  return (
    <div 
      className={`relative rounded-lg overflow-hidden border border-border bg-muted ${className}`}
      onMouseEnter={() => { if (interactive) setIsHovered(true); enableScrollZoom(); }}
      onMouseLeave={() => { if (interactive) setIsHovered(false); disableScrollZoom(); }}
    >
      {/* Loading Skeleton */}
      {!isMapReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted z-[400]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-6 w-6 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
            <p className="text-xs text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
      
      {/* Scroll Hint (only for interactive maps) */}
      {interactive && (
        <div className={`absolute top-3 right-3 z-[400] pointer-events-none transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-md border border-border">
            <span className="text-xs text-muted-foreground">🖱️ Scroll to zoom</span>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div
        ref={containerRef}
        className={`w-full ${height}`}
        style={{ minHeight: singleCafe ? '250px' : '450px', zIndex: 1 }}
      />
    </div>
  );
}
