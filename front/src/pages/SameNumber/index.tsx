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
  const boxArr:object[] = []
  
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
  const ClickOne = [];
  const ClickTwo = [];
  const clickbox = (number:object, index:number) => {
    //첫번째 값이 있는지 확인
    //첫번째 값이랑 두번째 값이 같은지 확인
    //틀리다면 값 초기화 시간초 감소
    //맞다면 배열 복사 후 삭제한 값을 new Arr로 교체
  }
  return (
    <>
    <div className='flex flex-wrap justify-center items-center w-full' >
      {boxArr.map((v,i)=>{
        return <div 
        className='w-32 h-32 flex items-center justify-center' key={i}
        style={v.style} 
        onClick={()=>clickbox(v,i)}
        >{v.number}</div>
      })}
    </div>
    </>
  )
}

export default Index
