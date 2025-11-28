export default function NewsCard({ article }) {
  if (!article) return null;
  const dateStr = article.publishedAt ? new Date(article.publishedAt).toLocaleString() : "";

  return (
    <article
      className="w-full md:w-[360px] bg-white rounded shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition transform hover:-translate-y-2"
      onClick={() => window.open(article.url, "_blank")}
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{article.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{article.description}</p>
        <div className="text-gray-400 text-xs mt-3">
          {article.source?.name} · {dateStr}
        </div>
      </div>
    </article>
  );
}
