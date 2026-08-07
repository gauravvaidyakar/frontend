import { useContext } from 'react'
import UserContext from '../context/userContext'

const Cart = () => {
    const {username, setUsername} = useContext(UserContext)
  return (
    <>
    <input type="text" placeholder='enter your name' onChange={(e)=>{setUsername(e.target.value)}}/>
    </>
  )
}

export default Cart;