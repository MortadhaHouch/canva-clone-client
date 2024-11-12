import { useContext } from "react";
import { ThemeContext } from "../../providers/themeProvider";
import ErrorImage from "../../../public/GIFs/error.gif"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export default function Error() {
    const theme = useContext(ThemeContext);
    return (
        <main
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
            }}
            className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center flex-wrap gap-2 main-page"
        >
            <img 
                src={ErrorImage} 
                alt="" 
                style={{
                    width:"clamp(300px,40%,600px)",
                    height:"clamp(300px,40%,600px)",
                    mixBlendMode:"multiply"
                }}/>
            <button className="btn btn-primary">
                <NavLink to={"/home"} className={"nav-link text-light d-flex flex-row justify-content-center align-items-center gap-2"}><FaHome size={20}/><span>back to home</span></NavLink>
            </button>
        </main>
    )
}
