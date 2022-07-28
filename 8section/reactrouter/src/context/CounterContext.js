
// 1 - create context 
import { createContext, useState } from "react";

export default CounterContext = createContext();

// 2 - create provider 
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )


}