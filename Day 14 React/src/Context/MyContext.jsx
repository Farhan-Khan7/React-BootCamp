import { createContext, useState } from "react";

// Context create kar rahe hain
export const MyStore = createContext(null);

export const ContextProvider = ({ children }) => {

  // Products ka global state
  
  const [product, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  return (
    <MyStore.Provider value={{ product, setProducts , singleProduct , setSingleProduct }}>
      {children}
    </MyStore.Provider>
  );
};