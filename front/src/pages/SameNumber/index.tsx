import { useState,useEffect } from 'react'

const shuffle = (arr: Array<number>) => {
  if (arr.length === 0) return [];
  return arr.slice().sort(() => Math.random() - 0.5);
};

interface Shuffle {
  number? : number | undefined,
  style? : object
}

interface Item {
  number?: number,
  index?: number
}
const color = ['red','gray','green','blue'];

function Index() {
  const [boxList, setBoxList] = useState<Shuffle[]>([]);
  const [firstItem, setFirstItem] = useState<Partial<Item>>({})
  const [twoItem, setTwoItem] = useState<Partial<Item>>({})

  useEffect(() => {
    const randomBox = Array(9).fill(0).map((_, i) => i + 1);
    const shuffleList = shuffle([...randomBox, ...randomBox]).map((v)=>{
      return {
        number: v,
        style: {
          color : color[Math.floor(Math.random() * color.length -1 )],
          backgroundColor : '#F9F9F9',
          cursor : 'pointer'
        }
      };
    });
    setBoxList(shuffleList);
  }, []);


  const clickBox = (number: number, index: number) => {
    let newObj:Partial<Item> = {};
    newObj.number = number
    newObj.index = index
    if ( firstItem?.number ) {
      if (firstItem.number === number && firstItem.index === index) return ;
      setTwoItem(newObj) 
    } else {
      setFirstItem(newObj)
    } 
  };
  useEffect(()=>{
    if (twoItem?.number) {
      if ( firstItem.number === twoItem.number) {
        let result = boxList.filter((v)=> v.number !== twoItem.number)
        setBoxList(result)
      }
    } 
  },[twoItem])
  useEffect(()=>{
    if (firstItem?.number) {
    }
  },[firstItem])

  return (
    <>
      <div className='flex flex-wrap justify-center items-center w-full' >
        {boxList.map((v,i) => (
          <div
            className='w-32 h-32 flex items-center justify-center'
            key={i}
            style={v.style} 
            onClick={() => clickBox(v.number ? v.number : -1, i)}
          >{v.number}</div>
        ))}
      </div>
    </>
  );
}


export default Index
