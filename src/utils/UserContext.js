import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  return (
    <UserContext.Provider
      value={{
        pizzas,
        setPizzas,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
