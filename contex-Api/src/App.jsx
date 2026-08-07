import { useContext } from "react";
import UserContext from "./context/userContext";
import Cart from "./components/Cart";
function App() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <>
      <h1>Username:{username}</h1>
      <Cart/>
    </>
  );
}

export default App;
