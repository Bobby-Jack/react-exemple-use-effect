import React, { useState, useEffect } from 'react'


export default function Chrono() {
    const [time, setTime] = useState(0)
    useEffect(() => {
      let i = setInterval(() => {//le code appeler dans un useEffect
        // est généralement lié à du code extern à react comme les call API ou les interval

        console.log("setup", time);
        
        setTime(t=>t+1)
      }, 1000);
      return ()=>{//le code de nétoyage est appelé pour
      // détruire les instances créer dans le useEffect.
      //Notez que le StrictMode de React impose un test des useEffect
      //et exécute une première fois le useffect
      // (en partant du principe que vous avez créer une fonction de netoyage)
      // avant de le rappeler un seconde fois
        clearInterval(i)
      }
      
    }, [])//les dépendances sont les valeurs qui rappelerons le useffect si ils sont modifiés
    

  return (
    <div>
        <h1>{time}</h1>
    </div>
  )
}
