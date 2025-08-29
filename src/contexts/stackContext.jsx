import { createContext, useContext, useState } from "react";

const StackStatusContext = createContext();

export const StackProvider = ({ children }) => {
    const [cardStatus, setCardStatus] = useState();
    return (
        <StackStatusContext.Provider value={{ cardStatus, setCardStatus }}>
            {children}
        </StackStatusContext.Provider>
    )
}

export const UseStackProvider = () => useContext(StackStatusContext);