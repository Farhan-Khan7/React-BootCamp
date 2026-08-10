import { createContext, useState } from "react";

export const MyStore =  createContext();


export const ContextProvider = ({children}) => {

    const [isOpenCart , setIsOpenCart] = useState(false);
    const [cartItems , setCartItems] = useState([]);

    return <MyStore.Provider value={{isOpenCart , setIsOpenCart , cartItems , setCartItems }}>
        {children}
    </MyStore.Provider>
}