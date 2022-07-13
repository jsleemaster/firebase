import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const test = (e:Event) =>{
    console.log(e)
  }
  const test2 = (e:Event) => {
    console.log(e)
  }
  return (
    <div className="App" >
      <div onDragStart={test} onDragEnd={test2} className="test" draggable="true"></div>
    </div>
  )
}

export default App
