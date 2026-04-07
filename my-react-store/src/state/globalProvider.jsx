import { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalProvider = (props) => {
  // const [state, setsState] = useState(initialValue)
  const [user, setsUser] = useState({
    id: 65,
    firstName: "John",
    lastName: "Doe",
    email: "jdoe@sdgku.edu",
    avatar:
      "https://images.unsplash.com/photo-1772371272218-d39eca1efdeb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: {
      street: "123 Broadway st",
      city: "San Diego",
      state: "CA",
      zip: "92123",
    },
  });

  return (
    <GlobalContext.Provider
      value={{
        user, //user: user,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
