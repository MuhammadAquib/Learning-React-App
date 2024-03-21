import React, { useState,useEffect } from 'react';

function Hooks() {
    const [count , setCount]= useState(0)
    const [data , setData]= useState(10)
 useEffect(()=>{
    
    console.log("called by count")
 },[])
 useEffect(()=>{
//   decrement()
  console.log("called by data")
 },[])
 function increment(){
     setCount(count+1)
    }
  function decrement(){
    setData(data+10)
  }
   
   

  return (
    <div>
      <h1 style={{textAlign:"center",marginTop:30}} >learning Hooks</h1>
    

        <h1 style={{textAlign:"center",marginTop:30}}  >{count}</h1>
        <h1 style={{textAlign:"center",marginTop:30}}  >{data}</h1>
        <button onClick={increment} style={{marginLeft:620,marginTop:30}} >Increment</button>
        <button onClick={decrement} style={{marginLeft:20,marginTop:30}} >update</button>
    </div>
  );
}
export default Hooks;
