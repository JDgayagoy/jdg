import { useState, useEffect } from "react";

const KanyeQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        setQuote(data.quote);
      } catch (error) {
        console.error("Error fetching quote:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuote();
  }, []);

    return (
    <div className="w-full h-full relative flex px-2 overflow-hidden">
      {loading ? (
        <div className="text-lg font-semibold">Loading Kanye quote...</div>
      ) : (
        <div className="text-[12px] font-extralight italic ">
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
};

export default KanyeQuote;