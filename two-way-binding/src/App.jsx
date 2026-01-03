import { useState } from 'react'

import './App.css'

function App() {

  const[title,setTitle]=useState('')
const submitHandler= (e)=>{
  e.preventDefault()
  console.log('form submitted ',title);
  setTitle('')
}

  return (
    <>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input 
        type='text '
         placeholder='Enter you text'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
