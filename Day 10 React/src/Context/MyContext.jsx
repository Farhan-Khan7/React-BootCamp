import { createContext, useState } from "react";

export const MyStore = createContext();


export const ContextProvider = ({children}) => {

    const [centerValue , setCentrealValue] = useState("Me hu context data ")
    return <MyStore.Provider value={centerValue}>
        {children}
    </MyStore.Provider>
}


