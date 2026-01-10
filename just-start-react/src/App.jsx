// import React, { useState } from 'react'

// const App = () => {

//   return (
//     <div>

//      <HeaderwithButton/>
//      <Footer fooeterData="thi is my footer"/>

//     </div>
//   )
// }

// const HeaderwithButton=()=>{
// const[title,setTitle]=useState("my name is anilk verma")

// function chnageTitle(){
//   setTitle("this is my chsnge title"+ Math.floor(Math.random()*10000));

// }

//   return<div>
//     <button onClick={chnageTitle}> for chnagetitle </button>
//     <Header title={title}/>

//   </div>
// }

// const Header = ({title})=>{
// return <div>
// {title }
// </div>

// }

// const  Footer = ({fooeterData}) => {
//   return <div>
// {fooeterData}
//   </div>
// }

// export default App

//
// import React from "react";

// const App = () => {
//   return (
//     <div>
//       <Card>
//       <Card>
//         <TextComponent/>
       
//       </Card>
//        <Card>
//         hi this warpawe2
//       </Card>
//       </Card>
//     </div>
//   );
// };

// const Card = ({ children }) => {
//   return (
//     <div style={{
//     border: "1px solid black",
//     padding: 10,
//     margin: 10
//   }}>
//     {children}
//   </div>
    
//   );
// };


// const TextComponent = () => {
//   return (
//     <div> hello a am wraper inside </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react'

const App = () => {
  const[todos, setTodos]= useState([])

  useEffect(() => {
    setInterval(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json()) // convert response to JSON
      .then((data) => {
        setTodos(data); // set state with data
      })
      .catch((error) => console.error("Error fetching data:", error));

      },10000)
  }, []);

  return (
    <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.body} />)}

    </div>
  )
}

const Todo=({title,body})=>{
  return(
    <div>
      <h1> title; {title}</h1>
      <p> description;{body}</p>
    </div>
  )

}

export default App