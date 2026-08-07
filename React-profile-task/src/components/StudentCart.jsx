import { useState } from "react";

function StudentCart(props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={props.img} alt="" height={"150px"} width={"150px"} />
      </div>

      <h2 id="name">{props.name}</h2>
      <h4>{props.age}</h4>
      <h4 style={{marginTop:"-20px"}}>{props.course}</h4>
      <hr />
      <h2 style={{color:props.isOnline?"green":"red"}}>{props.isOnline == true ? "🟢online" : "🔴offline"}</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "Show"} Details
      </button>
      {showDetails && <h3>{props.details}</h3>}
    </div>
  );
}

export default StudentCart;

