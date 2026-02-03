import { useState, useEffect } from "react";
import { fetchWithCache } from '../utils/apiCache';

const KanyeQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        // Cache quote for 1 hour since it doesn't change frequently
        const data = await fetchWithCache('https://api.kanye.rest/', {
          cacheDuration: 60 * 60 * 1000,
          deduplicate: true,
        });
        setQuote(data.quote);
        setError(null);
      } catch (error) {
        console.error("Error fetching quote:", error);
        if (retryCount < MAX_RETRIES) {
          // Retry with exponential backoff
          setTimeout(() => setRetryCount(prev => prev + 1), Math.pow(2, retryCount) * 1000);
          setError(null);
        } else {
          setError("Failed to load quote after retries");
          setQuote("Failed to load quote. Try refreshing the page.");
        }
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuote();
  }, [retryCount]);

  return (
    <div className="w-full h-full relative flex px-2 overflow-hidden">
      {loading ? (
        <div className="text-lg font-semibold">Loading Kanye quote...</div>
      ) : error ? (
        <div className="text-[12px] font-extralight italic text-red-400">
          <p>{error}</p>
        </div>
      ) : (
        <div className="text-[12px] font-extralight italic ">
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
};

export default KanyeQuote;
