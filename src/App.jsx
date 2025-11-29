// import { useEffect, useState } from "react";
// import Navbar from "./components/Navbar";
// import NewsList from "./components/NewsList";
// import Agencies from "./components/Agencies";
// import Contact from "./components/Contact";
// import { fetchNews } from "./api/newsApi";

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function loadNews(query = "India") {
//     setLoading(true);
//     const result = await fetchNews(query);
//     setArticles(result);
//     setLoading(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   useEffect(() => {
//     loadNews("India");
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Navbar onSearch={loadNews} />
//       <main className="max-w-6xl mx-auto px-4 md:px-0 mt-28 pb-10">
//         {/* {loading ? (
//           <div className="text-center py-10">Loading ...</div>
//         ) : (
//           <NewsList articles={articles} />
//         )} */}
//         {articles.length > 0 ? <NewsList articles={articles} /> : <div  className="text-center py-10">Loading...</div>}
//         <Agencies />
//         <Contact />
//       </main>

//       <footer className="bg-black text-white text-center py-6 mt-8">
//         <p>Created By <strong>Sanchay Kumar Singh</strong> © 2025 — All Rights Reserved</p>
//       </footer>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import Agencies from "./components/Agencies";
import Contact from "./components/Contact";
import { fetchNews } from "./api/newsApi";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadNews(query = "India") {
    try {
      setLoading(true);
      const result = await fetchNews(query);
      setArticles(result);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  useEffect(() => {
    loadNews("India");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar onSearch={loadNews} />

      <main className="max-w-6xl mx-auto px-4 md:px-0 mt-28 pb-10">

        {loading ? (
          <div className="text-center py-10 text-lg font-semibold">
            Loading...
          </div>
        ) : (
          <NewsList articles={articles} />
        )}

        <Agencies />
        <Contact />
      </main>

      <footer className="bg-black text-white text-center py-6 mt-8">
        <p>
          Created By <strong>Sanchay Kumar Singh</strong> © 2025 — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
