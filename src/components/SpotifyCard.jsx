import { useEffect, useState } from "react";

export default function SpotifyCard() {
  const [track, setTrack] = useState(null);

  async function fetchSpotify() {
    const res = await fetch("http://localhost:5000/api/spotify/now-playing");
    const data = await res.json();

    if (!data.isPlaying) {
      const recent = await fetch("http://localhost:5000/api/spotify/recently-played").then(r => r.json());
      setTrack({ ...recent, isPlaying: false });
    } else {
      setTrack({ ...data, isPlaying: true });
    }
  }

  useEffect(() => {
    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, []);

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
