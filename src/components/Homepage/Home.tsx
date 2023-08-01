import React, { useEffect, useState } from 'react'
import {MdNavigateBefore,MdNavigateNext} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import {BiMessageAltDetail,BiSolidBellRing} from 'react-icons/bi'
import  {BsFillPersonFill} from 'react-icons/bs'
import Caroasal from '../Carousl/Caroasal'
import TodayTrendingmovie from '../Todaytrending/TodayTrendingmovie'
import Popularmovie from '../popularmovie/Popularmovie'
import Footer from '../footer/Footer'
import { fetchsearch } from '../../services/Movieapi'
import { searchResponse } from '../../model/Search'











const Home = () => {
  const [query,setQuery] = useState ("")

  const [Search,setSearch] = useState <searchResponse[]>([])


 const handlechange = (event:any)=>{
  setQuery(event.target.value)
 }
 

useEffect(()=>{
     const getSearch = async ()=>{
        const data= await fetchsearch(query)
          setSearch(data)
     }
getSearch()
},[] ) 





console.log(Search,'hey');



  return (
    <div className='p-8 text-white w-65 h-full overflow-y-scroll  bg-[#0f0f0f]  '>
            {/* search nav */}
            <div className='py-6 flex justify-between'>
              <div className='flex gap-6 items-center'>
               <MdNavigateBefore  className='text-white'/> 
               <MdNavigateNext className='text-white'/>



               {/* inputbar */}

                 
               


               <div className='flex  bg-[#0f0f0f]  items-center p-3 h-9 gap-4  border border-white rounded-full relative'>
             
              
               <FiSearch size={25} className='text-gray-100' />
               <input className=' outline-none h-9 w-60  bg-transparent  '  type="text" placeholder='Searching everything ' onChange={handlechange}/>

               {
                Search?.map ((item)=>(
                  <div className='absolute top-full left-0 right-0 z-20  bg-slate-50'>
                    <h1 className='text-black'>{item.title}</h1>
                  </div>
              )) }
               </div>
              
               </div>
           
              

               {/* contactlogin */}
              <div className='flex py-6 gap-9'>
                
              <BiMessageAltDetail size={20}/>
              <BiSolidBellRing size={20}/>
               <BsFillPersonFill size={20}/>

              </div>

              
            

            </div>


           
              {/* banner */}
             <Caroasal />


             {/* today trending */}

             <TodayTrendingmovie />
             
            {/* popular movie */}

              <Popularmovie />

           {/*footer  */}
           <Footer />



    </div>


  )
}

export default Home