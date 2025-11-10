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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="relative w-full min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
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
              <Header />
              <Projects />
              <Footer />
          </div>
        } />

        <Route path="/visitors" element={
          <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
              <Header />
          </div>
        } />
      </Routes>
    </Router>
  );
}
