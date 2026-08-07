import { useState } from 'react';
import './App.css'
import StudentCart from "./components/studentCart";

function App(){
const [students,setStudents] = useState([
{
id:1,
name:"gaurav",
age:19,
course:"full stack",
isOnline:true,
},
{
id:2,
name:"khali",
age:56,
course:"wresling",
isOnline:false,
},
{
id:3,
name:"bahubali",
age:46,
course:"mahishmati",
isOnline:true,
},
])
  
  return(
    <>
    <h1>Student Profile App 🎓</h1>
    {students.map((item,index)=>{
      return( <div key={item.name+index}>
       <StudentCart name={item.name} age={item.age} course={item.course} isOnline={item.isOnline} details={`this course he is doing ${item.course}`}/>
       </div>
      )
    })}
    </>
  )
}

export default App;