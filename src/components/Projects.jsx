import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import projectsData from '../data/projects';

export default function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative w-full h-auto mb-10 bg-transparent md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl p-4 mt-4 overflow-hidden">
            <h1 className='font-medium text-2xl ml-3 mb-3 z-1000'>My Projects</h1>

            {projectsData.map((project) => (
                <div key={project.id} className="mt-8">
                    <motion.div
                        whileHover={{
                            backgroundColor: project.bgColor,
                            transition: { duration: 0.2 },
                        }}
                        whileInView={{
                            top: 0,
                            opacity: 1,
                            transition: { type: "spring", duration: 0.5 }
                        }}
                        initial={{ top: -50, opacity: 0.1 }}
                        className="relative w-full h-[300px] border border-b-0 border-[#252525] px-4 py-2 rounded-t-[8px] flex flex-col items-center gap-4 overflow-hidden">
                        <motion.div
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.2 },
                            }}
                            className="absolute w-[93%] h-[93%] bg-cover bg-center -bottom-2 rounded-[8px]"
                            style={{ backgroundImage: `url(${project.image})` }}>
                        </motion.div>
                        <div className="w-full h-1/2 bg-gradient-to-t from-[#0A0A0A] to-transparent z-1000 absolute bottom-0 pointer-events-none"></div>
                    </motion.div>

                    <div className='relative w-full h-auto px-5 mt-2'>
                        <h2 className='text-xl font-bold'>{project.title}</h2>
                        <p className='text-[13px] font-sans text-gray-400 text-justify w-full mt-1'>{project.description}</p>
                    </div>

                    <div className='relative w-full h-auto px-5 mt-5 flex gap-4'>
                        <motion.div
                            whileHover={{
                                background: "#252525",
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.3 },
                            }}
                            className={`w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 bg-black ${!project.isSourceAvailable ? 'opacity-30 pointer-events-none' : ''}`}>
                            <i className="devicon-github-original"></i>
                            <a href={project.githubUrl} className='text-[13px]'>Source</a>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                background: "#CECECE",
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{
                                scale: 0.8,
                                transition: { duration: 0.3 },
                            }}
                            className={`w-26 h-10 rounded-sm flex justify-center items-center py-1 gap-2 text-black bg-white ${!project.isLive ? 'opacity-30 pointer-events-none' : ''}`}>
                            <i className="bx bx-globe-alt bx-flip-horizontal"></i>
                            <a href={project.liveUrl} className='text-[14px]'>Visit</a>
                        </motion.div>
                    </div>
                </div>
            ))}
        </section>
    )
} 