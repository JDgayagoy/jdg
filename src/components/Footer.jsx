import { motion } from "framer-motion"

export default function Footer() {
    // Define the URLs here for clarity and easy updating
    const GITHUB_URL = "https://github.com/JDgayagoy"; 
     // Replace with your actual email address

    return (
        <section className="relative w-full h-20 bg-transparent -mt-0 md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl overflow-hidden text-[#959595]">
            <div className=" bg-transparent w-full h-full flex justify-around gap-30 items-center px-4 md:px-0">
                <div className="flex gap-4 items-center">
                    
                    {/* --- GITHUB LINK (Redirects to your account) --- */}
                    <motion.a 
                        href={GITHUB_URL} // Set the GitHub URL here
                        target="_blank"  // Open link in a new tab
                        rel="noopener noreferrer"
                        className="flex gap-1 items-center md:scale-105 cursor-pointer"
                        whileHover={{
                            color: "white",
                            transition: { duration: 1 }
                        }}>
                        <i className="devicon-github-original"></i>
                        <span className="hidden md:inline-block lg:inline-block text-[14px]">Github</span>
                    </motion.a>

                    {/* --- CONTACT LINK (Opens email client) --- */}
                    <motion.a 
                        href={ "/contacts "} // Set the mailto link here
                        className="flex gap-1 items-center cursor-pointer"
                        whileHover={{
                            color: "white",
                            transition: { duration: 1 }
                        }}>
                        <i className='bxr bx-envelope'></i>
                        <span className="hidden md:inline-block lg:inline-block text-[14px]">Contact</span>
                    </motion.a>
                </div>
                <p className="text-sm text-[#959595]">Last updated: November 2025</p>
            </div>
        </section>
    )
}