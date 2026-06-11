"use client"
import { useState, useEffect } from "react";



export default function Home() {
  const [text, setText] = useState("")
   useEffect(() => {
    
    const message = "Hii!, I'm Javier Arias, \n welecome to my portfolio!"
  
    let index = 0
    setText("")
    const interval = setInterval(() => {

      if(index < message.length-1){
      
        setText(prev => prev + message[index])
        index++
        
      }
      
      
      else{
        clearInterval(interval)
      }

    },80)
    return() => clearInterval(interval)
        }, [])



  return (

      <main className="flex-1 flex items-center justify-center" >
        <div className="whitespace-pre-line text-center text-6xl -mt-80">
        {text}
        </div>
     
      </main>

  );
}
