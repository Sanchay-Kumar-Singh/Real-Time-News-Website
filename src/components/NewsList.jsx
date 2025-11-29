import NewsCard from "./NewsCard";

export default function NewsList({ articles }) {
  if (articles.length < 0) {
    return <div className="py-10 text-center text-gray-600">No articles found.</div>;
  }

  return (
    <div className="flex flex-wrap justify-between gap-6">
      {articles.map((a, i) => a.urlToImage && <NewsCard key={i} article={a} />)}
    </div>
  );
}
