import { useState } from 'react';
import './App.css'

function App(){
    const [passwordType,setPasswordType] = useState("password")
    const [formData,setFormData] = useState({
        name:"",
        password:"",
    })

    const submit=(e)=>{
      e.preventDefault()
      console.log(formData);
       const checkpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if(formData.name<3||formData.password<8){
        return alert("wrong password")
      }
      else if(!checkpassword.test(formData.password)){
        return alert("use 1 lower case character , 1 upper case character, 1 number ,1 special character.")
      }

    }

    return(
        <div id='main'>
        <form onSubmit={submit}>
            <h1>sign in</h1>
            <br />
            <input type="text" placeholder='enter your name' value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
            <br /><br />
            <input type={passwordType} placeholder='enter your name' value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}}/>
            <br /><br />
            <button type='submit'>submit</button>
             <br /><br />
             <h2 onClick={()=>{setPasswordType(passwordType==="password"?"text":"password",)}}>{passwordType==="password"?"show":"hide"} password</h2>
        </form>
        </div>
    )
}

export default App;

