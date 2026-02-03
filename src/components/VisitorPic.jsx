import React, { useState, useEffect, useRef } from 'react';
import DrawingCard from './DrawingCard'; // Import the DrawingCard
import DrawingBoard from './DrawingBoard'; // Import the DrawingBoard component

const RandomPic = () => {
  const [drawings, setDrawings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dragContainerRef = useRef(null);
  const [hasPostedNote, setHasPostedNote] = useState(false);
  const [isDrawingBoardVisible, setIsDrawingBoardVisible] = useState(false); // State for DrawingBoard visibility

  // Fetch drawings from the server with caching
  useEffect(() => {
    const fetchDrawings = async () => {
      const apiUrl = 'https://jdg-backend.onrender.com/api/getDrawings';
      try {
        // Import cache utility dynamically to avoid circular dependencies
        const { fetchWithCache } = await import('../utils/apiCache');
        const data = await fetchWithCache(apiUrl, {
          cacheDuration: 60 * 1000, // Cache drawings for 1 minute
          deduplicate: true,
        });

        if (!Array.isArray(data)) {
          throw new Error("API returned invalid data format (expected an array).");
        }

        // Apply more spread-out layout properties to the fetched data
        const drawingsWithLayout = data.map((d, index) => {
          const angle = (index / data.length) * 360;
          const radius = 150 + (index % 4) * 50;
          const xOffset = Math.cos(angle * (Math.PI / 180)) * radius;
          const yOffset = Math.sin(angle * (Math.PI / 180)) * radius;
          
          return {
            ...d,
            x: xOffset,
            y: yOffset,
            rotate: (Math.random() * 10 - 5) + (index * 2),
          };
        });

        setDrawings(drawingsWithLayout);
        setError(null);
      } catch (e) {
        console.error("Fetch failed:", e);
        setError(`Failed to load drawings: ${e.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDrawings();
  }, []);

  // Check if a note has been posted
  useEffect(() => {
    const checkIfPosted = async () => {
      try {
        const { fetchWithCache } = await import('../utils/apiCache');
        const data = await fetchWithCache('https://jdg-backend.onrender.com/api/check-drawing', {
          cacheDuration: 30 * 1000, // Cache for 30 seconds
          deduplicate: true,
        });

        setHasPostedNote(data.hasPosted);
      } catch (error) {
        console.error("Error checking if drawing was posted:", error);
        setHasPostedNote(false);
      }
    };

    checkIfPosted();
  }, []);

  // Function to toggle the visibility of the DrawingBoard
  const toggleDrawingBoard = () => {
    setIsDrawingBoardVisible(prevState => !prevState);
  };

  return (
    <div className="relative w-full h-210 bg-transparent md:max-w-xl lg:min-w-1/6 rounded-xl p-10 mt-10 mb-10 rounded-xl overflow-hidden">
      {hasPostedNote ? (
        <header className="absolute top-0 left-0 z-10000 w-full p-4 h-17 bg-[#252525] opacity-90 flex justify-center items-center">
          <h1 className="text-white">Thank you for Posting! 🫶🏻</h1>
        </header>
      ) : (
        <header className="w-full h-14 absolute top-0 left-0 bg-[#252525] opacity-90 z-10000 flex justify-end items-center px-4">
          <button
            onClick={toggleDrawingBoard} // Toggle the DrawingBoard visibility
            className="text-[13px] text-black w- px-3 h-7 rounded-md bg-white"
          >
            Leave a Note
          </button>
        </header>
      )}

      {/* If DrawingBoard is visible, create a backdrop with blur */}
      {isDrawingBoardVisible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg[#0A0A0A] bg-opacity-50 backdrop-blur-sm z-10000">
          <DrawingBoard toggleDrawingBoard={toggleDrawingBoard} />
        </div>
      )}

      <div
        ref={dragContainerRef}
        className="absolute top-0 left-0 w-full h-full border border-[#252525] flex items-center justify-center overflow-hidden rounded-xl"
      >
        {loading ? (
          <div className="text-xl text-gray-500 animate-pulse">Loading drawings...</div>
        ) : drawings.length === 0 ? (
          <div className="text-md text-gray-500">No drawings found.</div>
        ) : (
          drawings.map((drawing, index) => (
            <DrawingCard
              key={drawing.id || index}
              drawing={drawing}
              layout={{ x: drawing.x, y: drawing.y, rotate: drawing.rotate }}
              index={index}
              total={drawings.length}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RandomPic;
