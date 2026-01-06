//useEffect hook,useMemo and useCallback learinig



// import { useEffect, useState } from "react";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(data => {
//         setPosts(data);
//       });
//   }, []);

//   return (
//     <div>
//       {posts.map(post => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";

// function App() {
//   const [myId, setMyId] = useState(1);

//   return (
//     <div>
//       <button onClick={() => setMyId(1)}>1</button>
//       <button onClick={() => setMyId(2)}>2</button>
//       <button onClick={() => setMyId(3)}>3</button>
//       <button onClick={() => setMyId(4)}>4</button>
//       <button onClick={() => setMyId(5)}>5</button>

//       <Todo myId={myId} />
//     </div>
//   );
// }

// function Todo({ myId }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?id=" + myId)
//       .then(res => res.json())
//       .then(json => {
//         setTodo(json[0]);
//       });
//   }, [myId]);

//   return (
//     <div>
//       <h1>
//         ID: {myId} — {todo.title}
//       </h1>
//       <h4>{todo.body}</h4>
//     </div>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   const postsPerPage = 10;

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(data => setPosts(data));
//   }, []);

//   const lastPostIndex = page * postsPerPage;
//   const firstPostIndex = lastPostIndex - postsPerPage;
//   const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

//   return (
//     <div>
//       <h2>Page: {page}</h2>

//       {currentPosts.map(post => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//           <hr />
//         </div>
//       ))}

//       <button onClick={() => setPage(page - 1)} disabled={page === 1}>
//         Prev
//       </button>

//       <button onClick={() => setPage(page + 1)} disabled={page === 10}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default App;




// useMemo hook


// import { useState, useMemo } from "react";

// function App() {
//   const [num, setNum] = useState(0);
//   const [count, setCount] = useState(0);

//   // useMemo
//   const square = useMemo(() => {
//     console.log("Calculating square...");
//     return num * num;
//   }, [num]);

//   return (
//     <div>
//       <input
//         type="number"
//         onChange={(e) => setNum(Number(e.target.value))}
//         placeholder="Enter number"
//       />

//       <p>Square: {square}</p>

//       <button onClick={() => setCount(count + 1)}>
//         Counter: {count}
//       </button>
//     </div>
//   );
// }

// export default App;



// import { memo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   function onClick() {
//     console.log("child clicked")
//   }

//   return <div>
//     <Child onClick={onClick} />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const Child = memo(({onClick}) => {
//   console.log("child render")

//   return <div>
//     <button onClick={onClick}>Button clicked</button>
//   </div>
// })

// export default App;




//use callback

import { memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <div>
      <Child onClick={onClick} />
      <button onClick={() => setCount(count + 1)}>
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default App;
