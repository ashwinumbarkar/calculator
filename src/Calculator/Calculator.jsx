import React, { useState } from 'react'
import './Calculator.css'
export default function Calculator() {
    const [input,setInput]=useState("0");
    const[result,setResult]=useState(null)
    
    const handleClick=(btnvalue)=>{
       if(btnvalue==="C")
       {
        setInput("0")
        setResult(null)
       }
       else if(btnvalue==="=")
       {
        try{
        const input1=eval(input)
const finalres=input1 % 1===0 ?input1.toString() :input1.toFixed(3)
            setResult(finalres); 
            setInput(finalres); 
        }
        catch(e){
            console.log("Failed to calculate")
        }
       }
       else{
        if(input==="0"){
            setInput(btnvalue.toString())
        }
        else{
            setInput(prev => prev + btnvalue)
        }
       }
    }
  const = handlebackSpace=()=>{

   }
  return (
    <>
    <div className='calculator'>
      <div className='OutputScreen' data-testid="OutputScreen">{result !== null ? result : input || 0}</div>
      <div className='buttonContainer' data-testid="buttonContainer">{
        ["C",0,1,2,3,4,5,6,7,8,9,".","+","-","/","*","%","=",].map((button)=><>
        <button 
        key={button} 
        className={["+","-","/","*","%","="].includes(button)?"opeerationbtn Calbtn":"Calbtn"} 
        data-testid={`Calbtn${button}`}
        onClick={()=>{handleClick(button)}}
        value={input}
        >
            {button}
        </button>
        </>)
        
        }<button className="backBtn" style={{gridColumn:"span 2"}}>Backspace</button></div>
      
    </div>
    </>
  )
}
