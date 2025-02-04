import React, { useState, useEffect } from 'react'


export default function Chrono() {
    const [time, setTime] = useState(0)
    useEffect(() => {
      let i = setInterval(() => {
        console.log("setup", time);
        
        setTime(t=>t+1)
      }, 1000);
      return ()=>{
        clearInterval(i)
      }
      
    }, [])
    

  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}
