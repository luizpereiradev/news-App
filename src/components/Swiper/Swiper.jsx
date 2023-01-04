import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SwiperArticle from "./SwiperArticle";

export default ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      className="w-screen"
    >
      {data.pages[0].value.map(
        (article, index) =>
          article.image && (
            <SwiperSlide key={article.name + index}>
              <SwiperArticle article={article}/>
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};
