import './App.css'
import {useState} from 'React'

function App() {
 const [count,setCount] = useState(0)
 const increment = () =>{
    setCount(count + 1)
 }

 const Decrement = () =>{
    setCount(count - 1)
 }

 const reset = () =>{
    setCount(0)
 }
 

  return (
    <div id='main'>
      <h1>{count}</h1>
      <button className='btn' onClick={increment}>increment</button>
      <button className='btn' onClick={Decrement}>Decrement</button>
      <button className='btn' onClick={reset}>Reset</button>
    </div>
    
  )
}

export default App
