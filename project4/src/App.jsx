import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)


  // const Incremnet = () => {
  //   setCount(count + 1);
  // }
  // const Decrement = () => {
  //   setCount(count - 1);
  // }
  const increment = () => setCount(prev => prev + 1);
  
  const decrement = () => setCount(prev =>  prev - 1);
  
  // const Incremnet5 =()=>{
  
  // setCount(count+5);
  // console.log(count);

  // }
  const Incremnet5 = () => setCount(prev=> prev+5);

  return (
    <>

      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button>

<button onClick={Incremnet5}>5 Plus increment</button>

    </>
  )
}

export default App
