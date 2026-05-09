import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Socials from "./components/Socials";
import Career from "./components/Career";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Certification from "./components/Certification";
import Github from "./components/Github";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans transition-colors duration-300" style={{ backgroundColor: 'var(--page-bg)' }}>
      <main className="relative top-0 h-full flex flex-1 w-full max-w-3xl flex-col items-center sm:items-start">
        <Navbar />
        <Hero />
        <Aboutme />
        <Socials />
        <Career />
        <Skills />
        <Project />
        <Github />
        <Certification />
        <Footer />
      </main>
    </div>
  );
}
