import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const submitHandler= (e)=>{
  e.preventDefault()
  console.log("form submitted ");
}

  return (
    <>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input type='text ' placeholder='Enter you text'/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
