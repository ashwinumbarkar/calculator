import React, { useState } from 'react'
import './Calculator.css'
export default function Calculator() {
    const [input,setInput]=useState("0");
    const[result,setResult]=useState(null)
    const handleClick=(btnvalue)=>{
        if(btnvalue!=="=")
        setInput((prev)=>prev+btnvalue)
    }
   
  return (
    <>
    <div className='calculator'>
      <div className='OutputScreen' data-testid="OutputScreen">  {result !== null ? result : input || 0}</div>
      <div className='buttonContainer' data-testid="buttonContainer">{
        ["C",0,1,2,3,4,5,6,7,8,9,"+","-","/","*","="].map((button)=>
        <button 
        key={button} 
        className={["+","-","/","*","="].includes(button)?"opeerationbtn Calbtn":"Calbtn"} 
        data-testid={`Calbtn${button}`}
        onClick={()=>{handleClick(button)}}
        value={input}
        >
            {button}
        </button>)
        }</div>
      
    </div>
    </>
  )
}
