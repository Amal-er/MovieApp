import React from 'react'
import {AiFillGithub,AiFillYoutube,AiFillFacebook,AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='w-full  py-16'>

    <div className='w-full h-60  bg-gray-600/10 flex'>
         <div className='w-1/2 h-full flex flex-col  items-center justify-center text-center'>
            
           <h1 className='font-semibold'>flick fusion.com</h1>
          <div className=' py-7 flex gap-2'>
          <AiFillGithub size={25} />
          <AiFillYoutube size={25}/>
          <AiFillFacebook size={25}/>
          <AiFillTwitterCircle size={25}/>
          <AiFillInstagram size={25}/>

          </div>
          

         </div>

         {/*  */}
         <div className='w-1/2  flex flex-col justify-center items-center'>
            <div className='w-48 h-16  flex flex-col text-center'>
                <input className='w-full h-full' type="text" placeholder='email'/>
              <button className='w-full h-3/4 border-blue-100 bg-red-500'> subscribe

              </button>

                
            </div>

         </div>
          {/*  */}


    </div>





    </div>
  )
}

export default Footer