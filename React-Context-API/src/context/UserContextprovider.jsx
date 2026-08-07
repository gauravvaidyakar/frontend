import { useState } from 'react'
import UserContext from './userContext'


const UserContextprovider = ({children}) => {
    const [username,setUsername] = useState("joan")
  return (
    <>
     <UserContext.Provider value={{username,setUsername}}>
        {children}
     </UserContext.Provider>
    </>
  )
}

export default UserContextprovider;