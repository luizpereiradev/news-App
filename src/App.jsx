import { useQuery } from "react-query";
import { GET_TOP } from "./utils/api.js";
import { formatDate } from "./utils/formatDate.js";
import { readTime } from "./utils/readTime.js";

export default function App() {
  const { url } = GET_TOP();

  const {data, isLoading, isError} = useQuery("todos", () => fetch(url).then((res) => res.json()), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  return (
    <div className="flex flex-wrap w-full flex-row">
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}

      {data &&
        data.articles.map(
          (article) =>
            article.urlToImage && article.content && (
              <div
                className="m-2 bg-gray-800 h-96 max-w-xs rounded-xl "
                key={article.title}
              >
                <a href={article.url} target='_blank'>
                <h1 className=" text-lg font-semibold p-2 h-2/5">{article.title}</h1>
                </a>
                <div>
                <p className="m-2">{formatDate(article.publishedAt)} - {readTime(article.content)}</p>
                <img
                  className="object-cover m-2 rounded-xl h-40 w-[95%]"
                  src={article.urlToImage}
                />
                </div>
              </div>
            )
        )}

      {data && console.log(data)}
    </div>
  );
}
