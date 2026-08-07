import { useState } from "react";
import "./App.css";
import logo from "./assets/dices1.png";
import dice_1 from './assets/dice_1.png';
import dice_2 from './assets/dice_2.png';
import dice_3 from './assets/dice_3.png';
import dice_4 from './assets/dice_4.png';
import dice_5 from './assets/dice_5.png';
import dice_6 from './assets/dice_6.png';

const App = () => {
  const [page, setpage] = useState(false);
  const [showRules,setShowRules] = useState(false)
  const [totalScore,setTotalScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState(null);
  const [diceimg,setdiceimg] = useState(dice_1)

  const diceimages = [dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]

  const handle_img = () =>{
    const randomvalue = Math.floor(Math.random()*6)+1;
    setdiceimg(diceimages[randomvalue])
  }

  const change_page = () => {
    setpage(!page);
  };
  return (
    <>
      {!page && (
        <div id="main">
          <img className="dice-img" src={logo} alt="" />
          <div id="dice-text">
            <h1>DICE GAME</h1>
            <button onClick={change_page}>Play Now</button>
          </div>
        </div>
      )}

      {page && (
        <div>
          <div id="play-section" >
          <div>
            <h1>{totalScore}</h1>
            <h3>Total Score</h3>
          </div>
          <div >
            <div className="boxes">
              <h1 style={{
                backgroundColor:selectedNumber === 1?"black":"white",
                color:selectedNumber === 1?"white":"black",
              }}
              onClick={()=>setSelectedNumber(1)} >1</h1>
              <h1 style={{
                backgroundColor:selectedNumber === 2?"black":"white",
                color:selectedNumber === 2?"white":"black",}}
                onClick={()=>setSelectedNumber(2)} >2</h1>
              <h1 style={{
                backgroundColor:selectedNumber === 3?"black":"white",
                color:selectedNumber === 3?"white":"black",}} 
                onClick={()=>setSelectedNumber(3)} >3</h1>
              <h1 style={{
                backgroundColor:selectedNumber === 4?"black":"white",
                color:selectedNumber === 4?"white":"black",}} 
                onClick={()=>setSelectedNumber(4)} >4</h1>
              <h1 style={{
                backgroundColor:selectedNumber === 5?"black":"white",
                color:selectedNumber === 5?"white":"black",}} 
                onClick={()=>setSelectedNumber(5)} >5</h1>
              <h1 style={{
                backgroundColor:selectedNumber === 6?"black":"white",
                color:selectedNumber === 6?"white":"black",}} 
                onClick={()=>setSelectedNumber(6)} >6</h1>
            </div>
            <div>
              <h2>Select Number</h2>
            </div>
          </div>
         </div>
         <div id="centre">
          <img id="dice" src={diceimg} alt="" onClick={handle_img} />
          <h2>Click on Dice to roll</h2>
          <button style={{backgroundColor:"white"}} onClick={()=>setTotalScore(0)} >Reset Score</button><br />
          <button style={{backgroundColor:"black", color:"white"}} onClick={()=>{setShowRules(!showRules)}} >{showRules?"hide":"show"} Rules</button>
          {showRules && <div id="rules-page">
            <h2>how to play a Dice Game</h2>
            <p>select any number</p>
            <p>Click on Dice image</p>
            <p>after Click on Dice if selected number is equal to dice number you will get some points as dice</p>
            <p>if you get wrong guess then 2 points will be dedcuted</p>
          </div> }
        </div>
        </div>
      )}
    </>
  );
};

export default App;
