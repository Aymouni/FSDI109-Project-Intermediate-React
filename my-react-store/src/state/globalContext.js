import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
  user: {}, // Default user is an empty object, can store user info like firstName, email, etc.
});

export default GlobalContext;
