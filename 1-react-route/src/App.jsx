// // import './App.css'
// // import Dashboard from './components/Dashboard'
// // import Landing from './components/Landing'
// // import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// // function App() {


// //   return (
// //     <>
 
// //     <BrowserRouter>
// //       <Appbar/>
// //       <Routes>
// //         <Route path="/" element={<Landing />} />
// //         <Route path="/dashboard" element={<Dashboard />} />
// //       </Routes>
// //     </BrowserRouter>
// //     </>
// //   );
// // }
// // function Appbar(){
// // const navigate = useNavigate();

// //   return(
    
    
// //     <div>
// //       <button onClick={()=>{
// //         navigate("/");
// //         }}>Landind page</button>
// //       <button onClick ={()=>{
// //         navigate("/dashboard");
// //         }}>dashboard</button>
// //     </div>
    
// //   )
// // }
// // export default App;

// import { Suspense,lazy } from "react";

// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// const Dashboard=lazy(()=>import('./components/Dashboard'))
// const Landing=lazy(()=>import('./components/Landing'))

// function App() {


//   return (
//     <>
 
//     <BrowserRouter>
//       <Appbar/>
//       <Routes>
//         <Route path="/" element={ <Suspense fallback={"loding"}> <Landing /> </Suspense>} />
//         <Route path="/dashboard" element={ <Suspense fallback={"loding"}><Dashboard /></Suspense>} />
//       </Routes>
//     </BrowserRouter>
//     </>
//   );
// }
// function Appbar(){
// const navigate = useNavigate();

//   return(
    
    
//     <div>
//       <button onClick={()=>{
//         navigate("/");
//         }}>Landind page</button>
//       <button onClick ={()=>{
//         navigate("/dashboard");
//         }}>dashboard</button>
//     </div>
    
//   )
// }
// export default App;


import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count  setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ setCount}) {
  return <div>
    <CountRenderer  />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count=useContext(CountContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App