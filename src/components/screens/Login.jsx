import { useState } from "react"
import LoginImage from "../../../public/assets/Login-amico.svg"
import Logo from "../../../public/assets/pen-tool.png"
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import { useContext } from 'react';
import { ThemeContext } from '../../providers/themeProvider';
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const theme = useContext(ThemeContext)
    async function handleSubmit(e){
        e.preventDefault();
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
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button disabled={email.length === 0 && password.length === 0} className="btn btn-primary w-100">login</button>
                    <p className="p-2">You don&apos;t have an account?</p>
                    <button className="btn bg-secondary w-100">
                        <NavLink to="/signup" className="nav-link">signup</NavLink>
                    </button>
                </div>
            </motion.form>
        </main>
    )
}
