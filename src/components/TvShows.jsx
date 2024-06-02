import Loading from '../Loader/Loading';
import { useGetTvshowsQuery } from '../redux/api';
import Cards from './Cards';

function TvShows() {
 const {data , isLoading} = useGetTvshowsQuery('tv')
 console.log("tv" , data);
  return (
    <div>
      {isLoading ? <Loading/> : <Cards data={data}/>}

    </div>
  )
}

export default TvShows