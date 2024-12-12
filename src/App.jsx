import { useState } from 'react'
import './App.css'

function App() {

  let [counter, SetCounter]= useState(0)

  // let counter = 17;
  const add = () => {
    // counter = counter + 1;
    console.log("value added to",counter);
    SetCounter(counter + 1)
  }
  const remove = () => {
    // counter = counter + 1;
    // console.log("value added to",counter);
    SetCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Number Counter</h1>
      <h2>Counter Value : {counter}</h2>
      
      <button onClick={remove}>-</button>
      <button onClick={add}>+</button>
      <p>Click - to remove 1 & Click + to add 1 </p>
      {/* <br /> */}
    </>
  )
}

export default App
