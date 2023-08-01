import React, { useEffect, useState } from 'react'
import { fetchTodaytrendingmovie } from '../../services/Movieapi'
import { TodayTrendingMoviesResponse } from '../../model/Todaytrendingmovies.model'
import { Link } from 'react-router-dom'

const TodayTrendingmovie = () => {

    const [TodayTrendingMovie,setTodayTrendingMovie] =useState<TodayTrendingMoviesResponse[]>([])

useEffect(()=>{
  const getTodayTrendingMovie =async ()=>{

    const data = await fetchTodaytrendingmovie()
    setTodayTrendingMovie(data.results)
  }
 getTodayTrendingMovie()
},[])

const getImage = (poster_path:string)=>{
      return `https://image.tmdb.org/t/p/original/${poster_path}`


}

  return (
    <div className='w-full bg-[#0f0f0f]  '>
         <div className='w-full h-8  flex justify-start items-center p-6 text-lg font-bold gap-9'>
            <div>
         <h1>TRENDING  </h1> 
           
            </div>

         <div className=' '>
                <button></button>
                <button></button>
           </div>
         </div>


         {/* mapping */}
         
  <div className='w-full h-full py-4 flex gap-4 overflow-x-auto'>
       {
      TodayTrendingMovie?.map((item)=>(
        <div className='flex  text-center'>
        <Link to={`/details/${item.id}`} key={item.id}  className='flex-none w-64  h-96 bg-gray-400/20  rounded-2xl overflow-hidden '>
           
        <img src={getImage(item.poster_path)} alt="" className='h-[330px] w-full rounded-2xl'/>
           <h1>{item.original_title}</h1>
        </Link>
        </div>
      )


      ) }
</div>








    </div>
  )
}

export default TodayTrendingmovie