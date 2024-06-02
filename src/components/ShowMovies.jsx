import Loading from "../Loader/Loading";
import { useGetMoviesQuery } from "../redux/api";
import Cards from "./Cards";


const ShowMovies = () => {
  const {data , isLoading} = useGetMoviesQuery("movie");
  console.log("data",data);
  
  return (
    <div className=" mt-48">
      {isLoading ? <Loading/> : <Cards data={data}/>}
    </div>
  );
};

export default ShowMovies;
