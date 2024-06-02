import { useEffect } from "react";
import Loading from "../Loader/Loading";
import { useGetMoviesQuery } from "../redux/api";
import Cards from "./Cards";


const ShowMovies = () => {
  const {data , isLoading} = useGetMoviesQuery("movie");
  console.log("data",data);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [data]);
  
  return (
    <>
    <div className=" mt-48">
        <h1 className="text-4xl px-44 font-bold text-white mb-4">Explore Movies</h1>
      {isLoading ? <Loading/> : <Cards data={data}/>}
    </div>
    </>
  );
};

export default ShowMovies;
