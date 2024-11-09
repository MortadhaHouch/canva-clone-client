/* eslint-disable react/prop-types */
import {motion, useAnimationControls, useInView} from "framer-motion"
import { useContext, useEffect, useRef } from "react"
import { ThemeContext } from "../../providers/themeProvider";
export default function Card({index,item}) {
    const cardRef = useRef(undefined);
    const isInView = useInView(cardRef);
    const animationControls = useAnimationControls();
    const theme = useContext(ThemeContext);
    useEffect(()=>{
        if(isInView){
            animationControls.start("animate")
        }else{
            animationControls.start("initial")
        }
    },[isInView,animationControls]);
    return (
        <motion.div
            ref={cardRef}
            key={index} 
            className='d-flex flex-column justify-content-center align-items-center glass glass-card p-3'
            initial="initial"
            animate="animate"
            variants={{
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 }
            }}
            transition={{
                duration: 0.5*index,
                ease: "easeInOut",
                type: "spring"
            }}
        >
            <h3 className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>{item.title}</h3>
            <h5>{item.description}</h5>
            <img src={item.icon} alt="image" width={200} height={200}/>
            <div className='w-100 d-flex flex-row justify-content-evenly align-items-center gap-2'>
                <button className='btn btn-primary w-100'><span>Get started</span></button>
                <button className='btn btn-secondary w-100'><span>Read more</span></button>
            </div>
        </motion.div>
    )
}
