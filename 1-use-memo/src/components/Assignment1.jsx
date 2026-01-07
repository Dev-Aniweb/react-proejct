import React, { useMemo, useState } from 'react'



 const Assignment1 = () => {


  const[data ,setData]=useState()

  const factValue = useMemo(()=>{
  let value = 1;
  for( let i = 1; i <= data;i++){
  value = value*i;
}
return value;
  },[data])

// let factValue = 1;
// for( let i = 1; i <= data;i++){
//   factValue = factValue*i;

// }



  return (
    <div>
      <input
      value={data}
      type='number'
      placeholder='enter a number'
      onChange={(e)=>setData(Number(e.target.value)) }


      />
      <p>factorial of {data}:{factValue} </p>


    </div>
  )
}

export default Assignment1