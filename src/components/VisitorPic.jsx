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

  // Fetch drawings from the server
  useEffect(() => {
    const fetchDrawings = async () => {
      const apiUrl = 'https://jdg-backend.onrender.com/api/getDrawings'; // Updated API endpoint
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP status: ${response.status}`);
        }
        
        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("API returned invalid data format (expected an array).");
        }

        // Apply more spread-out layout properties to the fetched data
        const drawingsWithLayout = data.map((d, index) => {
          const angle = (index / data.length) * 360; // Distribute the drawings in a circular pattern
          const radius = 150 + (index % 4) * 50;  // Increase radius for more space
          const xOffset = Math.cos(angle * (Math.PI / 180)) * radius;
          const yOffset = Math.sin(angle * (Math.PI / 180)) * radius;
          
          return {
            ...d,
            x: xOffset, // More spread-out X position
            y: yOffset, // More spread-out Y position
            rotate: (Math.random() * 10 - 5) + (index * 2), // Random rotation for variety
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
        const response = await fetch('https://jdg-backend.onrender.com/api/check-drawing', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to check if drawing was posted.');
        }

        const data = await response.json();
        console.log('Response Data:', data);  // Log response data to check

        setHasPostedNote(data.hasPosted); // Set the state based on response
      } catch (error) {
        console.error(error);
      }
    };

    checkIfPosted(); // Check when the component mounts
  }, []);

  // Function to toggle the visibility of the DrawingBoard
  const toggleDrawingBoard = () => {
    setIsDrawingBoardVisible(prevState => !prevState);
  };

  return (
    <div className="relative w-full h-210 bg-transparent md:max-w-xl lg:min-w-1/6 rounded-xl p-10 mt-10 rounded-xl overflow-hidden">
      {hasPostedNote ? (
        <header className="absolute top-0 left-0 z-10000 w-full h-17 bg-[#252525] opacity-90 flex justify-center items-center">
          <h1 className="text-white">Thank you for Posting! 🫶🏻</h1>
        </header>
      ) : (
        <header className="w-full h-17 absolute top-0 left-0 bg-[#252525] opacity-90 z-10000 flex justify-end items-center px-4">
          <button
            onClick={toggleDrawingBoard} // Toggle the DrawingBoard visibility
            className="text-[15px] text-black w-auto px-3 h-10 rounded-md bg-white"
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
          <div className="text-xl text-gray-500">No drawings found.</div>
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
