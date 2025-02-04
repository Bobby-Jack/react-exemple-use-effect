import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chrono from './components/Chrono'
import Tracker from './components/Tracker'

function App() {
 
  //état surveillant l'ouverture du component chrono
  const [open, setOpen] = useState(false)

  


  return (
    <>

      <button onClick={()=>{setOpen(!open)}}>push </button>
      {
        open && <Chrono/>
      }

      <Tracker/>

    </>
  )
}

export default App
