import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import About from "./components/About";

function App(){
  
  return(
    <>
    <h1>barik barik halav g kambar</h1>
    <Routes>
      <Route path="/" element={<Cart/>}/>
      <Route path="/About" element={<About/>}/>
    </Routes>
     <br /><br />
    <button onClick={change}>change the page</button>
    </>
  )
}

export default App;