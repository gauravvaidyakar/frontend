
import Counter from './components/counter'
import './App.css'
import { useState } from 'react'

function App() {
  const [count,setCount] = useState(0)

  const increment =()=>{
    setCount(count +1)
  }
  
  const decrement =()=>{
    setCount(count -1)
  }
  
  const Reset =()=>{
    setCount(0)
  }
  
  return (
    <>
       <Counter count={count} increment={increment} decrement={decrement} Reset={Reset}/>
    </>
  )
}

export default App
