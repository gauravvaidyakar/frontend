import { useState } from "react";


function StudentCart(props){
  const [showDetails,setshowDetails] = useState(false)

  return(
    <>
    <img src="" alt="" height={"200px"} width={"200px"}/>
    <h2>{props.name}</h2>
    <h2>{props.age}</h2>
    <h2>{props.course}</h2>
    <h3>{props.isOnline==true?"online":"offline"}</h3>
    <button onClick={()=>{setshowDetails(!showDetails)}}>{showDetails?"hide":"show"} Details</button>
    {showDetails && <h3>{props.details}</h3>}
    </>
  )
}

export default StudentCart;