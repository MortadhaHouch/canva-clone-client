import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaReddit } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { ThemeContext } from "../../providers/themeProvider";
export default function Footer() {
  const [email,setEmail] = useState("");
  const theme = useContext(ThemeContext)
  return (
    <footer
      style={{
        backgroundColor:theme.isDark?"#091057":"#4A628A",
      }}
      className="text-light p-5 gap-5 d-flex flex-row justify-content-evenly align-items-center flex-wrap">
      <div className="d-flex flex-column justify-content-center align-items-center gap-3" style={{
        width:"clamp(300px,40%,450px)"
      }}>
        <label htmlFor="Email" className="w-100 text-start">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="Email" name="Email" placeholder="Email" className="form-control"/>
        <button disabled={email.length===0} className="btn btn-primary w-100">Join our news letter</button>
      </div>
      <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center gap-4">
        <h3>join our community</h3>
        <li className="w-100">
          <NavLink to={""} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><FaFacebook size={25}/><span>Facebook</span></NavLink>
        </li>
        <li className="w-100">
          <NavLink to={""} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><LuInstagram  size={25}/><span>Instagram</span></NavLink>
        </li>
        <li className="w-100">
          <NavLink to={""} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><FaXTwitter  size={25}/><span>Twitter</span></NavLink>
        </li>
        <li className="w-100">
          <NavLink to={""} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><FaReddit  size={25}/><span>Reddit</span></NavLink>
        </li>
      </ul>
      <ul className="list-unstyled d-flex flex-column justify-content-center align-items-center gap-4">
        <h3>Contact us</h3>
        <li className="w-100">
          <NavLink  to={"mailto:5ZCJF@example.com"} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><IoMdMailOpen size={25}/><span>5ZCJF@example.com</span></NavLink>
        </li>
        <li className="w-100">
          <NavLink  to={"mailto:5ZCJF@example.com"} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><FaPhoneAlt size={25}/><span>Whatsapp</span></NavLink>
        </li>
        <li className="w-100">
          <NavLink  to={"mailto:5ZCJF@example.com"} className="d-flex flex-row justify-content-start align-items-center gap-2 nav-link"><FaLocationCrosshairs size={25}/><span>Visit us</span></NavLink>
        </li>
      </ul>
    </footer>
  )
}
