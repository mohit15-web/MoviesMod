import { FaMagnifyingGlass } from "react-icons/fa6";
import DropdownList from "./DropdownList";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-black fixed top-0 w-[75%] left-52 z-20">
      <div className=" bg-[#26272B] flex  py-8 px-10 justify-between items-center ">
        <Link to={"/"}>
        <img
          src="https://moviesmod.info/wp-content/uploads/2022/12/moviesmodnew-Custom.png"
          alt=""
        />
        </Link>
        <div>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="What are your looking for?"
            className=" rounded-l-lg focus:outline-none bg-black text-gray-400 px-3 py-2 w-96 border border-gray-500"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button className="bg-[#3E3E46] text-white font-extrabold p-3 rounded-lg text-2xl -ml-2">
            <FaMagnifyingGlass />{" "}
          </button>
        </div>
        <div>
          <Link
            to="/movies"
            className="bg-red-600 font-semibold text-white px-5 rounded-lg py-2"
          >
            Movies
          </Link>
          <Link
            to="/tv"
            className="bg-green-600 mx-1 font-semibold text-white px-5 rounded-lg py-2"
          >
            Tv Shows
          </Link>
        </div>
      </div>
      <div className="bg-[#484849] flex rounded-b-xl">
        <DropdownList />
      </div>
    </div>
  );
}

export default Search;
