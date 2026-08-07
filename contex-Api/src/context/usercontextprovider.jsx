import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("Alex");
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
