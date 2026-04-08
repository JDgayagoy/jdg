import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import pic1 from '../assets/gallery/pic1.jpg';
import pic2 from '../assets/gallery/pic2.jpg';

const galleryImages = [pic1, pic2];

export default function PicturesCard() {
  const [poppedImages, setPoppedImages] = useState([]);

  const handlePopGallery = useCallback(() => {
    const newImages = galleryImages.map((src) => ({
      id: Math.random().toString(36).substr(2, 9),
      src,
      top: `${Math.random() * 50 + 25}%`,
      left: `${Math.random() * 50 + 25}%`,
      rotation: Math.random() * 40 - 20,
      size: Math.random() * 150 + 350,
      delay: Math.random() * 0.6,
    }));
    setPoppedImages((prev) => [...prev, ...newImages]);
  }, []);

  const removeImage = (id) => {
    setPoppedImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={handlePopGallery}
          className="group relative -mt-3 px-8 py-3 overflow-hidden transition-all duration-300 hover:border-white/50 active:scale-95"
        >
          <span className="relative text-md font-medium text-gray-300 group-hover:text-white flex items-center gap-2">
            Open Gallery
          </span>
        </button>
      </div>
      <p className="text-[10px] text-gray-500 font-light -mt-6">Throw photos off the screen!</p>

      {createPortal(
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-visible">
          <AnimatePresence>
            {poppedImages.map((img) => (
              <motion.div
                key={img.id}
                className="absolute pointer-events-auto cursor-grab active:cursor-grabbing group"
                style={{
                  top: img.top,
                  left: img.left,
                  width: img.size,
                  x: "-50%",
                  y: "-50%",
                }}
                initial={{ opacity: 0, scale: 0, rotate: img.rotation - 15 }}
                animate={{ opacity: 1, scale: 1, rotate: img.rotation }}
                exit={{ opacity: 0, scale: 0, rotate: img.rotation + 15 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: img.delay
                }}

                drag
                dragMomentum={true}
                onDragEnd={(_, info) => {
                  const threshold = 50; // allow for some padding so they don't pop away immediately on the edge
                  if (
                    info.point.x < -threshold ||
                    info.point.x > window.innerWidth + threshold ||
                    info.point.y < -threshold ||
                    info.point.y > window.innerHeight + threshold
                  ) {
                    removeImage(img.id);
                  }
                }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 1.05, zIndex: 10000 }}
              >
                <div className="relative bg-[#1a1a1a] p-2 rounded-lg border border-[#333] shadow-2xl transition-colors hover:border-white/20">
                  <img
                    src={img.src}
                    alt="Gallery Pop"
                    className="w-full h-auto rounded-md pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-md pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </div>
  );
}
