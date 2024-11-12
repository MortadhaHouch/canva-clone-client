/* eslint-disable no-unused-vars */
import { useState } from "react"
import LoginImage from "../../../public/assets/Login-amico.svg"
import Logo from "../../../public/assets/pen-tool.png"
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import { useContext } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
import fetchData from "../../../utils/fetchData";
import Loader from "../LayoutComponents/Loader";
import {useCookies} from "react-cookie"
import sign from "jwt-encode"
import { jwtDecode } from "jwt-decode";
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [cookies,setCookie] = useCookies(["auth_token"])
    const theme = useContext(ThemeContext)
    async function handleSubmit(e){
        e.preventDefault();
        try {
            const response = await fetchData("/user/login","POST",{
                email:email.trim(),
                password:password.trim()
            },setIsLoading)
            console.log(response);
            const decodedToken = jwtDecode(response.token);
            if(decodedToken.email_error){
                setEmailError(decodedToken.email_error);
            }
            if(decodedToken.password_error){
                setPasswordError(decodedToken.password_error);
            }
            if(decodedToken.isVerified){
                localStorage.setItem("email",decodedToken.email);
                localStorage.setItem("firstName",decodedToken.firstName);
                localStorage.setItem("lastName",decodedToken.lastName);
                localStorage.setItem("avatar",decodedToken.avatar);
                localStorage.setItem("isLoggedIn",JSON.parse(decodedToken.isLoggedIn));
                setCookie("auth_token",sign({
                    email:decodedToken.email,
                    firstName:decodedToken.firstName,
                    lastName:decodedToken.lastName,
                },import.meta.env.VITE_SECRET_KEY),{
                    path:"/",
                    maxAge:60*60*24*7,
                    expires:new Date(Date.now()+60*60*24*7*1000),
                    sameSite:"strict"
                })
                location.assign("/home");
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
            src={LoginImage} />
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
                <img src={Logo} alt="" style={{borderRadius:"50%"}} width={100} height={100}/>
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
                    className="w-100 h-100 position-absolute top-0">
                </motion.span>
                    login
                </h2>
                <div>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control"/>
                    {emailError && (
                        <p className="text-light">{emailError}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
                    {passwordError && (
                        <p className="text-light">{passwordError}</p>
                    )}
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button disabled={email.length === 0 && password.length === 0} className="btn btn-primary w-100">login</button>
                    <p className="p-2">You don&apos;t have an account?</p>
                    <button className="btn bg-secondary w-100">
                        <NavLink to="/signup" className="nav-link">signup</NavLink>
                    </button>
                </div>
            </motion.form>
            {
                isLoading && (
                    <Loader/>
                )
            }
        </main>
    )
}
