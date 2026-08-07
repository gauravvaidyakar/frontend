// import { useEffect, useState } from 'react';
// import './App.css'

// function App(){
//   const [count,setCount] = useState(0)

//   useEffect(()=>{
//    console.log("useeffect");
//   },[count])
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>{setCount(count +1)}}>count +1</button>
//     </>
//   )
// }

// export default App;

// import { useEffect, useState } from 'react';
// import './App.css'

// function App(){
//   const [count,setCount] = useState(0)

//   useEffect(()=>{
//    const timer =  setInterval(() => {
//     setCount(count +1)
//   },1000);

//   return ()=>clearInterval(timer)  /* cleanupp function */
//   },[count])

//  return(
//   <>
//   <h1>{count}</h1>
//   </>
//  )
// }

// export default App;

// import { useState } from 'react';
// import './App.css'

// function App(){
// const [formData,setFormData] = useState({
//   name:"",
//   password:"",
// })

// const submit=(e)=>{
//     e.preventDefault()
//     console.log(formData);

// }

//   return(
//   <>
//   <form onSubmit={submit}>
//   <h1>sign in</h1>
//   <br /><br />
//   <input type="text" placeholder='enter your name' value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
//   <br /><br />
//   <input type="password" placeholder='enter your password' value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
//   <br /><br />
//   <button type='submit'>submit</button>
//   </form>
//   </>)
// }

// export default App;
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((resData) => setData(resData));
//       console.log(data);
      
//   }, [count]);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increse +1
//       </button>
//       {data.map((item,index)=>{
//         return <div key={item.name+index}>
//                <h1>{item.name}</h1>
//                <h2>{item.email}</h2>
//                <h3>{item.address.suite}</h3>
//         </div>
//       })}
//     </>
//   );
// }

// export default App;
import { useEffect, useState } from 'react';
import './App.css'

function App(){
  const [count,setCount] = useState(0)
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((bigData)=>setData(bigData))
    console.log(data);
    
  },[count])
   return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count +1)}}>Increse by +1</button>
    {data.map((item,index)=>{
       return <div key={item.name+index}>
            <h1>{item.name}</h1>
       </div>
    })}
    </>
   )
}
 
export default App;