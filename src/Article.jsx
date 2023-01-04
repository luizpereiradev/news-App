import { formatDate } from "./utils/formatDate.js";

export default function FullArticle({ article }) {
  return (
  <a href={article.url} target='_blank' className="w-9/12">
    <div className="w-full flex my-2 p-2 shadow justify-between border-b border-gray-200 group cursor-pointer">
      <div>
        <p className="p-2">{formatDate(article.datePublished)} - {article.provider && article.provider[0].name}</p>
        <h1 className="text-xl font-semibold p-2 group-hover:underline">{article.name}</h1>
        <p className="p-2 w-11/12">{article.description}</p>
      </div>
      {article.image && <img className="rounded-xl hidden md:block" src={`${article.image.thumbnail.contentUrl}&pid=Wdp&w=200&h=160&c=14&rs=2&qlt=90`}/>}
    </div>
  </a>
  );
}
