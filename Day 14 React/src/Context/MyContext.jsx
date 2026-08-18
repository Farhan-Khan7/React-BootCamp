import { createContext, useState } from "react";

// Context create kar rahe hain
export const MyStore = createContext(null);

export const ContextProvider = ({ children }) => {

  // Products ka global state
  
  const [product, setProducts] = useState([]);
  return (
    <MyStore.Provider value={{ product, setProducts }}>
      {children}
    </MyStore.Provider>
  );
};