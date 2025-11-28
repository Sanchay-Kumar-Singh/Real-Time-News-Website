const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/everything?q=";

/**
 * fetchNews - fetches articles for a query
 * returns an array of articles or [] on error
 */
export async function fetchNews(query) {
  try {
    const res = await fetch(`${BASE_URL}${encodeURIComponent(query)}&apiKey=${API_KEY}`);
    if (!res.ok) {
      console.error("news api error", res.status, await res.text());
      return [];
    }
    const data = await res.json();
    return data.articles || [];
  } catch (err) {
    console.error("fetch error", err);
    return [];
  }
}
