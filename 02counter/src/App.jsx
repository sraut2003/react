import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter=15

  const addValue=() =>{
    console.log("clicked",counter);
    counter+=1
  }

  const deleteValue=() =>{
    console.log("clicked",counter);
    counter-=1
  }

  return (
    <>
     <div className="box">
      <h2>Counter value: {counter}</h2>

      <button className="add" onClick={addValue}>Add value</button>
      <br />
      <button onClick={deleteValue}>Remove value</button>
      </div>
    </>
  )
}

export default App
