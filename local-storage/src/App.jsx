import React from 'react'

const App = () => {

  localStorage.setItem('user','anil k verma');
  let user = localStorage.getItem('user');
  console.log(user);
  const users={
    name :'anil',
    age:25,
    subject:'engineering'
  }
  localStorage.setItem('user',JSON.stringify(users));
  console.log(users)
  return (
    <div>App</div>
  )
}

export default App