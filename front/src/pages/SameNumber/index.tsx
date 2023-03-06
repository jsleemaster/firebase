import { useState, useEffect } from "react";

const shuffle = (arr: Array<number>) => {
  if (arr.length === 0) return [];
  return arr.slice().sort(() => Math.random() - 0.5);
};

interface Shuffle {
  number: number;
  style?: object;
  index?: number;
}

const color = ["red", "gray", "green", "blue"];
const activeStyle = "border-2 border-yellow-400";

function Index() {
  const [boxList, setBoxList] = useState<Shuffle[]>([]);
  const [firstItem, setFirstItem] = useState<Partial<Shuffle>>({});
  const [twoItem, setTwoItem] = useState<Partial<Shuffle>>({});

  useEffect(() => {
    setBoxList(randomList);
  }, []);

  // 랜덤 생성
  const randomList = () => {
    const randomBox = Array(9)
      .fill(0)
      .map((_, i) => i + 1);
    return shuffle([...randomBox, ...randomBox]).map((v) => {
      return {
        number: v,
        style: {
          color: color[Math.floor(Math.random() * color.length)],
          backgroundColor: "#fff",
          cursor: "pointer",
          borderRadius: "9999px",
          fontSize: "1.2rem",
          transition: "all .2s ease-out",
          margin: "10px",
        },
      };
    });
  };

  const clickBox = (value: Shuffle, index: number) => {
    let tmpObject: Partial<Shuffle> = {};
    tmpObject.number = value.number;
    tmpObject.index = index;
    if (firstItem?.number) {
      if (firstItem.number === value.number && firstItem.index === index) {
        setFirstItem({});
        return;
      }
      setTwoItem(tmpObject);
    } else {
      setFirstItem(tmpObject);
    }
  };

  useEffect(() => {
    if (twoItem?.number) {
      if (firstItem.number === twoItem.number) {
        let result = boxList.filter(
          (v: Partial<Shuffle>) => v.number !== twoItem.number
        );
        setBoxList(result);
        setTwoItem({});
        setFirstItem({});
      }
    }
  }, [twoItem]);

  const activeCheck = (value: Shuffle, index: number) => {
    if (firstItem?.number) {
      if (firstItem.number === value.number && firstItem.index === index) {
        return activeStyle;
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <ul className="flex flex-wrap justify-center items-center w-full h-full">
        {boxList.map((v, i) => (
          <li
            className={`w-32 h-32 flex items-center justify-center border
            border-solid ${activeCheck(v, i)}`}
            key={i}
            style={v.style}
            onClick={() => clickBox(v, i)}
          >
            {v.number}
          </li>
        ))}
        {!boxList.length ? (
          <div onClick={() => setBoxList(randomList)}>다시 시작</div>
        ) : (
          ""
        )}
      </ul>
    </>
  );
}

export default Index;
