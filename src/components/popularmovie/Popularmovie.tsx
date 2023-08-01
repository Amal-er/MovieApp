import React, { useEffect, useState } from 'react'
import { fetchPopularmovie } from '../../services/Movieapi'
import { popularmovieresponse } from '../../model/popularmovie.response'
import { Link } from 'react-router-dom'

const Popularmovie = () => {

    const [Popularmovie,setPopularmovie] =useState<popularmovieresponse[]>([])

 useEffect(()=>{
     const getPopularmovie =async ()=>{
     
         const data = await fetchPopularmovie()
         setPopularmovie (data.results)

     }
   getPopularmovie()

 },[])


 const getImage = (poster_path:string)=>{
    return `https://image.tmdb.org/t/p/original/${poster_path}`


}





  return (
    <div className='w-full  bg-[#0f0f0f]  '>
        <div className='w-full flex justify-start items-center p-8 text-lg font-bold '>
            <div>    
            <h1>POPULAR MOVIE</h1>
            </div>

            <div className=''>
                 <button></button>

            </div>



        </div>


      {/* mapping */}

       <div className='w-full h-full  flex gap-4 overflow-x-auto '>
        {
            Popularmovie?.map((item)=>(
            <div className='flex text-center'>
          <Link to={`/details/${item.id}`} key={item.id} className='flex-none w-64 h-96 bg-gray-400/20 rounded-2xl overflow-hidden'>
 <img src={getImage(item.poster_path)} alt=""className='w-full h-[330px] rounded-xl' />
    <h1>{item?.original_name}</h1>
          </Link>
          </div>
            ))
        }
        
     </div>




    </div>
  )
}

export default Popularmovie