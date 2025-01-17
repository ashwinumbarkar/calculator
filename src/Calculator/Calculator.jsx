import React, { useState } from 'react'
import './Calculator.css'
export default function Calculator() {
    const [input,setInput]=useState("0");
    const[result,setResult]=useState(null)
    const [history,setHistory]=useState([])

    const handleClick=(btnvalue)=>{
       if(btnvalue==="C")
       {
        setInput("0")
        setResult(null)
        setHistory([]); 
       }
       else if(btnvalue==="=")
       {
        try{
        const input1=eval(input)
const finalres=input1 % 1===0 ?input1.toString() :input1.toFixed(3)
            setResult(finalres); 
            setInput(finalres); 
            setHistory(prev=>[...prev,{input,res:finalres}])
        }
        catch(e){
            console.log("Failed to calculate")
        }
       }
       else{
        if(result!==null){
            if (["+","-","*","/","%"].includes(btnvalue)) {
                setInput(result + btnvalue); 
              } else {
                setInput(btnvalue.toString()); 
              }
              setResult(null);
        }
        else{ if(input==="0"){
            setInput(btnvalue.toString())
        }
        else{
            setInput(prev => prev + btnvalue)
        }}
       
       }
    }

  const  handlebackSpace=()=>{
    setInput((prev) => {
        if (prev.length <= 1) {
          return "0"; 
        }
        return prev.slice(0, -1); 
      });
   }

  return (
    <div className='mainContainer'>
    <div className='calculator'>
      <div className='OutputScreen' data-testid="OutputScreen">{result !== null ? result : input || 0}</div>
      <div className='buttonContainer' data-testid="buttonContainer">{
        ["C",0,1,2,3,4,5,6,7,8,9,".","+","-","/","*","%","=",].map((button)=>
        <button 
        key={button} 
        className={["+","-","/","*","%","="].includes(button)?"opeerationbtn Calbtn":"Calbtn"} 
        data-testid={`Calbtn${button}`}
        onClick={()=>{handleClick(button)}}
        value={input}
        >
            {button}
        </button>
        )
        
        }<button className="backBtn" style={{gridColumn:"span 2"}} onClick={handlebackSpace}>Backspace</button></div>
      
    </div>
    <div className='HistoryTab' >
        <h3 data-testid='HistoryTab'>History</h3>
        <div className='historyCardContainer' style={{flex:1}}>  {history && history.length>0 ? history.map((h)=><div className='historycard'><p>{h.input}{"  "}={"  "}{h.res}</p></div>):<p style={{textAlign:'center',padding:"5px"}}>There's no history yet </p>  }</div>
        {history.length>0 && <span className='DeleteHistory' onClick={()=>{setHistory([])}}>Delete History</span>}
        {console.log(history)}
    </div>
    </div>
  )
}
