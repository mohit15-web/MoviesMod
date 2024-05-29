import { FaMagnifyingGlass } from 'react-icons/fa6'
import DropdownList from './DropdownList'
import ShowMovies from './ShowMovies'
import { useState } from 'react'

function Search() {
    const [query, setQuery] = useState('')
  return (
    <div className='bg-black h-screen'>
        <div className='bg-[#26272B] flex w-[75%] m-auto py-8 px-10 justify-between items-center '>
            <img src="https://moviesmod.info/wp-content/uploads/2022/12/moviesmodnew-Custom.png" alt="" />
            <div className='flex justify-center items-center'>
                <input type="text" placeholder='What are your looking for?'
                className=' rounded-l-lg bg-black text-gray-400 px-3 py-2 w-96 border border-gray-500'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                />
                <button className='bg-[#3E3E46] text-white font-extrabold p-3 rounded-lg text-2xl -ml-2'><FaMagnifyingGlass/> </button>
            </div>
            <div>
                <button className='bg-red-600 font-semibold text-white px-5 rounded-lg py-2'>BollyWood</button>
                <button className='bg-green-600 mx-1 font-semibold text-white px-5 rounded-lg py-2'>AnimeFlix</button>
            </div>
        </div>
        <div className='bg-[#484849] flex w-[75%] m-auto rounded-b-xl'>
        <DropdownList/>
        </div>
        <ShowMovies query={query}/>
    </div>
  )
}

export default Search