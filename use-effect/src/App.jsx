import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ num , setNum] = useState(10)

  function countChanging(){
    console.log(" count ki value change ho gayi...")
  }
   function numChanging(){
    console.log("num ke value change ho gayi ")
   }
useEffect(function (){
 
 countChanging()
},[count])
  return (
    <>
     <h1>count{count}</h1>
     <h1>num{num}</h1>
     
        <button onClick={() => setCount((count) => count + 1)}> button1 
        </button>
       
          <button onClick={() => setNum((num) => num + 10)}> button2 
        
        </button>
       
    </>
  )
}

export default App
