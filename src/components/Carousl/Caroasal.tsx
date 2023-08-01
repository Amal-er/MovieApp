import React, { useEffect, useState } from 'react'
import { fetchNowplayingmovie } from '../../services/Movieapi';
import { Nowplayingmovieresponse} from '../../model/Nowplaying'
import Owlcarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";





const Caroasal = () => {

 const [nowplayingMovies,setNowplayingmovies] = useState<Nowplayingmovieresponse[]>([])

  //Owl Carousel Settings
  const options = {
       margin: 30,
       // responsiveClass: true,
       // nav: true,
       autoplay: true,
       autoplayTimeout: 5000,
       // smartSpeed: 1000,

       responsive: {
              0: {
                items: 1,
              },
            },
          };
console.log('ahscghj');
        

 useEffect (()=>{
       const nowPlaying =async ()=>{
              const data =await fetchNowplayingmovie();
              setNowplayingmovies(data.results)

       };nowPlaying();
 },[])


console.log(nowplayingMovies);
const getImageUrl = (backdrop_path: any) => {
       return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
     };



  return (
      
       <Owlcarousel className="owl-theme  w-full   " {...options}>
       {nowplayingMovies?.map((movie) => (
         <div className="" key={movie.id}>
           <div className="h-[500px] rounded-3xl  overflow-hidden relative ">
             <img
               src={getImageUrl(movie.backdrop_path)}
               alt=""
               className="h-full w-full bg-cover"
             />
             {/* overlay */}
             <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black to-black/20 text-white ">
               <div className="p-12 flex flex-col justify-between h-full">
                 <div className="text-sm font-medium flex flex-col py-6 gap-5">
                   <h1 className="text-2xl font-extrabold ">{movie.title}</h1>
                   <div className="flex gap-7">
                     <h1>{movie.vote_average}</h1>
                     <h1>{movie.original_language ? "english" : "malayalam"}</h1>
                   </div>
                 </div>
                 <div>
                   <button className="bg-red-600 text-lg font-semibold rounded-2xl  px-5 py-2 ">
                     Watch
                   </button>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ))}
     </Owlcarousel>

   );
 };









export default Caroasal;