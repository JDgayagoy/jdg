import { motion } from "framer-motion"
import { useState } from "react"; 
import ReactDOM from 'react-dom'; 

import Project1 from '../assets/cse.jpg';
import Project2 from '../assets/webdesign.jpg';
import Project3 from '../assets/swiftscan.jpg';

const CERT_IMAGES = {
    civilService: Project1,
    ictCompetition: Project2, 
    icast: Project3,         
};

const DraggableCertImage = ({ url, imageKey }) => {
    if (typeof document === 'undefined' || !url) {
        return null;
    }

    return ReactDOM.createPortal(
        <motion.img
            key={imageKey}
            src={url}
            alt="Certificate or Award"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] w-64 h-auto cursor-grab shadow-2xl rounded-lg" 
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ 
                opacity: 1, 
                scale: 3, 
                rotate: 0, 
            }} 
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            
            drag 
            dragTransition={{ power: 0, timeConstant: 0 }}

            dragConstraints={{ 
                left: -window.innerWidth / 2, 
                right: window.innerWidth / 2, 
                top: -window.innerHeight / 2, 
                bottom: window.innerHeight / 2 
            }} 
            whileDrag={{ scale: 2.5 }} 
        />,
        document.body
    );
};

export default function Certs(){
    const [displayedImage, setDisplayedImage] = useState({ url: null, key: null });

    const techItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const handleCertClick = (imageUrl, imageKey) => {
        if (displayedImage.key === imageKey) {
            setDisplayedImage({ url: null, key: null });
        } else {
            setDisplayedImage({ url: imageUrl, key: imageKey });
        }
    };

    return(
        <> 
            <section className="relative w-full h-auto bg-transparent md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl p-4 mt-10">
                <div className="absolute top-0 left-4 w-auto h-6 px-2 py-2 bg-[#252525] flex justify-center items-center rounded-[2px] text-[10px] font-semibold">
                    <p className='text-[#5F5F5F] relative z-1000'>CERTS & AWARDS</p>
                </div>
                
                <motion.div className="mt-6 relative bg-transparent w-full h-80 flex flex-col gap-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                        transition: { staggerChildren: 1 },
                        },
                    }}>
                    
                    {/* Certificate 1: Civil Service */}
                    <motion.div 
                        className="w-full relative bg-transparent w-full h-auto py-5 border border-[#252525] rounded-md group cursor-pointer"
                        variants={techItemVariants}
                        whileHover={{ backgroundColor: "#252525", scale: 1.02 }}
                        onClick={() => handleCertClick(CERT_IMAGES.civilService, 'civilService')} 
                    >
                        <div className="flex w-full h-auto justify-between px-4">
                            <h2 className="font-medium text-[15px]">Civil Service Eligibile Professional</h2>
                            <p className="font-extralight text-[13px]  text-gray-400">March 2025</p>
                        </div>
                        <p className="text-justify px-4 text-[12px] mt-4 font-light opacity-0 hidden group-hover:inline-block group-hover:opacity-100 transition duration-200 ease-in-out">Passed Civil Service Examination - Professional Level.</p>
                    </motion.div>
                    
                    {/* Certificate 2: ICT Competition */}
                    <motion.div 
                        className="w-full relative bg-transparent w-full h-auto py-5 border border-[#252525] rounded-md group cursor-pointer"
                        variants={techItemVariants}
                        whileHover={{ backgroundColor: "#252525", scale: 1.02 }}
                        onClick={() => handleCertClick(CERT_IMAGES.ictCompetition, 'ictCompetition')} 
                    >
                        <div className="flex w-full h-auto justify-between px-4">
                            <h2 className="font-medium text-[15px]">1st Runner up - ICT Competition: Web Design</h2>
                            <p className="font-extralight text-[13px]  text-gray-400">April 2025</p>
                        </div>
                        <p className="text-justify px-4 text-[12px] mt-4 font-light opacity-0 hidden group-hover:inline-block group-hover:opacity-100 transition duration-200 ease-in-out">Placed 1st Runner up in a National level Web design competiton held at Echague, Isabela.</p>
                    </motion.div>
                    
                    {/* Certificate 3: ICAST */}
                    <motion.div 
                        className="w-full relative bg-transparent w-full h-auto py-5 border border-[#252525] rounded-md flex flex-col group cursor-pointer"
                        variants={techItemVariants}
                        whileHover={{ backgroundColor: "#252525", scale: 1.02 }}
                        onClick={() => handleCertClick(CERT_IMAGES.icast, 'icast')} 
                    >
                        <div className="flex w-full h-auto justify-between px-4">
                            <h2 className="font-medium text-[15px] text-white">ICAST</h2>
                            <p className="font-extralight text-[13px] text-gray-400">February 2025</p>
                        </div>
                        <p className="text-justify px-4 text-[12px] mt-4 font-light opacity-0 hidden group-hover:inline-block group-hover:opacity-100 transition duration-200 ease-in-out">Certificate of participation from ICAST coordinated by CSU & Yuvakshetra Institute of Management Studies, India</p>
                    </motion.div>
                </motion.div>
            </section>
            
            {/* Render the portal component */}
            <DraggableCertImage 
                url={displayedImage.url} 
                imageKey={displayedImage.key}
                // 🔑 FIX 4: The 'onClose' prop was removed from here since it's unused in the portal component
            />
        </>
    );
};