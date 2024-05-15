import React, { useEffect, useState } from 'react'



export default function Timer() {
  const [sec,setSec]=useState(59)

  

  useEffect(()=>{

    const interval=setInterval(()=>{
        if(sec>0){
            setSec(sec-1)
        }

        if(sec===0){
            setSec(59)
        }
    },1000)

    return ()=>clearInterval(interval)
   
  })
  return (
    <div className='timer'>
        {(sec<10)?`0${sec}`:sec}
    </div>
  )
}
