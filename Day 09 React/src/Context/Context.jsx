import { createContext , useState } from "react";

export const MyShop = createContext();


export const ContextProvider = ({children}) => {

    
  const [tabs, setTabs] = useState(false);
  const [cartItems , setCardItems] = useState([])

    return <MyShop.Provider value={{tabs , setTabs , cartItems , setCardItems}}>{children}</MyShop.Provider>
}

