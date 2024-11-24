import { useParams } from "react-router-dom";
import { useGetSearchQuery } from "../redux/api";
import Cards from "./Cards";
import Loading from "../Loader/Loading";

function SearchMovie() {
  const { name } = useParams();
  console.log(name);
  const { data, isLoading } = useGetSearchQuery(name);
  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-48">
          <h1 className="text-2xl px-44 font-bold text-white mb-4">
            Search results of &apos;{name}&apos;
          </h1>
          <Cards data={data} />
        </div>
      )}
    </>
  );
}

export default SearchMovie;
