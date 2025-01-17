import React, { useState } from 'react'
import './Calculator.css'
export default function Calculator() {
    const [input,setInput]=useState(0);
  return (
    <>
    <div className='calculator'>
      <div className='OutputScreen' data-testid="OutputScreen">{input}</div>
      <div className='buttonContainer' data-testid="buttonContainer">{
        ["C",0,1,2,3,4,5,6,7,8,9,"+","-","/","*"].map((button)=>
        <button className='Calbtn' data-testid={`Calbtn${button}`}>
            {button}
        </button>)
        }</div>
      <div>Operation</div>
    </div>
    </>
  )
}
