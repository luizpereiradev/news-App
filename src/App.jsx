import { useEffect, Fragment, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { GET_TOP } from "./utils/api.js";
import { useInView } from "react-intersection-observer";
import Article from "./Article";
import Swiper from "./components/Swiper/Swiper";

export default function App() {
  const [searchKey, setSearchKey] = useState("articles");
  const [searchInput, setSearchInput] = useState("");

  // const { ref, inView } = useInView()
  // useEffect(() => {
  //   if (inView) {
  //     fetchNextPage()
  //   }
  // }, [inView])

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [searchKey],
      async ({ pageParam = 1 }) => {
        const params = GET_TOP(pageParam, searchKey);
        const data = await fetch(params.url, params.options);
        return data.json();
      },
      {
        getNextPageParam: (_, pages) => {
          return pages.length + 1;
        },
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
      }
    );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKey(searchInput);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      {data && <Swiper data={data} />}
      {data &&
        data.pages.map((page, index) => (
          <Fragment key={page + index / Math.random()}>
            {page.value.map((article) => (
              <Article key={article.name} article={article} />
            ))}
          </Fragment>
        ))}
    </div>
  );
}
