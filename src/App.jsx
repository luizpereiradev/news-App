import { useEffect } from "react";
import useFetch from "./hooks/useFetch"
import { GET_TOP } from "./api.js"

export default function App() {
  const { data, loading, error, request } = useFetch();
  const { url } = GET_TOP();

  useEffect(() => {
    request(url);
  }, [request]);


  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && data.articles.map((article) => (
        <div key={article.title}>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt="" srcset="" />
        </div>
      ))}


      {data && console.log(data.articles)}
    </div>
  )
}
