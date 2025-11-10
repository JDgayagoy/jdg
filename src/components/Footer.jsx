import {motion } from "framer-motion"
export default function Footer() {
    return (
        <section className="relative w-full h-20 bg-transparent -mt-0 md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl overflow-hidden text-[#959595]">
            <div className=" bg-transparent w-full h-full flex justify-around gap-30 items-center">
                <div className="flex gap-4 items-center">
                    <motion.div className="flex gap-1 items-center md:scale-105 cursor-pointer"
                    whileHover={{
                        color: "white",
                        transition: { duration: 1 }
                    }}>
                        <i class="devicon-github-original"></i>
                        <a className="hidden md:inline-block lg:inline-block text-[14px]">Github</a>
                    </motion.div>
                    <motion.div className="flex gap-1 items-center cursor-pointer"
                                        whileHover={{
                        color: "white",
                        transition: { duration: 1 }
                    }}>
                        <i class='bxr  bx-envelope'></i>
                        <a className="hidden md:inline-block lg:inline-block text-[14px]">Contact</a>
                    </motion.div>
                </div>
                <p className="text-sm text-[#959595]">Last updated: November 2025</p>
            </div>
        </section>
    )
}