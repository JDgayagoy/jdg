import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import StadiaMap from "./components/StadiaMap";
import './index.css';
import TechStack from "./components/TechStack";
import Stuffs from "./components/Stuffs";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ProjSummary from "./components/Projsummary";
import Footer from "./components/Footer";
import Certs from "./components/Cert";
import VisitorPic from "./components/VisitorPic";
import { Meteors } from "./components/Meteor";
import LoadingScreen from "./components/LoadingScreen";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
      <Router>
        <Routes>
          <Route path="/" element={
            <div className={`relative w-full min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
              <Meteors number={30} />
              <Header />
              <StadiaMap />
              <TechStack />
              <Experience />
              <Stuffs />
              <ProjSummary />
              <Certs />
              <Footer />
            </div>
          } />

          <Route path="/project" element={
            <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
              <Meteors number={30} />
              <Header />
              <Projects />
              <Footer />
            </div>
          } />

          <Route path="/visitors" element={
            <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
              <Meteors number={30} />
              <Header />
              <VisitorPic />
              <Footer />
            </div>
          } />

          <Route path="/contacts" element={
            <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
              <Meteors number={30} />
              <Header />
              <div className="relative z-10 w-full h-full flex items-center justify-center mb-10 mt-10">
                <ContactForm />
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </>
  );
}
