import { useContext, useState } from 'react'
import { ThemeContext } from '../../providers/themeProvider'
import { FaArrowLeft,FaArrowRight, FaFileAlt, FaHistory, FaHome } from "react-icons/fa";
import {NavLink} from "react-router-dom"
import { IoIosNotifications } from "react-icons/io";
import {CgProfile} from "react-icons/cg"
import Avatar from "../../../public/assets/Picture1.png"
export default function Aside() {
    const theme = useContext(ThemeContext)
    const [isShown,setIsShown] = useState(true);
    return (
        <aside
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#2A3663":"#A6AEBF"
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
                    backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"rgba(16, 55, 92, 0.75)":"rgba(104, 109, 118, 0.75)",
                    backdropFilter:"blur(10px)"
                }}>
                <img src={Avatar} width={80} height={80} style={{borderRadius:"50%"}} alt="" />
                <h4 className={`${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>Mortadha Houch</h4>
                <p className={`${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>Designer, Developer</p>
            </div>
            <ul className='list-unstyled d-flex flex-column justify-content-start align-items-start gap-2 p-2'>
                <li className='w-100'>
                    <NavLink to="" className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 ${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}><FaHome size={25}/>Home</NavLink>
                </li>
                <li className='w-100'>
                    <NavLink to="profile" className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 ${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}><CgProfile size={25}/><span>Profile</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink to="projects" className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 ${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}><FaFileAlt size={25}/><span>Projects</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink to="activity-log" className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 ${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}><FaHistory size={25}/><span>Activity history</span></NavLink>
                </li>
                <li className='w-100'>
                    <NavLink to="notifications" className={`nav-link d-flex flex-row justify-content-start align-items-center gap-2 ${theme.isDark || JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}><IoIosNotifications size={25}/><span>Notifications</span></NavLink>
                </li>
            </ul>
        </aside>
    )
}
