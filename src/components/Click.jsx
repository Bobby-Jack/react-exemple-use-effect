import React from 'react'
import { useEffect } from 'react'
import "./Click.css"
export default function Click() {
    useEffect(() => {
        // ce code js génère un élément visuel puis le détruit
        // pour évité la surproduction d'eventListener, on place ce code dans un
        // useEffect qui aura pour rôle de supprimer l'eventListener après démontage
        document.getElementById('clicker').addEventListener('click', ()=>{
        let text = document.createElement("span")
        text.classList.add('pop')
        text.innerText = "bru"
        document.getElementById('clicker').appendChild(text)
        let t = setTimeout(() => {
            text.remove()
        }, 1000);
      })
    
      return () => {
        removeEventListener("click",document.getElementById('clicker') )
      }
    }, [])
    
  return (
    <div id='clicker' className='clicker'>Click</div>
  )
}
