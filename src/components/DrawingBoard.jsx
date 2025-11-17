import React, { useRef, useEffect, useState, useCallback } from 'react';

const BACKGROUND_COLOR = '#E0E0E0'; 
const CANVAS_ASPECT_RATIO = 600 / 510; 
const MAX_HISTORY_SIZE = 50;
const API_URL = 'http://jdg-backend.onrender.com/api/postDrawing';

/**
 * Custom Notification Component (Replaces alert() and window.alert())
 * NOTE: Boxicons (bx) assumed to be loaded for icons.
 */
const Notification = ({ notification, onClose }) => {
    if (!notification) return null;

    const { message, type } = notification;
    
    // Determine styles based on type
    let bgColor = 'bg-green-500';
    let icon = 'bx bx-check-circle';
    if (type === 'error') {
        bgColor = 'bg-red-500';
        icon = 'bx bx-x-circle';
    } else if (type === 'info') {
        bgColor = 'bg-blue-500';
        icon = 'bx bx-info-circle';
    }

    // Auto-close after 5 seconds
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [notification, onClose]);

    return (
        <div 
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl text-white max-w-sm transition-all duration-300 transform ${bgColor}`}
            role="alert"
        >
            <div className="flex items-start">
                <i className={`${icon} text-2xl mr-3`}></i>
                <div className="flex-grow">
                    <p className="font-bold capitalize">{type}!</p>
                    <p className="text-sm">{message}</p>
                </div>
                <button 
                    onClick={onClose} 
                    className="ml-4 -mt-1 text-white opacity-70 hover:opacity-100"
                    aria-label="Close notification"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};


export default function DrawingBoard({toggleDrawingBoard}) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const containerRef = useRef(null); 
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const [color, setColor] = useState('#000000'); 
    const [size, setSize] = useState(15);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
    const [mode, setMode] = useState('draw'); 
    
    const [showColorPalette, setShowColorPalette] = useState(false); 
    const [showSizeSlider, setShowSizeSlider] = useState(false); 
    
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    
    // --- NEW STATE FOR POSTING AND NOTIFICATION ---
    const [isPosting, setIsPosting] = useState(false);
    const [notification, setNotification] = useState(null); // { message, type: 'success' | 'error' }
    // ----------------------------------------------

    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const colorOptions = ['#FF0000', '#000000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080', BACKGROUND_COLOR];

    const handleColorSelect = (c) => {
        setColor(c);
        setMode('draw');
        setShowColorPalette(false); 
    };
    
    const drawFromHistory = useCallback((dataURL) => {
        const ctx = contextRef.current;
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;

        // Start by clearing, then draw the saved image data
        ctx.globalCompositeOperation = 'source-over'; 
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            
            // --- MODIFICATION HERE ---
            ctx.lineWidth = size;
            
            if (mode === 'erase') {
                // When re-rendering history for erase mode, use the background color
                ctx.strokeStyle = BACKGROUND_COLOR; 
                ctx.globalCompositeOperation = 'source-over'; // Must be source-over for drawing color
                ctx.imageSmoothingEnabled = false; 
            } else {
                ctx.strokeStyle = color; 
                ctx.globalCompositeOperation = 'source-over';
                ctx.imageSmoothingEnabled = true; 
            }
            // -------------------------
        };
        img.src = dataURL;
    }, [color, size, mode]); // Keep dependencies

    const saveToHistory = useCallback((canvas) => {
        if (!canvas) return;
        const newHistoryItem = canvas.toDataURL();
        
        setHistory(prevHistory => {
            const newHistory = prevHistory.slice(0, historyIndex + 1);
            newHistory.push(newHistoryItem);

            if (newHistory.length > MAX_HISTORY_SIZE) { // Using MAX_HISTORY_SIZE constant
                newHistory.shift(); 
                setHistoryIndex(newHistory.length - 1);
                return newHistory;
            } else {
                setHistoryIndex(newHistory.length - 1);
                return newHistory;
            }
        });
    }, [historyIndex]); 


    const updateCanvasResolution = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        
        if (!canvas || !container) return;
        
        const containerWidth = container.offsetWidth - 32; 
        const newWidth = containerWidth;
        const newHeight = newWidth / CANVAS_ASPECT_RATIO; 
        
        if (canvas.width !== newWidth || canvas.height !== newHeight) {
             // 1. Save current drawing state before resizing
            const currentDataURL = history[historyIndex];
            
            canvas.width = newWidth; 
            canvas.height = newHeight;
            setCanvasSize({ width: newWidth, height: newHeight });

            const ctx = canvas.getContext('2d');
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.fillStyle = BACKGROUND_COLOR; 
            contextRef.current = ctx; 

            if (currentDataURL) {
                drawFromHistory(currentDataURL);
            } else {
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = BACKGROUND_COLOR;
                ctx.fillRect(0, 0, newWidth, newHeight);
                if (history.length === 0) saveToHistory(canvas); 
            }
        }
    }, [history, historyIndex, drawFromHistory, saveToHistory]);


    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current; 
        
        if (canvas && container) {
            const ctx = canvas.getContext('2d');
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.imageSmoothingEnabled = true; 
            contextRef.current = ctx;

            const observer = new ResizeObserver(entries => {
                if (entries[0].target === container) { 
                    updateCanvasResolution();
                }
            });

            updateCanvasResolution();
            observer.observe(container);

            return () => {
                if (container) {
                    observer.unobserve(container); 
                }
            };
        }
    }, [updateCanvasResolution]);


useEffect(() => {
        const ctx = contextRef.current;
        if (ctx) {
            ctx.lineWidth = size;
            
            // --- MODIFICATION HERE ---
            // Always set composite operation to 'source-over'
            ctx.globalCompositeOperation = 'source-over'; 
            
            if (mode === 'erase') {
                // Erasing means drawing in the background color
                ctx.imageSmoothingEnabled = false;
                ctx.strokeStyle = BACKGROUND_COLOR; 
            } else {
                // Drawing means drawing in the selected color
                ctx.imageSmoothingEnabled = true;
                ctx.strokeStyle = color; 
            }
            // -------------------------
            
            ctx.fillStyle = BACKGROUND_COLOR;
        }
    }, [color, size, mode]); // Keep dependencies

    const getCoordinates = useCallback((e) => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) { clientX = e.touches[0].clientX; clientY = e.touches[0].clientY; } 
        else { clientX = e.clientX; clientY = e.clientY; }

        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        let x = (clientX - rect.left) * scaleX;
        let y = (clientY - rect.top) * scaleY;
        
        x = Math.floor(x);
        y = Math.floor(y);
        
        return { x, y };
    }, []);

    const startDrawing = useCallback((e) => {
        const { x, y } = getCoordinates(e);
        setLastPosition({ x, y });
        setIsDrawing(true);
        
        const ctx = contextRef.current;
        if (ctx) {
             // Draw a single dot immediately for better touch response
            ctx.beginPath();
            if (mode === 'erase') {
                ctx.strokeStyle = BACKGROUND_COLOR; 
                ctx.fillStyle = BACKGROUND_COLOR;
            } else {
                ctx.strokeStyle = color; 
                ctx.fillStyle = color;
            }
            ctx.arc(x, y, size / 2, 0, Math.PI * 2, false); 
            ctx.fill(); 
        }

    }, [getCoordinates, size, mode, color]);

    const draw = useCallback((e) => {
        if (!isDrawing) return;
        if (e.type.startsWith('touch')) e.preventDefault(); 
        
        const ctx = contextRef.current;
        const currentPos = getCoordinates(e);

        ctx.beginPath();
        ctx.moveTo(lastPosition.x, lastPosition.y);
        ctx.lineTo(currentPos.x, currentPos.y);
        ctx.stroke();

        setLastPosition(currentPos);
    }, [isDrawing, lastPosition, getCoordinates]);

    const stopDrawing = useCallback(() => {
        if (isDrawing) {
            saveToHistory(canvasRef.current);
        }
        setIsDrawing(false);
    }, [isDrawing, saveToHistory]);

    const handleUndo = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            drawFromHistory(history[newIndex]);
            setHistoryIndex(newIndex);
        }
    };

    const handleRedo = () => {
        if (historyIndex < history.length - 1) {
            const newIndex = historyIndex + 1;
            drawFromHistory(history[newIndex]);
            setHistoryIndex(newIndex);
        }
    };
    
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = contextRef.current;
        if (ctx && canvas) {
            ctx.globalCompositeOperation = 'source-over'; 
            ctx.imageSmoothingEnabled = true; 
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = BACKGROUND_COLOR;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.globalCompositeOperation = mode === 'erase' ? 'destination-out' : 'source-over'; 
            ctx.strokeStyle = mode === 'erase' ? '#000000' : color; 
            
            saveToHistory(canvas); 
        }
    };
    
// --- REFACTORED handlePost FUNCTION ---
    const handlePost = async () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        // Simple validation check before post
        if (message.trim() === '') {
             setNotification({ type: 'error', message: 'Please provide a message for your drawing.' });
             return;
        }

        setIsPosting(true);
        const dataURL = canvas.toDataURL('image/png');

        console.log("--- POST DATA READY ---");
        console.log("Name:", name);
        console.log("Message:", message);
        console.log("Image Data URL (Base64):", dataURL.substring(0, 50) + "...");
        console.log("-----------------------");

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    message,
                    imageData: dataURL, 
                }),
            });

            if (!response.ok) {
                // Read the custom error message from the server (e.g., the IP limit error)
                let errorData = {};
                try {
                    errorData = await response.json();
                } catch (e) {
                    // response body wasn't JSON, use generic text
                }
                const errorMessage = errorData.error || `Error: ${response.statusText} (${response.status})`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            console.log('Successfully posted drawing:', data);
            setNotification({ type: 'success', message: `Drawing by ${name || 'Anonymous'} posted successfully!` });
            
            // Clear inputs on success
            setName('');
            setMessage('');

        } catch (error) {
            console.error('Error posting drawing:', error);
            // Display the detailed error message from the try/catch logic
            setNotification({ 
                type: 'error', 
                message: error.message || 'Failed to post drawing. Please try again.' 
            });
        } finally {
            setIsPosting(false);
        }
    };
    // ---------------------------------------
    
    const handleCancel = () => {
        setName('');
        setMessage('');
        console.log('Post cancelled.');
        toggleDrawingBoard();
    };

    const toggleSizeSlider = () => {
        setShowSizeSlider(p => !p);
        setShowColorPalette(false); 
    };
    
    const toggleColorPalette = () => {
        setShowColorPalette(p => !p);
        setShowSizeSlider(false); 
    };


    return (
        <section 
            ref={containerRef}
            className=" w-full z-100000 max-w-sm md:max-w-md lg:min-w-1/6 rounded-xl absolute top-1/2 left-1/2 transform -translate-1/2 p-0 mx-auto bg-[#252525] border border-[#1B1B1B] shadow-2xl" 
        >
            {/* Notification Component must be here (or outside) */}
            <Notification notification={notification} onClose={() => setNotification(null)} />
            
            {/* Top Toolbar Container */}
            <div className="w-full bg-transparent rounded-t-xl px-4 flex justify-between mt-1 -mb-2 items-center text-white">
                
                {/* Left side: Color Selection */}
                <div className="flex h-auto gap-2 items-center relative">
                    
                    {/* 1. Primary Responsive Color Selector Button (Visible ONLY on screens smaller than SM: 640px) */}
                    <button 
                        onClick={toggleColorPalette}
                        // HIDDEN on screens SM (640px) and wider
                        className={`size-8 rounded-full border-2 transition-all duration-150 shadow-lg relative sm:hidden ${showColorPalette ? 'scale-110' : 'hover:scale-105'}`}
                        style={{ backgroundColor: color }}
                        aria-expanded={showColorPalette}
                        aria-label="Toggle Color Palette"
                    >
                        {/* Dropdown icon for small screens */}
                        <i className={`bx bx-chevron-down absolute bottom-0 right-0 text-white text-base bg-gray-800 rounded-full ${showColorPalette ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {/* 2. Color Dropdown/Palette (Visible when toggled) */}
                    {showColorPalette && (
                        <div 
                            className="absolute top-full left-0 z-20 mt-2 bg-[#252525] p-2 rounded-lg shadow-xl flex flex-wrap gap-2 w-48"
                            onMouseLeave={() => setShowColorPalette(false)}
                        >
                            {colorOptions.map((c) => (
                                <button 
                                    key={c}
                                    className={`size-8 rounded-full border-2 transition-all duration-150 
                                        ${color === c && mode === 'draw' ? 'border-pink-500 scale-110' : 'border-gray-600'}
                                    `}
                                    style={{ backgroundColor: c }}
                                    onClick={() => handleColorSelect(c)}
                                    aria-label={`Select color ${c}`}
                                />
                            ))}
                        </div>
                    )}
                    
                    {/* 3. Individual Color Dots (Visible on SM: 640px and larger screens) */}
                    {colorOptions.slice(0, 8).map((c, index) => (
                        <button 
                            key={c}
                            // FIXED: Shows on screens SM (640px) and wider
                            className={`hidden sm:inline-flex size-5 rounded-full border-2 transition-all duration-150 
                                ${color === c && mode === 'draw' 
                                    ? 'border-white scale-110 shadow-lg' 
                                    : 'border-transparent hover:scale-105' 
                                }
                                ${c === BACKGROUND_COLOR ? 'ring-1 ring-gray-400' : ''} 
                            `}
                            style={{ 
                                backgroundColor: c,
                                borderColor: (color === c && c === '#FFFFFF') ? '#000000' : undefined 
                            }}
                            onClick={() => handleColorSelect(c)}
                            aria-label={`Select color ${c}`}
                        />
                    ))}
                </div>

                {/* Right side: Tools */}
                <div className="flex h-auto gap-1.5 text-[20px] -mr-1 items-center text-center align-middle"> 
                    
                    <button onClick={handleUndo} disabled={historyIndex <= 0} className={historyIndex <= 0 ? 'text-gray-500' : 'hover:text-gray-300'}>
                        <i className='bx bx-undo align-middle'></i>
                    </button>
                    
                    <button onClick={handleRedo} disabled={historyIndex === history.length - 1} className={historyIndex === history.length - 1 ? 'text-gray-500' : 'hover:text-gray-300'}>
                        <i className='bx bx-redo align-middle'></i>
                    </button>
                    
                    <button 
                        onClick={clearCanvas} 
                        className="hover:text-red-400"
                    >
                        <i className='bx bx-trash align-middle'></i>
                    </button>
                    
                    <button 
                        onClick={() => setMode('erase')} 
                        className={`p-1 rounded ${mode === 'erase' ? 'text-white bg-black/50' : 'hover:text-gray-300'}`}
                    >
                        <i className='bx bx-eraser align-middle'></i>
                    </button>
                    
                    <button 
                        onClick={toggleSizeSlider}
                        className={`relative p-1 rounded ${showSizeSlider ? 'text-white bg-black/50' : 'hover:text-gray-300'}`}
                        aria-expanded={showSizeSlider}
                        aria-label="Toggle Cursor Size"
                    >
                        <i className='bx bx-circle align-middle'></i> 
                        
                        {/* Size Slider Dropdown */}
                        {showSizeSlider && (
                            <div 
                                className="absolute top-full right-0 z-20 mt-2 bg-[#252525] p-2 rounded-lg shadow-xl w-40 flex flex-col text-sm text-gray-200"
                                onMouseLeave={() => setShowSizeSlider(false)}
                            >
                                <input 
                                    type="range" min="1" max="50" value={size} 
                                    onChange={(e) => setSize(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-600 appearance-none rounded-full cursor-pointer range-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Canvas Area */}
            <div className="p-4 bg-transparent"> 
                <canvas
                    ref={canvasRef}
                    className="w-full h-auto mx-auto block rounded-md cursor-crosshair"
                    style={{
                        backgroundColor: BACKGROUND_COLOR, 
                        aspectRatio: `${CANVAS_ASPECT_RATIO}`,
                        touchAction: 'none' 
                    }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
            </div>

            {/* Input and Action Buttons Container */}
            <div className="flex flex-col gap-2 -mt-4 p-4 bg-transparent rounded-b-xl">
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-2 px-3 border-2 rounded border-[#333333] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1"
                />
                
                <input 
                    type="text"
                    placeholder="Type your message here..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full py-2 px-3 border-2 rounded border-[#333333] text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1"
                />

                <div className="flex justify-around gap-30 items-center mt-2 text-sm">
                    <button 
                        className='border border-[#333333] rounded-md px-4 w-auto h-8'
                        onClick={handleCancel}
                        disabled={isPosting} // Disable while posting
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handlePost}
                        disabled={isPosting} // Disable while posting
                        className=' bg-[#777777] text-[white] rounded-md px-4 w-auto h-8 flex items-center justify-center'
                    >
                        {isPosting ? (
                            // Show spinner while posting
                            <>
                                <i className='bx bx-loader-alt bx-spin mr-1'></i>
                                Submitting...
                            </>
                        ) : (
                            // Original Submit text
                            'Submit'
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}