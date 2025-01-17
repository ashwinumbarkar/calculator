import React, { useState } from 'react'
import './Calculator.css'
export default function Calculator() {
    const [input,setInput]=useState(0);
  return (
    <>
    <div className='calculator'>
      <div className='OutputScreen' data-testid="OutputScreen">{input}</div>
      <div>Numbers</div>
      <div>Operation</div>
    </div>
    </>
  )
}
