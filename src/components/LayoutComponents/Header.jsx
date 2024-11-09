import { NavLink } from "react-router-dom";
import Logo from "../../../public/assets/pen-tool.png"
import { useContext } from "react";
import { LoginContext } from "../../providers/loginProvider";
import { WiStars } from "react-icons/wi";
import { RiFileEditLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { IoIosPeople, IoMdLogOut } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { CgLogIn } from "react-icons/cg";
import { FaCircleInfo } from "react-icons/fa6";
import { PiContactlessPaymentThin } from "react-icons/pi";
import { IoSunnySharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { ThemeContext } from "../../providers/themeProvider";
export default function Header() {
    const loginState = useContext(LoginContext);
    const theme = useContext(ThemeContext);
    return (
        <header
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#003161":"#624E88"
            }}
            className="w-100 h-auto d-flex flex-row justify-content-between align-items-center gap-2 p-2">
            <NavLink to="/home" className="nav-link text-light d-flex flex-row justify-content-center align-items-center gap-2">
                <img src={Logo} alt="" style={{borderRadius:"50%"}} width={50} height={50}/>
                <h1>Dezignify</h1></NavLink>
            <div>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-transparent"
                >
                    <div className="container bg-transparent">
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                {
                                    loginState.isLoggedIn||JSON.parse(localStorage.getItem("isLoggedIn"))?(
                                        <>
                                        </>
                                    ):(
                                        <>
                                        </>
                                    )
                                }
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/editor"><RiFileEditLine size={20}/><span>editor</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/dashboard"><MdDashboard size={20}/><span>dashboard</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-danger d-flex flex-row justify-content-start align-items-center gap-2"><IoMdLogOut size={20}/><span>sign out</span></button>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/login"><AiOutlineLogin size={20}/><span>login</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/signup"><CgLogIn size={20}/><span>signup</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/features"><WiStars size={20}/><span>features</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/community"><PiContactlessPaymentThin size={20}/><IoIosPeople size={20}/><span>community</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/contact-us"><PiContactlessPaymentThin size={20}/><span>contact us</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link hover-link text-light d-flex flex-row justify-content-start align-items-center gap-2" to="/about"><FaCircleInfo size={20}/><span>about</span></NavLink>
                                </li>
                                <button 
                                    className="btn btn-outline-secondary"
                                    onClick={()=>{
                                        localStorage.setItem("isDark",!theme.isDark);
                                        theme.setIsDark(!theme.isDark);
                                    }}
                                >
                                    {
                                        theme.isDark||JSON.parse(localStorage.getItem("isDark"))?(
                                            <IoSunnySharp size={20}/>
                                        ):(
                                            <FaMoon size={20}/>
                                        )
                                    }
                                </button>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}
