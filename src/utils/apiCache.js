/**
 * Simple request deduplication and caching system
 * Prevents duplicate API calls and caches responses
 */

const cache = new Map();
const pendingRequests = new Map();

export const fetchWithCache = async (url, options = {}) => {
  const cacheKey = `${url}:${JSON.stringify(options)}`;
  const { cacheDuration = 5 * 60 * 1000, deduplicate = true } = options;

  // Return cached response if available and not expired
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    if (Date.now() - timestamp < cacheDuration) {
      console.log('[v0] Cache hit for:', url);
      return data;
    }
    cache.delete(cacheKey);
  }

  // Return pending request if already in flight (request deduplication)
  if (deduplicate && pendingRequests.has(cacheKey)) {
    console.log('[v0] Request deduplication hit for:', url);
    return pendingRequests.get(cacheKey);
  }

  // Create new request promise
  const requestPromise = fetch(url, options)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => {
      cache.set(cacheKey, { data, timestamp: Date.now() });
      pendingRequests.delete(cacheKey);
      return data;
    })
    .catch(error => {
      pendingRequests.delete(cacheKey);
      throw error;
    });

  if (deduplicate) {
    pendingRequests.set(cacheKey, requestPromise);
  }

  return requestPromise;
};

export const clearCache = (url = null) => {
  if (url) {
    const keys = Array.from(cache.keys()).filter(key => key.startsWith(url));
    keys.forEach(key => cache.delete(key));
  } else {
    cache.clear();
  }
};
