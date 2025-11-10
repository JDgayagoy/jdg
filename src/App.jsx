import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StadiaMap from "./components/StadiaMap";
import './index.css';
import TechStack from "./components/TechStack";
import Stuffs from "./components/Stuffs";
import ProjSummary from "./components/Projsummary";

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
          </div>
        } />

        <Route path="/project" element={
          <div className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
              <Header />
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
