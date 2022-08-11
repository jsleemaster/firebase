import { useState } from 'react'

const shuffle = (arr : number[]) => {
  if (arr.length === 0 ) return arr;
  return arr.sort(() => Math.random() - 0.5);
}
interface shuffle {
  number? : number,
  style? : object
}
function Index() {
  const randomBox1 = Array(9).fill(0).map((v,i)=>i+1)
  const randomBox2 = Array(9).fill(0).map((v,i)=>i+1)

  const concatBox = randomBox1.concat(randomBox2)
  const shuffleArr = shuffle(concatBox)
  const newArr:object[] = []
  
  const color = ['red','gray','green','blue']
  shuffleArr.map((v)=>{
    let obj:shuffle = {}
    obj.number = v
    obj.style = {
      color : color[Math.floor(Math.random() * color.length-1)],
      backgroundColor : '#F9F9F9'
    }
    newArr.push(obj)
  })

  return (
    <>
    <div className='flex flex-wrap justify-center items-center w-full' >
      {newArr.map((v,i)=>{
        return <div 
        className='w-32 h-32 flex items-center justify-center' key={i}
        style={v.style} 
        >{v.number}</div>
      })}
    </div>
    </>
  )
}

export default Index
