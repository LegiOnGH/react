// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let myObj = {
  //   name: "Legion",
  //   age: 21
  // }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind Test </h1>
      <div className="flex gap-4">
      <Card username = "Legion Codes" paratext = "Hey! This is Legion."/>
      <Card username = "Shizzu" paratext = "Hey! This is Shizzu."/>
      </div>
    </>
  )
}

export default App
