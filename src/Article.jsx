import { formatDate } from "./utils/formatDate.js";

export default function FullArticle({ article }) {
  return (
  <div className="w-9/12 flex my-2 p-2 shadow justify-between border-b border-gray-200">
    <div>
      <p className="p-2">{formatDate(article.datePublished)} - {article.provider && article.provider[0].name}</p>
      <h1 className="text-xl font-semibold p-2 ">{article.name}</h1>
      <p className="p-2 w-11/12">{article.description}</p>
    </div>
    {article.image && <img className="rounded-xl hidden md:block" src={`${article.image.thumbnail.contentUrl}&pid=Wdp&w=200&h=160&c=14&rs=2&qlt=90`}/>}
  </div>
  );
}
