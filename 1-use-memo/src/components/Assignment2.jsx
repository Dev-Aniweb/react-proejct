import React, { useEffect, useMemo, useState } from 'react'


const words=["i","my", "name ", "is ", "anil","kumar ","verma ","wordpres developer "];
const TOTAL_LINES=1000;
const ALL_WORDS=[]
for (let i = 0; i < TOTAL_LINES; i++) {
  
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
         
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
        ALL_WORDS.push(sentence);
      
}




const Assignment2 = () => {
  const[sentence,setSentence]=useState(ALL_WORDS);
  const[filter,setFilter]=useState("")

const filteredSentences = useMemo(()=>{
   
  return sentence.filter(x=>x.includes(filter));

},[filter,sentence])
 


  return (
    <div>
      <input
type='text'
onChange={(e)=>{setFilter(e.target.value)}}
/>
{filteredSentences.map(word=><div> 
  {word}

</div>)}

    </div>
  )
}

export default Assignment2