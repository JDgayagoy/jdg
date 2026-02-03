import { useEffect, useState, useRef } from "react";
import { fetchWithCache } from '../utils/apiCache';

export default function SpotifyCard() {
  const [track, setTrack] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef(null);

  async function fetchSpotify() {
    try {
      const res = await fetchWithCache("https://jdg-backend.onrender.com/api/spotify/now-playing", {
        cacheDuration: 10 * 1000, // 10 seconds cache
        deduplicate: true,
      });

      if (!res.isPlaying) {
        const recent = await fetchWithCache(
          "https://jdg-backend.onrender.com/api/spotify/recently-played",
          { cacheDuration: 30 * 1000, deduplicate: true }
        );
        setTrack({ ...recent, isPlaying: false });
      } else {
        setTrack({ ...res, isPlaying: true });
      }
    } catch (error) {
      console.error("Error fetching Spotify data:", error);
    }
  }

  // Page visibility API - stop polling when tab is inactive
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log('[v0] Tab hidden - pausing Spotify polling');
        setIsVisible(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        console.log('[v0] Tab visible - resuming Spotify polling');
        setIsVisible(true);
        fetchSpotify();
        intervalRef.current = setInterval(fetchSpotify, 15000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Initial fetch and polling
  useEffect(() => {
    if (!isVisible) return;

    fetchSpotify();
    intervalRef.current = setInterval(fetchSpotify, 15000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isVisible]);

  if (!track) return null;

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col justify-around rounded-lg transition w-full h-full"
    >
      <div className="flex justify-around items-center gap-2 w-full h-full">
        <div><img src={track.albumArt} alt="" className="-ml-2 w-27 h-26 rounded-xl"/></div>
        <div className="flex flex-col -mr-2 w-3/6">
          <span className="text-sm font-semibold text-nowrap overflow-hidden">{track.title}</span>
          <span className="text-[12px] text-gray-400">{track.artist}</span>
          <div className="flex flex-col mr-4">
            <span className="text-[10px] text-green-400 w-auto">
              {track.isPlaying ? "Now Playing" : "Last Played"}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
