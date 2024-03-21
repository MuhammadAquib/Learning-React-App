import React, { useEffect, useState } from 'react';

function Hooks2() {
    const[count, setCounter]= useState(0)
    const[data , setData]= useState(0)
    useEffect(()=>{
        console.log("coponent mountent")
    },[])
    useEffect(()=>{
        console.log("coponent mountent update")
    },[])

    function updateCount(){
        setCounter(count + 1)
    }
    function updateData(){
        setData(data +10)
    }
  return (
    <div>
       <>
       <h1>button clecked {count}times</h1>
       <h1>button clecked {data}times</h1>
        <button onClick={updateCount}>Clect</button>
        <button onClick={updateData}>Update Data</button>
       </>
      
    </div>
  );
}

export default Hooks2;
