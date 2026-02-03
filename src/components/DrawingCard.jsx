import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DrawingCard = ({ drawing, layout, index, total }) => {
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
  };

  return (
    <motion.div
      className="absolute w-[160px] h-auto bg-[#343434] border border-[#7C7C7C] rounded-md p-2"
      drag 
      dragConstraints={{ top: -200, left: -200, right: 200, bottom: 200 }}
      dragElastic={0.5}
      whileDrag={{ scale: 1.1, cursor: 'grabbing', zIndex: 99 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}

      initial={{ opacity: 0, scale: 0.5, ...layout }}
      animate={{ opacity: 1, scale: 1, ...layout }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: index * 0.1,
      }}
    >
      <div className="w-full h-34 mb-2">
        {!isError && drawing.imageUrl ? (
          <img
            src={drawing.imageUrl}
            alt={`Drawing by ${drawing.name}`}
            className="w-full h-full object-cover rounded-md pointer-events-none select-none"
            onError={handleError}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <span>Failed to load image</span>
          </div>
        )}
      </div>

      <div className="text-black text-[13px] flex flex-col mt-2">
        <h6 className="text-[11px] font-bold text-[#AFAEAE]">{drawing.name || 'Anonymous'}</h6>
        <p className="line-clamp-2 text-[12px] text-white">
          {drawing.message || 'No comment'}
        </p>
      </div>
    </motion.div>
  );
};

export default DrawingCard;
