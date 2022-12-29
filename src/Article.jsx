import { formatDate } from "./utils/formatDate.js";

export default function Article({ article }) {
  return (
    <div className="m-2 bg-gray-800 h-96 max-w-xs rounded-xl shadow hover:shadow-gray-200">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <h1 className="text-xl font-semibold p-2 h-2/5">{article.name}</h1>
        <div>
          <p className="m-2">
            {formatDate(article.datePublished)} - {article.provider && article.provider[0].name}
          </p>
          <img
            className="object-cover m-2 rounded-xl"
            src={`${article.image && article.image.thumbnail.contentUrl}&pid=Wdp&w=304&h=160&c=14&rs=2&qlt=90`}
            alt={article.name}
          />
        </div>
      </a>
    </div>
  );
}
