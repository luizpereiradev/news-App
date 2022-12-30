function SwiperArticle({article}) {
  return (
    <div className=" h-[500px] w-screen relative flex justify-end flex-col">
      <img
        src={`${
          article.image && article.image.thumbnail.contentUrl
        }&pid=Wdp&w=800&h=500&c=14&rs=2&qlt=90`}
        className="absolute w-screen h-full -z-50"
      />
      <div className="w-9/12 mx-auto ">
        <div className="left-0 blur-sm absolute w-screen h-full bg-slate-500 -z-10 opacity-25"></div>
        <h1 className="text-white font-semibold text-3xl p-4">
          {article.name}
        </h1>
        <p className="text-white font-semibold p-4 transition-all duration-1000">
          {article.description}
        </p>
      </div>
    </div>
  );
}

export default SwiperArticle;
