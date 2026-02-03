import { useState, useEffect } from 'react';

/**
 * Time Display Component - Memoized to prevent unnecessary re-renders
 * Updates only the time, preventing parent component re-renders
 */
export default function TimeDisplay() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    })
  );

  useEffect(() => {
    // Update time every minute instead of every second
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZoneName: 'short',
        })
      );
    }, 60000); // Update every 60 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="px-4 absolute top-3 right-7 sm:top-2 sm:right-6 z-1000 rounded-md bg-[#111111] px-3 py-1.5 font-mono text-sm">
      {time}
    </div>
  );
}
