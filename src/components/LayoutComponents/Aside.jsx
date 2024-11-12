import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import { FaArrowLeft,FaArrowRight, FaFileAlt, FaHistory, FaHome } from "react-icons/fa";
import {NavLink, useLocation} from "react-router-dom"
import { IoIosNotifications } from "react-icons/io";
import {CgProfile} from "react-icons/cg"
export default function Aside() {
    const theme = useContext(ThemeContext)
    const [isShown,setIsShown] = useState(true);
    const location = useLocation();
    useEffect(()=>{
        console.log(location);
    },[location])
    return (
        <aside
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#2A3663":"#9B7EBD"
            }}
            className={`aside-left ${isShown?"shown":"hidden"}`}
        >
            <button 
                className='btn btn-outline-primary'
                onClick={() => setIsShown((val)=>!val)}
            >
                {
                    isShown?(
                        <FaArrowLeft />
                    ):(
                        <FaArrowRight />
                    )
                }
            </button>
            <div 
                style={{
                    backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"rgba(16, 55, 92, 0.75)":"#674188",
                    backdropFilter:"blur(10px)",
                    gridTemplateColumns:"1fr 2fr",
                }}>
                <img src={localStorage.getItem("avatar")} width={80} height={80} style={{borderRadius:"50%"}} alt="" />
                <h4 className={`${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`}>{localStorage.getItem("email")}</h4>
                <p className={`${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-light"}`}>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</p>
            </div>
            <ul className='list-unstyled d-flex flex-column justify-content-start align-items-start gap-2 p-2'>
                <li className='w-100'>
                    <NavLink 
                        to="preview"
                        style={{
                            backgroundColor: 
                                location.pathname === "/dashboard/preview" 
                                ? (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? "#000B58"
                                : "#433878"
                                : (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? ""
                                : ""
                        }}
                        className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 text-light`}
                    ><FaHome size={25}/>Home</NavLink>
                </li>
                <li className='w-100'>
                    <NavLink 
                        to="profile"
                        style={{
                            backgroundColor: 
                                location.pathname === "/dashboard/profile" 
                                ? (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? "#000B58"
                                : "#433878"
                                : (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? ""
                                : ""
                        }}
                        className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 text-light`}
                    ><CgProfile size={25}/><span>Profile</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink 
                        to="projects"
                        style={{
                            backgroundColor: 
                                location.pathname === "/dashboard/projects" 
                                ? (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? "#000B58"
                                : "#433878"
                                : (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? ""
                                : ""
                        }}
                        className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 text-light`}
                    ><FaFileAlt size={25}/><span>Projects</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink
                        style={{
                            backgroundColor: 
                                location.pathname === "/dashboard/activity-log" 
                                ? (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? "#000B58"
                                : "#433878"
                                : (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? ""
                                : ""
                        }}
                        to="activity-log" 
                        className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 text-light`}
                    ><FaHistory size={25}/><span>Activity history</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink 
                        to="notifications"
                        style={{
                            backgroundColor: 
                                location.pathname === "/dashboard/notifications" 
                                ? (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? "#000B58"
                                : "#433878"
                                : (theme.isDark || JSON.parse(localStorage.getItem("isDark"))) 
                                ? ""
                                : ""
                        }}
                        className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 text-light`}
                    ><IoIosNotifications size={25}/><span>Notifications</span></NavLink>
                </li>
            </ul>
        </aside>
    )
}
