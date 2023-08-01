import React, { useEffect, useState } from 'react'
import {BsBrowserSafari} from "react-icons/bs"
import {MdFavoriteBorder} from "react-icons/md"
import {SlCalender} from 'react-icons/sl'
import { fetchUser } from '../../services/Movieapi'
import { userresponse } from '../../model/User'


const Sidenavbar = () => {

  const [users,setUsers] = useState<userresponse[]>([])

useEffect(()=>{
     const getUserMovies =async ()=>{
     
         const data = await fetchUser()
         setUsers (data.users)

     }
     getUserMovies()

 },[])
  console.log("api",users);
  

  return (
    
        <div className=' text-gray-600   h-screen w-64    bg-[#0f0f0f] py-16 '>
             <div className='flex flex-col items-center justify-center text-center'>
                <h1 className='text-red-500 text-xl font-bold'>Flick <span className='text-white'>Fusion</span></h1>

             </div>
          <div className='flex justify-center py-4 items-center text-center'>
          




             <ul>
                <li className='hover:text-white flex justify-center items-center py-3 gap-4'> <BsBrowserSafari className="hover:bg-red-600 hover:rounded-full" size={25} /> <span>Browse</span></li>
                 <li className='hover:text-white flex justify-center items-center py-3 gap-4'>  <MdFavoriteBorder className="hover:bg-red-600 hover:rounded-full"/>   <span>  Watchlist </span></li>
               <li className='hover:text-white flex justify-center  items-center py-3 gap-4'> <SlCalender className="hover:bg-red-600 hover:rounded-full"/>   <span>  Coming soon</span></li>
             </ul>
          </div>

          <div className='flex  justify-center pt-7 '>
               <div className='flex '>
                 <h3 className='text-white'>following</h3>
               </div>
             
               <div className=' overflow-y-auto py-6 h-[300px]'>
                {
                     users?.map((item)=>(
                     <div key={item.firstName} className='flex justify-center items-center text-white'>
                     <img src={item.image} alt="" className='w-8 h-8 rounded' />
                      <p>{item.firstName}</p>
                      <p>{item.id}</p>
                     </div>



                     ))

                }
                   

               </div>
               
               

          </div>

        </div>


          





   
  )
}

export default Sidenavbar