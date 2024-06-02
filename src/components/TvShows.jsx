import { useEffect } from 'react';
import Loading from '../Loader/Loading';
import { useGetTvshowsQuery } from '../redux/api';
import Cards from './Cards';

function TvShows() {
 const {data , isLoading} = useGetTvshowsQuery('tv')
 console.log("tv" , data);
 useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [data]);
  return (
    <div className='mt-48'>
        <h1 className="text-4xl px-44 font-bold text-white mb-4">Explore Movies</h1>
      {isLoading ? <Loading/> : <Cards data={data}/>}

    </div>
  )
}

export default TvShows