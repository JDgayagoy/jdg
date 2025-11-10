import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// at top of file
function installMouseVars() {
  const root = document.documentElement;
  const onMove = (e) => {
    const nx = (e.clientX / window.innerWidth) - 0.5;  // -0.5..0.5
    const ny = (e.clientY / window.innerHeight) - 0.5;
    root.style.setProperty("--mx", nx);
    root.style.setProperty("--my", ny);
  };
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("pointermove", onMove, { passive: true });
}
installMouseVars();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

