'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useMemo } from 'react';
import 'leaflet/dist/leaflet.css';
import About from './About';
import Intro from './Intro';
import TimeDisplay from './TimeDisplay';

// Keep default marker fix in case you use normal markers elsewhere
if (L.Icon?.Default) {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

export default function StadiaMap() {
  const STADIA_API_KEY = import.meta.env.VITE_STADIA_API_KEY;
  const center = [17.617548, 121.720503];

  // Pulsing dot (DivIcon)
  const pulseIcon = useMemo(
    () =>
      L.divIcon({
        className: 'pulse-marker',
        iconSize: [13, 13],
        iconAnchor: [8, 8],
        html: '',
      }),
    []
  );

  return (
    <section className="w-full mt-8 flex justify-center bg-transparent">
      <div className="relative w-full md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-2xl px-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-20 lg:top-28 rounded-t-2xl  md:top-23 h-24 sm:h-28 sm:top-20 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000" />
        {/* Map resizes by breakpoints */}
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom
          zoomControl={false}
          attributionControl={false}      // hide control; keep attribution string below for compliance
          className="h-44 sm:h-48 md:h-50 lg:h-56 w-full rounded-b-none rounded-t-2xl"
        >
          <TileLayer
            url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${STADIA_API_KEY}`}
            attribution='&copy; Stadia Maps &copy; OpenMapTiles &copy; OpenStreetMap'
          />

          <Marker position={center} icon={pulseIcon}>
            <Popup>Give me some donuts</Popup>
          </Marker>
        </MapContainer>

        {/* Time badge (responsive spacing) - Extracted to prevent re-renders */}
        <TimeDisplay />
        <div className="w-full h-auto bg-transparent">
          <About />
          <Intro />
        </div>
      </div>
    </section>
  );
}
