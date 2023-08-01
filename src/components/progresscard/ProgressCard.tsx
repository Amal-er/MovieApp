import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressCard{
    percentage: number
}


const ProgressCard : React.FC<ProgressCard> = ({percentage})=>{
let strokeColor ="#00ff00" 
     if (percentage < 50){
       strokeColor="#0ff0000"
     }else if (percentage<80){
        strokeColor="#fff00"
     }


}
  return (
    <CircularProgressbar value={percentage} text={`${Math.round(percentage)}%`}styles={{
         root:{},
         path:{
            stroke:strokeColor,
            strokeLinecap : "round"
            Transition: "str"



         }
        
        
        
    }}>





    </CircularProgressbar>
  )
  }

export default ProgressCard