import { useContext } from "react"
import { ThemeContext } from "../../providers/themeProvider"

export default function History() {
    const theme = useContext(ThemeContext)
    return (
        <main
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
            }}
            className="w-100 min-vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 main-page"
        >
            
        </main>
    )
}
