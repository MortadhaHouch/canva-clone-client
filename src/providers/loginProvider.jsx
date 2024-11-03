/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const LoginContext = createContext();
function LoginProvider({children}) {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </LoginContext.Provider>
    )
}
export {LoginProvider,LoginContext}