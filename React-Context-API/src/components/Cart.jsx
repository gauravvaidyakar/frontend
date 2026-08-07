import { useContext } from 'react'
import Usercontext from '../context/userContext'

const Cart = () => {
    const {username,setUsername} = useContext(Usercontext)
  return (
     <>
     <input type="text" placeholder='enter your name' onChange={(e)=>{setUsername(e.target.value)}}/>
     </>
  )
}

export default Cart