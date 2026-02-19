import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import projectsData from '../data/projects';

export default function ProjSummary() {
    // Only show first 4 projects in summary
    const summaryProjects = projectsData.slice(0, 4);

    return (
        <section className="relative w-full h-auto bg-transparent md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl p-4 mt-10 overflow-hidden">
            <div className="absolute top-0 left-4 w-auto h-6 px-2 py-2 bg-[#252525] flex justify-center items-center rounded-[2px] text-[10px] font-semibold">
                <p className='text-[#5F5F5F] relative z-1000'>RECENT PROJECTS</p>
            </div>

            {/* Grid Layout for Project Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 mb-3">
                {summaryProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        whileHover={{
                            backgroundColor: "#252525",
                            transition: { duration: 0.2 },
                        }}
                        whileInView={{
                            bottom: 0,
                            top: 0,
                            transition: { type: "spring", duration: 1 }
                        }}
                        initial={{
                            position: "relative",
                            bottom: index % 2 === 0 ? 40 : 0,
                            top: index % 2 !== 0 ? -50 : 0
                        }}
                        className="relative p-4 overflow-hidden border border-[#252525] rounded-[8px]">
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                y: -3,
                                transition: { duration: 0.2 }
                            }}
                            className="w-full h-40 bg-center bg-cover rounded-[4px]"
                            style={{ backgroundImage: `url(${project.image})` }}>
                        </motion.div>
                        <p className="text-sm text-white mt-3 font-semibold z-1000 relative">{project.title}</p>
                        <p className='text-[12px] font-light mt-1.5 bt-2 z-1000 relative'>{project.shortDescription}</p>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-[#0A0A0A] to-transparent"></div>
                    </motion.div>
                ))}
            </div>
            <motion.li
                whileHover={{
                    scale: 1.01,
                    y: -2,
                    fontWeight: 600
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className='list-none flex justify-center mt-4 w-30 gap-1 align-middle items-center'>
                <Link to="/project" className="text-[13px] ml-0.5 text-white">More Projects</Link>
                <i className='bxr bx-arrow-right-stroke'></i>
            </motion.li>
        </section>
    );
}   