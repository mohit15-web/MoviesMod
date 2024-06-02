/* eslint-disable react/no-unescaped-entities */
import { useGetPopularQuery, useGetTrendingQuery, useGetUpcomingQuery } from "../redux/api";
import Slider from "./Slider";

function Home() {
  const { data: trending } = useGetTrendingQuery("top_rated");
  const {data: popular} = useGetPopularQuery("popular")
  const{data:upcoming} = useGetUpcomingQuery("upcoming")

  return (
    <div className=" mt-48 px-52">
         <div>
        <h1 className="text-4xl font-bold text-white mb-4"> Trending</h1>
        <Slider data={upcoming} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 "> What's Popular</h1>
        <Slider data={popular} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 "> Top Rated</h1>
        <Slider data={trending} />
      </div>
    </div>
  );
}

export default Home;
