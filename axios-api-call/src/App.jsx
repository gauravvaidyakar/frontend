
// import { useState,useEffect} from "react"
// import "./App.css"
// import axios from "axios";
// const App = () => {

//   const [username,setUsername] = useState([])
   
//   const ApiCall=()=>{
//   fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setUsername(data))
//   }

//   const changeApi = async () =>{ 
//     const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       setUsername(response.data)
//   }

//    useEffect(()=>{
//     changeApi()
//    },[])

//   return (
//    <>
//     {username.map((item,index)=>{
//       return (
//         <div key={index.id}>
//         <h1>{item.name}</h1>
//         <h2>{item.email}</h2>
//         <h3>{item.username}</h3>
//         </div>
//       )
//     })}
//    <h1>bhaichara on tap</h1>
//     <button onClick={ApiCall}>
//       Call Api
//     </button>
//     <button onClick={changeApi}>
//       change Api
//     </button>
//    </>
//   )
// }

// export default App;


import { useState } from 'react'
import './App.css'
import axios from "axios"

const App = () => { 
  const [data,setData] = useState([])
  const callApi = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    setData(response.data)
  }
  return (
    <>
    {data.map((item,index)=>{
      return <div key={index}>
            <h1>{item.name}</h1>
      </div>
    })}
    <h1>bahubali samrajaym bhajeum</h1>
    <button onClick={callApi}>
      Call Api
    </button>
    </>
  )
}

export default App;