 import axios from "axios";


//  const api_key:"7e8010ff95244768e06a2360567edc36"



// carosel



export const fetchNowplayingmovie = async ()=>{
  const Api_key = "7e8010ff95244768e06a2360567edc36"
  try {
    const {data} = await axios.get(` https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_key}`)
    console.log(data,"fghjk");
    return data
 
 
    
  } catch (error) {
    // console.log(error);
    
  }

}










  //todaytrending

  export const fetchTodaytrendingmovie =async ()=>{
    const Api_key = "7e8010ff95244768e06a2360567edc36"

     try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${Api_key}`)

        // console.log(data.results);
        
        
        return(data)
     } catch (error) {
      //   console.log(error);
        
        
     }
  }




//popular movie

 export const fetchPopularmovie =async ()=>{
   const Api_key = "7e8010ff95244768e06a2360567edc36"

   try {
      const {data} =await axios.get (`https://api.themoviedb.org/3/tv/popular?api_key=${Api_key} `)

   return data

   } catch (error) {
      console.log(error);
      
      
   }



 }

//  user api




export const fetchUser = async ()=>{
  
  try {
    const {data} = await axios.get(`https://dummyjson.com/users `)
    console.log(data,"ffffffff");
    return data
 
 
    
  } catch (error) {
    // console.log(error);
    
  }

}

//Details trending movie

export const fetchDetails = async (id:number)=>{
  const Api_key = "7e8010ff95244768e06a2360567edc36"

  try {
    const {data} = await axios.get (`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}`) 
    
    console.log(data,"kkkkkkkkkkkk");
    return data


  } catch (error) {
    console.log(error);
    
  }




}



//poopular tv series

export const fetchtvDetails = async (id:number)=>{
  const Api_key = "7e8010ff95244768e06a2360567edc36"

  try {
    const {data} =await axios.get(`  https://api.themoviedb.org/3/tv/${id}?api_key=${Api_key}`)
    console.log(data,"kittiya");
    return data
    
  } catch (error) {
    console.log(error);
    
  }
}

//search movie

export const fetchsearch = async (query:string)=>{
  const Api_key = "7e8010ff95244768e06a2360567edc36"

try {
  const {data} = await axios.get (`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${Api_key}`)
  console.log(data.results,"you and i");
  return data.results
  
} catch (error) {
  console.log(error);
  
}
}