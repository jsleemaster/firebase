import { useState } from 'react'

const shuffle = (arr : number[]) => {
  if (arr.length === 0 ) return arr;
  return arr.sort(() => Math.random() - 0.5);
}
function Index() {
  const randomBox1 = Array(9).fill(0).map((v,i)=>i+1)
  const randomBox2 = Array(9).fill(0).map((v,i)=>i+1)

  const concatBox = randomBox1.concat(randomBox2)
  const shuffleBox = shuffle(concatBox)
  
  return (
    <>
    <div className='flex flex-wrap justify-center items-center w-full' >
      {shuffleBox.map((v,i)=>{
        return <div 
        className='w-32 h-32 flex items-center justify-center' key={i} 
        >{v}</div>
      })}
    </div>
    </>
  )
}

export default Index
