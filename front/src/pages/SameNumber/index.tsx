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
  // let boxArr:object[] = []
  const [boxArr, setBoxArr] = useState<object[]>([])
  
  const color = ['red','gray','green','blue']
  shuffleArr.map((v)=>{
    let obj:shuffle = {}
    obj.number = v
    obj.style = {
      color : color[Math.floor(Math.random() * color.length-1)],
      backgroundColor : '#F9F9F9',
      cursor : 'pointer'
    }
    boxArr.push(obj)
  })
  let one:number[] = [];  
  const clickbox = (number:number, index:number) => {
    if ( one.length !== 0 ) {
      //두번째 클릭
      if ( one.findIndex((v)=>v === number) !== -1) {
        one = []
        //삭제로직
      } else {
        return;
      }
    } else {
      one.push(number)
    }
  }
  return (
    <>
    <div className='flex flex-wrap justify-center items-center w-full' >
      {boxArr.map((v,i)=>{
        return <div 
        className='w-32 h-32 flex items-center justify-center' key={i}
        style={v.style} 
        onClick={()=>clickbox(v.number,i)}
        >{v.number}</div>
      })}
    </div>
    </>
  )
}

export default Index
