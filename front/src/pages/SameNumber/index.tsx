import { useState } from 'react'
const shuffle = (arr : number[]) => {
  if (arr.length === 0 ) return arr;
  return arr.sort(() => Math.random() - 0.5);
}
function Index() {
  const randomBox1 = [1,2,3,4,5,6,7,8,9]
  const randomBox2 = [1,2,3,4,5,6,7,8,9]

  const concatBox = randomBox1.concat(randomBox2)
  const shuffleBox = shuffle(concatBox)
  console.log(shuffleBox)

  return (
    <div className='flex flex-col justify-center items-center'>
    </div>
  )
}

export default Index
