import { createContext } from "react";

import { Doctors } from "../assets/assets";
export const AppContext=createContext()

const AppContextProvider=(props)=> {
    const value={
Doctors
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;

