
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "../Loader/Loading";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const imageBaseURL = "https://image.tmdb.org/t/p/w500";

function Slider({data}) {
  console.log(data);
    const navigate = useNavigate()

  function formatDate(releaseDate) {
    if (!releaseDate) return "Unknown Date";
    const date = new Date(releaseDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" }).slice(0,3);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  if(!data) return <Loading/>

  return (
    <div >
    {data && <Carousel responsive={responsive}
        >
        {data && data?.results?.map((movie) => (
              <div
                key={movie.id}
                className="relative w-60 my-3 text-white rounded-t-xl shadow-md cursor-pointer"
                onClick={() => navigate(`/Details/${movie.id}`)}
              >
                <h1 className="absolute top-[22rem] z-10 left-0 border text-black font-bold bg-white p-1 rounded-full">
                  <h2
                    className={` border-4 rounded-full p-2 ${
                      movie?.vote_average < 7
                        ? "border-red-500"
                        : "border-green-500 "
                    }`}
                  >
                    {movie?.vote_average?.toFixed(1)}
                  </h2>
                </h1>
  
                {movie.poster_path && (
                  <img
                    src={`${imageBaseURL}${movie.poster_path}`}
                    className="object-fit rounded-t-xl hover:scale-110 duration-200 ease-in"
                    alt={`${movie.title || movie.name} Poster`}
                  />
                )}
  
                <div className="flex flex-col pl-2 pb-4">
                  <h1 className="text-xl font-semibold mt-16 mb-2">
                    {(movie?.title?.length > 18
                      ? `${movie?.title?.slice(0, 20)}...`
                      : movie?.title) ||
                      (movie?.name?.length > 18
                        ? `${movie?.name?.slice(0, 20)}...`
                        : movie?.name)}
                  </h1>
                  <span className="text-blue-300 mb-2">
                    {formatDate(movie?.release_date || movie?.first_air_date)}
                  </span>
                </div>
              </div>
            ))}
          </Carousel>}
    </div>
  );
}
Slider.propTypes = {
    data: PropTypes.object,
  };
  
export default Slider;
