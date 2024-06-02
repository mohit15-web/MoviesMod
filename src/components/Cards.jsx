import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const imageBaseURL = "https://image.tmdb.org/t/p/w500";

function formatDate(releaseDate) {
  if (!releaseDate) return "Unknown Date";
  const date = new Date(releaseDate);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" }).slice(0,3);
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function Cards({ data }) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="px-32 bg-black my-48">
      {data?.results?.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 my-6">
          {data?.results?.map((movie) => (
            <div
              key={movie.id}
              className="relative w-64 mx-3 my-3 text-white rounded-t-xl shadow-md"
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

              {movie?.poster_path && (
                <img
                  src={`${imageBaseURL}${movie?.poster_path}`}
                  className="object-fit rounded-t-xl hover:scale-110 duration-200 ease-in"
                  alt={`${movie?.title || movie?.name} Poster`}
                />
              )}

              <div className="flex flex-col pl-2 pb-4">
                <h1 className="text-xl font-semibold mt-10 mb-2">
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
        </div>
      ) : (
        <div className="text-center text-lg text-red-700 mt-10">
          No data found
        </div>
      )}
    </div>
  );
}

Cards.propTypes = {
  data: PropTypes.object,
};

export default Cards;
