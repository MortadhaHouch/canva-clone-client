/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ThemeContext = createContext();
function ThemeProvider({children}) {
    const [isDark, setIsDark] = useState(false);
    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext,ThemeProvider}