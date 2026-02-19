import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onFinished }) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Animation duration + some buffer
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
                onFinished?.();
            }, 800); // Match fade-out duration
        }, 2000);

        return () => clearTimeout(timer);
    }, [onFinished]);

    return (
        <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
            <div className="hello-container">
                <svg viewBox="0 0 150 50" className="hello-svg">
                    <path
                        className="hello-path"
                        d="M20,35 Q25,15 35,15 T45,35 M45,35 Q50,15 60,15 T70,35 M70,35 L70,10 M85,35 L85,10 M100,25 Q110,15 120,25 T130,25"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Using text for better cursive look if path is tricky, but let's try path first for drawing effect */}
                    <text
                        x="50%"
                        y="55%"
                        textAnchor="middle"
                        className="hello-text"
                    >
                        JD.dev
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default LoadingScreen;
