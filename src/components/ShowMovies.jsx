// src/components/ShowMovies.js
import { useState, useEffect } from 'react';

const ShowMovies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      console.log("getData function called");
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
      const data = await res.json();
      console.log("response data", data);
      if (data.results) {
        setData(data.results);
      }
      setLoading(false);
    };

    getData();
  }, []);

  if (loading) {
    return <div className="text-center text-lg text-gray-700">Loading...</div>;
  }

  return (
    <div className="p-4">
      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{item.title}</h2>
              {item.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-auto mt-2 rounded"
                />
              )}
              <p className="mt-2">{item.overview}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-lg text-red-700 mt-10">No data found</div>
      )}
    </div>
  );
};

export default ShowMovies;
