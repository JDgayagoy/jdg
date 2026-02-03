import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StadiaMap from "./components/StadiaMap";
import './index.css';
import TechStack from "./components/TechStack";
import Stuffs from "./components/Stuffs";
import Projects from "./components/Projects";
import ProjSummary from "./components/Projsummary";
import Footer from "./components/Footer";
import Certs from "./components/Cert";
import VisitorPic from "./components/VisitorPic";
import {Meteors} from "./components/Meteor";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="relative w-full min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
            <Meteors number={30} />
            <Header />
            <StadiaMap />
            <TechStack />
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
              <div className="relative w-full h-screen bg-transparent -mt-20 md:max-w-xl lg:min-w-1/6 rounded-bl-none rounded-t-xl rounded-tl-xl overflow-hidden text-[#959595] bottom-0">
                <div className="absolute bottom-0 w-full h-auto">
                  <Footer />
                </div>
              </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}
