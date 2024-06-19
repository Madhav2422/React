import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setcounter]  =  useState(15)

  // let counter=15

  const addValue=() =>{
    console.log("Value added",counter);
     counter=counter+1;
    setcounter(counter);
  }


  const removedValue=() =>{
    console.log("Value removed");
    counter=counter-1;
    setcounter(counter);
  }

  
  

  return (
   <>
        <h2>React </h2>
        <h2>Counter value : {counter}</h2>

        <button onClick={addValue}>Add value{counter}</button><br/><br/>
        <button onClick={removedValue}>Remove value{counter}</button>
        <p>Madhav{counter}</p>

   </>
  )
}

export default App
