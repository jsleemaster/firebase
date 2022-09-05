import { useState,useEffect } from 'react'

const shuffle = (arr: Array<number>) => {
  if (arr.length === 0) return [];
  return arr.slice().sort(() => Math.random() - 0.5);
};

interface Shuffle {
  number? : number | undefined,
  style? : object
}

const color = ['red','gray','green','blue'];

function Index() {
  const [boxList, setBoxList] = useState<Shuffle[]>([]);

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
  const [firstItem, setFirstItem] = useState<Array<Object>>([])
  const [twoItem, setTwoItem] = useState<Array<Object>>([])

  const clickBox = (number: number, index: number) => {
    let newArr = []
    newArr.push(number)
    if ( firstItem.length > 0 ) {
      if ( firstItem[0] === number) {
        let arr = boxList.filter((v)=>v.number !== number)
        setBoxList(arr)
        setFirstItem([])
      }
    } else {
      setFirstItem(newArr)
    }
  };

  return (
    <>
      <div className='flex flex-wrap justify-center items-center w-full' >
        {boxList.map((v,i) => (
          <div
            className='w-32 h-32 flex items-center justify-center'
            key={i}
            style={v.style} 
            onClick={() => clickBox(v.number, i)}
          >{v.number}</div>
        ))}
      </div>
    </>
  );
}


export default Index
