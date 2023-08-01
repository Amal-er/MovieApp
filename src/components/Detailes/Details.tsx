import React, { useEffect, useState } from 'react'
import {  fetchDetails } from '../../services/Movieapi'
import { fetchtvDetails } from '../../services/Movieapi'
import { useParams } from 'react-router-dom'

const Details = () => {
const {id} =useParams()
  const[details,setDetails] = useState()
   const [tvdetails,setTvdetails] = useState ()

 useEffect(()=>{
       const getDetailpage = async ()=>{

const data = await fetchDetails(id)
setDetails(data)

       }
getDetailpage()

 },[])

console.log(details,'yyyy');

// 
useEffect(()=>{
     const getTvdetails = async ()=>{
      const data = await fetchtvDetails(id)
      setTvdetails(data)
     }
  getTvdetails()
},[])
console.log(tvdetails,'omomom');





const getImage = (backdrop_path:string)=>{
  return `https://image.tmdb.org/t/p/original/${backdrop_path}`


}






  return (
    <div className='w-full h-full bg-green-600 '>

    <div className='w-full bg-gray-200'>
     {
      details && (
       <div >
         <h1>{details.title}</h1>
       
        <img className='' src={getImage(details.backdrop_path)} alt="" />
     
       </div>
      )
     }
    </div>
    
    
{/*  */}

<div className='w-full bg-red-600'>
     {
      tvdetails && (
       <div className='w-full h-full' >
         <h1 >{tvdetails.original_name}</h1>
       
        <img src={getImage(tvdetails.backdrop_path)} alt="" />
     
       </div>
      )
     }
    </div>




</div>


  
  )
}

export default Details