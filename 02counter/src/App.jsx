import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    if(counter<20){
    // setCounter(prevCounter => prevCounter + 1) 
    // setCounter(Counter => Counter + 1)
    // setCounter(counter => counter + 1) they'll increase the value by 3 on each click
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // this will increase the value only once 
    console.log("clicked", counter)
  }
  }
  const removeValue = () => {
    if(counter>0){
    setCounter(counter - 1)
    console.log("clicked", counter)
    }
  }

  return (
    <>
      <h1>Legion Codes</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {addValue}> Add Value </button>
      <br />
      <button onClick = {removeValue}> Remove Value </button>
    </>
  )
}

export default App
