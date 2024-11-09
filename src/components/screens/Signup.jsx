/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import fetchData from "../../../utils/fetchData.js";
import {useCookies} from "react-cookie"
import sign from "jwt-encode";
import SignUpImage from "../../../public/assets/Sign up-bro.svg"
import Logo from "../../../public/assets/pen-tool.png"
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import { ThemeContext } from "../../providers/themeProvider.jsx";
export default function Signup() {
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [password,setPassword] = useState("");
  const [cookies,setCookie] = useCookies(["auth_token"])
  const theme = useContext(ThemeContext)
  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetchData("/user/signup","POST",{
        email,
        password,
        firstName,
        lastName
      })
      if(response.isVerified){
        setCookie("auth_token",response.token,sign(
          {
            path: "/",
            maxAge:60*60*24*7
          },import.meta.env.VITE_SECRET_KEY
        ))
        window.location.href = "/dashboard"
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main     
      style={{
        backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
      }}
      className="w-100 min-vh-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 main-page">
      <motion.img
        src={SignUpImage}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: { opacity:0, x:-200 },
          animate: { opacity:1, x:0 },
          exit: { opacity:0, x:200 }
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}
        alt="" 
        style={{
          width:"clamp(300px,50%,600px)",
          height:"clamp(300px,50%,600px)"
        }}
        />
      <motion.form 
        onSubmit={handleSubmit} 
        className="d-flex flex-column justify-content-center align-items-center gap-2 p-2 glass"
        style={{width:"clamp(350px,50%,450px)",height:"clamp(350px,50%,auto)"}}
        initial="initialStage"
        animate="animateStage"
        exit="exit"
        variants={{
          initialStage: { opacity:0, x:200 },
          animateStage: { opacity:1, x:0 },
          exit: { opacity:0, x:-200 }
        }}
        transition={{
          duration:1,
          ease:"easeInOut"
        }}
      >
        <img src={Logo} alt="" style={{width:100,height:100}}/>
        <h2 className="position-relative">
          <motion.span 
            initial='initialState' 
            animate='animateState'
            variants={{
              initialState:{
                clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
              },
              animateState:{
                clipPath:"polygon(0 0, 0 0, 0 100%, 0% 100%)"
              }
            }}
            transition={{
              duration:1.5,
              ease:"easeInOut"
            }}
            style={{backgroundColor:"#608BC1"}}
            className="w-100 h-100 position-absolute top-0"></motion.span>
          sign up
        </h2>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" className="form-control"/>
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="password" name="lastName" id="lastName" className="form-control"/>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control"/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
        </div>
        <div className="d-flex flex-column justify-content-center align">
          <button className="btn btn-primary w-100">sign up</button>
          <p className="p-2">you have an account?</p>
          <button className="btn bg-secondary w-100">
            <NavLink to="/login" className="nav-link">login</NavLink>
          </button>
        </div>
      </motion.form>
    </main>
  )
}
