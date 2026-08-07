import  { useContext } from 'react'
import Usercontext from './context/userContext'
import Cart from './components/cart'

const App = () => {
    const {username,setUsername} = useContext(Usercontext)
  return (
    <>
    <h1>name:{username}</h1>
    <Cart/>
    </>
  )
}

export default App;