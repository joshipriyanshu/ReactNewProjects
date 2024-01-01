import React, { useState } from "react";
import "./App.css"



const App = () => {

  

  const [temp, setTemp] = useState(14)
  const [color, setColor] = useState("normal")

  let increase = () =>{
   const newTemp = temp+1

  

    if(newTemp >= 15){
      setColor("hot")
    }

      setTemp(newTemp)

      if(newTemp == 24){
        alert("temperature is max")
        setTemp(14)
       }
  }

  let decrease = () =>{

   const newTemp = temp-1

    if(newTemp <= 12){
      setColor("cold")
    }

      setTemp(newTemp)
}




  return (
    <div>
      <div className="container">

        <div className=" temp-ConatinerSpan">
        <span className = {`tempSpan ${color}`}  > {temp}&deg;C </span>
         </div>
        
        <div className="button">
        <button onClick={increase}> + </button>
         <button onClick={decrease}> - </button>
        </div>



      </div>



    </div>
  )
}

export default App