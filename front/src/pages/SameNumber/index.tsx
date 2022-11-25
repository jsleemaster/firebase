import { useState ,useEffect } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const shuffle = (arr: Array<number>) => {
  if (arr.length === 0) return [];
  return arr.slice().sort(() => Math.random() - 0.5);
};

interface Shuffle {
  number? : number | undefined,
  style? : object
}

interface Item extends Shuffle{
  index?: number,
}

const color = ['red','gray','green','blue'];
const activeStyle = 'border-2 border-yellow-400';

function Index() {
  const [boxList, setBoxList] = useState<Shuffle[]>([]);
  const [firstItem, setFirstItem] = useState<Partial<Item>>({})
  const [twoItem, setTwoItem] = useState<Partial<Item>>({})
  const [parent, enableAnimations] = useAutoAnimate()

  useEffect(() => {
    const randomBox = Array(9).fill(0).map((_, i) => i + 1);
    const shuffleList = shuffle([...randomBox, ...randomBox]).map((v)=>{
      return {
        number: v,
        style: {
          color : color[Math.floor(Math.random() * color.length -1 )],
          backgroundColor : '#fff',
          cursor : 'pointer',
          borderRadius: '9999px',
          fontSize: '1.2rem',
          transition: 'all .2s ease-out',
          margin: '10px',
        }
      };
    });
    setBoxList(shuffleList);
  }, []);


  const clickBox = (value: Item, index: number) => {
    let tmpObject:Partial<Item> = {};
    tmpObject.number = value.number
    tmpObject.index = index
    if ( firstItem?.number ) {
      if (firstItem.number === value.number && firstItem.index === index) {
        setFirstItem({})
        return;
      }
      setTwoItem(tmpObject)
    } else {
      setFirstItem(tmpObject)
    } 
  };
  useEffect(()=>{
    if (twoItem?.number) {
      if ( firstItem.number === twoItem.number) {
        let result = boxList.filter((v)=> v.number !== twoItem.number)
        setBoxList(result)
        setTwoItem({})
        setFirstItem({})
      }
    } 
  },[twoItem])
  const activeCheck = (value:Item,index:number) => {
    if (firstItem?.number){
      if (firstItem.number === value.number && firstItem.index === index) {
        return activeStyle;
      }
    } else {
      return ''
    }
  }
  return (
    <>
      <div className='flex flex-wrap justify-center items-center w-full h-full' ref={parent} >
        {boxList.map((v,i) => (
          <div
            className={`w-32 h-32 flex items-center justify-center border
            border-solid ${activeCheck(v,i)}`}
            key={i}
            style={v.style} 
            onClick={() => clickBox(v, i)}
          >{v.number}</div>
        ))}
      </div>
    </>
  );
}


export default Index
