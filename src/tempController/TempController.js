import React, { useState } from 'react';
import './style.css'

function TempController() {
    const[temp,setTemp]=useState(0);
    const[color,setColor]=useState('cold')


    let increment=() => {
        setTemp(temp+1);
        if(temp>16){
            setColor('hot')
        }
    
    }

    let decrement=()=>{
        setTemp(temp-1);
        if(temp<16){
            setColor('cold')
        }

    }
  return (
    <div className={`tempContainer ${color}`}>
        <p>{temp}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default TempController