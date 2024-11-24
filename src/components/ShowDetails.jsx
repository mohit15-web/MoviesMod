import { useParams } from "react-router-dom";
import {
  useGetCastQuery,
  useGetDetailsQuery,
  useGetRecommendationsQuery,
  useGetSimilarQuery,
  useGetVideosQuery,
} from "../redux/api";
import Loading from "../Loader/Loading";
import Slider from "./Slider";
import { useEffect } from "react";

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

function ShowDetails() {
 
  const { id } = useParams();
  console.log(id);
  const { data } = useGetDetailsQuery(id);
  console.log(data);

  const { data: similar } = useGetSimilarQuery(id);
  const { data: recommendation } = useGetRecommendationsQuery(id);
  const { data: videos } = useGetVideosQuery(id);
  const { data: cast } = useGetCastQuery(id);
  console.log("videos", videos);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [data, similar, recommendation, videos, cast]);

  function formatDate(releaseDate) {
    if (!releaseDate) return "Unknown Date";
    const date = new Date(releaseDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  function convert(time) {
    let hour = Math.floor(time / 60);
    return hour + "h " + (time % 60) + "m";
  }
  return (
    <div className="mt-52 px-52">
      {data?.length == 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="flex gap-10">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt={data?.title}
              className=" w-[400px] h-[500px] rounded-2xl"
              loading="lazy"
            />
            <div className="text-white">
              <h2 className="text-3xl font-bold tracking-wider">
                {data?.title}
              </h2>
              <h2 className="text-lg font-semibold text-gray-500">
                {data?.tagline}
              </h2>
              <div className="flex gap-4 my-3">
                {data?.genres?.map((genre) => (
                  <h1
                    className="text-sm bg-pink-700 px-2  py-1 rounded-xl"
                    key={genre?.id}
                  >
                    {genre?.name}
                  </h1>
                ))}
              </div>
              <h1 className="border w-14 text-black font-bold bg-white p-1 rounded-full">
                <h2
                  className={` border-4 rounded-full p-2 ${
                    data?.vote_average <= 7
                      ? "border-red-500"
                      : "border-green-500 "
                  }`}
                >
                  {data?.vote_average.toFixed(1)}
                </h2>
              </h1>
              <h1 className="text-2xl my-2 font-bold tracking-wider">
                {" "}
                OverView
              </h1>
              <p className="font-semibold tracking-wider">{data?.overview}</p>
              <div className="mt-5 text-gray-500 text-lg flex gap-3">
                <h1>
                  <span className="font-bold text-white">Status : </span>
                  {data?.status}{" "}
                </h1>
                <h1>
                  <span className="font-bold text-white mr-2">
                    Release Date :
                  </span>
                  {formatDate(data?.release_date)}{" "}
                </h1>
                <h1>
                  <span className="font-bold text-white mr-2">Runtime :</span>
                  {convert(data?.runtime)}
                </h1>
              </div>
              {/* <h1>Director :{data?.}</h1> */}
            </div>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-3xl font-bold text-white mb-4 mt-20">Top Cast</h1>
        <div className="flex flex-wrap gap-10">
          {cast &&
            cast?.cast?.slice(0, 6).map((cast) => (
              <div key={cast?.id}>
                <img
                  src={`${imageBaseURL}${cast?.profile_path}`}
                  className="w-36 h-36 object-cover rounded-full"
                  alt="cast"
                  loading="lazy"
                />
                <h1 className=" text-white mt-2 text-center">{cast?.name}</h1>
              </div>
            ))}
        </div>
        {/* <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Official Videos
          </h1>
          <Slider data={videos} />
        </div> */}
      </div>
      <div>
        {similar && (
          <>
        <h1 className="text-3xl font-bold text-white mb-4 mt-20">Similar Movies</h1>
        <Slider data={similar} />
          </>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white mb-4 mt-20">Recommendations</h1>
        <Slider data={recommendation} />
      </div>
    </div>
  );
}

export default ShowDetails;
