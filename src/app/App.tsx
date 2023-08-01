import React from 'react'
import "./App.scss"
import Sidenavbar from '../components/Sidenavbar/Sidenavbar'
import Home from '../components/Homepage/Home'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Details from '../components/Detailes/Details'





const App = () => {
  return (









    

    <div className=' bg-[#0f0f0f] '>
       <div className='flex h-screen w-full'>

            <Sidenavbar /> 
           <BrowserRouter>
           <Routes>
            <Route element={<Home/>}path='/'/>
            <Route  path='/details/:id' element={<Details/>}/>
           </Routes>
           </BrowserRouter>
         
        </div>

      
        
      

      </div>

  )
}

export default App