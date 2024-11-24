/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useGetPopularQuery, useGetTrendingQuery, useGetUpcomingQuery } from "../redux/api";
import Slider from "./Slider";
import Loading from "../Loader/Loading";

function Home() {
  const { data: trending } = useGetTrendingQuery("top_rated");
  const {data: popular} = useGetPopularQuery("popular")
  const{data:upcoming} = useGetUpcomingQuery("upcoming")
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [trending, popular, upcoming]);

  return (
   <>
   {trending ? ( <div className=" mt-48 px-56">
         <div>
        <h1 className="text-4xl font-bold text-white mb-4">  Trending</h1>
        <Slider data={upcoming} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 ">What's Popular</h1>
        <Slider data={popular} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 ">Top Rated</h1>
        <Slider data={trending} />
      </div>
    </div>) : <Loading/>}
   </>
  );
}

export default Home;
