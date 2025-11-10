import Project1 from '../assets/mockup.png';
import Project2 from '../assets/Project1.png';
import Project3 from '../assets/swiftscan.jpg';
import Project4 from '../assets/nicerice.jpg';
import React, { useState, useEffect, use } from "react";
import { motion } from 'framer-motion';

export default function Projects() {
    useEffect(() =>{
        window.scrollTo(0,0);
    }, []);

    return(
        
        <section className="relative w-full h-auto mb-10 bg-transparent md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl p-4 mt-4 overflow-hidden">
            <h1 className='font-medium text-2xl ml-3 mb-3 z-1000'>My Projects</h1>
        <motion.div
            whileHover={{
                backgroundColor:"#292929",
                transition: { duration: 0.2 },
            }}
            whileInView={{
                top:0,
                opacity:100,
                transition: { type:"spring", duration:0.5}
            }}
            className="relative w-full h-[300px] border border-b-0 opacity-10 -top-50 border-[#252525] px-4 py-2 mt-15 rounded-t-[8px] flex flex-col items-center gap-4 overflow-hidden">
                <motion.div6
                whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                }}
                className="absolute w-[93%] h-[93%] bg-cover bg-center -bottom-2 rounded-[8px]"
                style={{ backgroundImage: `url(${Project3})` }}>
                </motion.div6>
                <div className="w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000 absolute bottom-0 pointer-events-none"></div>
            </motion.div>
            <div className='relative w-full h-auto px-5 mt-2'>
                <h2 className='text-xl font-bold'>JD.dev</h2>
                <p className='text-[13px] font-sans text-gray-400 text-justify w-full mt-1'>A professional portfolio Website.</p>
            </div>
            <div className='relative w-full h-auto px-5 mt-5 flex gap-4'>
                <motion.div 
                whileHover={{
                    background: "#252525",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex opacity-30 justify-center items-center py-1 gap-2 bg-black pointer-events-none'>
                    <i class="devicon-github-original"></i>
                    <a href="" className='text-[13px]'>Source</a>
                </motion.div>
                <motion.div
                whileHover={{
                    background: "#CECECE",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 text-black bg-white '>
                    <i class="bx bx-globe-alt bx-flip-horizontal"></i>
                    <a href="" className='text-[14px]'>Visit</a>
                </motion.div>
            </div>
        
        
            <motion.div
            whileHover={{
                backgroundColor:"#9A9999",
                transition: { duration: 0.2 },
            }}
            whileInView={{
                top:0,
                opacity:100,
                transition: { type:"spring", duration:0.5}
            }}
            className="relative w-full h-[300px] opacity-10 -top-50 border border-b-0 border-[#252525] px-4 py-2 mt-6 rounded-t-[8px] flex flex-col items-center gap-4 overflow-hidden">
                <motion.div
                whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                }}
                className="absolute w-[93%] h-[93%] bg-cover bg-center -bottom-2 rounded-[8px]"
                style={{ backgroundImage: `url(${Project1})` }}>
                </motion.div>
                <div className="w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000 absolute bottom-0 pointer-events-none"></div>
            </motion.div>
            <div className='relative w-full h-auto px-5 mt-2'>
                <h2 className='text-xl font-bold'>KICKS</h2>
                <p className='text-[13px] font-sans text-gray-400 text-justify w-full mt-1'>Shoe E-Commerce Platform built with Ionic/Angular and Firebase</p>
            </div>
            <div className='relative w-full h-auto px-5 mt-5 flex gap-4'>
                <motion.div 
                whileHover={{
                    background: "#252525",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 bg-black'>
                    <i class="devicon-github-original"></i>
                    <a href="" className='text-[13px]'>Source</a>
                </motion.div>
                <motion.div
                whileHover={{
                    background: "#CECECE",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center opacity-30 pointer-events-none items-center py-1 gap-2 text-black bg-white '>
                    <i class="bx bx-globe-alt bx-flip-horizontal"></i>
                    <a href="" className='text-[14px]'>Visit</a>
                </motion.div>
            </div>

            <motion.div
            whileHover={{
                backgroundColor:"#0A267B",
                transition: { duration: 0.2 },
            }}
            whileInView={{
                top:0,
                opacity:100,
                transition: { type:"spring", duration:0.5}
            }}
            className="relative w-full h-[300px] opacity-10 -top-50 border border-b-0 border-[#252525] px-4 py-2 mt-15 rounded-t-[8px] flex flex-col items-center gap-4 overflow-hidden">
                <motion.div6
                whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                }}
                className="absolute w-[93%] h-[93%] bg-cover bg-center -bottom-2 rounded-[8px]"
                style={{ backgroundImage: `url(${Project2})` }}>
                </motion.div6>
                <div className="w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000 absolute bottom-0 pointer-events-none"></div>
            </motion.div>
            <div className='relative w-full h-auto px-5 mt-2'>
                <h2 className='text-xl font-bold'>BoardNBunk</h2>
                <p className='text-[13px] font-sans text-gray-400 text-justify w-full mt-1'>A Booking platform for Boarding House in Tuguegarao City.</p>
            </div>
            <div className='relative w-full h-auto px-5 mt-5 flex gap-4'>
                <motion.div 
                whileHover={{
                    background: "#252525",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 bg-black'>
                    <i class="devicon-github-original"></i>
                    <a href="" className='text-[13px]'>Source</a>
                </motion.div>
                <motion.div
                whileHover={{
                    background: "#CECECE",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 text-black bg-white '>
                    <i class="bx bx-globe-alt bx-flip-horizontal"></i>
                    <a href="" className='text-[14px]'>Visit</a>
                </motion.div>
            </div>
              
            <motion.div
            whileHover={{
                backgroundColor:"#347D17",
                transition: { duration: 0.2 },
            }}
            whileInView={{
                top:0,
                opacity:100,
                transition: { type:"spring", duration:0.5}
            }}
            className="relative w-full h-[300px] border border-b-0 opacity-10 -top-50 border-[#252525] px-4 py-2 mt-15 rounded-t-[8px] flex flex-col items-center gap-4 overflow-hidden">
                <motion.div6
                whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                }}
                className="absolute w-[93%] h-[93%] bg-cover bg-center -bottom-2 rounded-[8px]"
                style={{ backgroundImage: `url(${Project4})` }}>
                </motion.div6>
                <div className="w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000 absolute bottom-0 pointer-events-none"></div>
            </motion.div>
            <div className='relative w-full h-auto px-5 mt-2'>
                <h2 className='text-xl font-bold'>NiceRice</h2>
                <p className='text-[13px] font-sans text-gray-400 text-justify w-full mt-1'>An automated Paddy Rice Drying and Storage system using IoT technology, Connected to a Flutter Application using ESP32 Bluetooth connection.</p>
            </div>
            <div className='relative w-full h-auto px-5 mt-5 flex gap-4'>
                <motion.div 
                whileHover={{
                    background: "#252525",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 bg-black'>
                    <i class="devicon-github-original"></i>
                    <a href="" className='text-[13px]'>Source</a>
                </motion.div>
                <motion.div
                whileHover={{
                    background: "#CECECE",
                    transition: { duration: 0.2 },
                }}
                whileTap={{
                    scale: 0.8,
                    transition: {duration: 0.3},
                }}
                className='w-26 h-10 rounded-sm flex justify-center opacity-30 pointer-events-none items-center py-1 gap-2 text-black bg-white '>
                    <i class="bx bx-globe-alt bx-flip-horizontal"></i>
                    <a href="" className='text-[14px]'>Visit</a>
                </motion.div>
            </div>  
        </section>
    )
}