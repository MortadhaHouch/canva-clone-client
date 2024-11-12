/* eslint-disable react/prop-types */
import {useContext, useEffect, useRef, useState} from "react";
import { ThemeContext } from "../../providers/themeProvider";
import { useAnimationControls, useInView } from "framer-motion";
import {motion} from "framer-motion"
import { AiFillLike,AiFillDislike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import Avatar from "../../../public/assets/Picture1.png"
import fetchData from "../../../utils/fetchData.js";
import {Dialog} from "./Dialog.jsx";
export default function Feedback({index,item}) {
    const cardRef = useRef(undefined);
    const isInView = useInView(cardRef);
    const animationControls = useAnimationControls();
    const theme = useContext(ThemeContext);
    const [isLoading,setIsLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [isShown, setIsShown] = useState(false);
    useEffect(()=>{
        if(isInView){
            animationControls.start("animate")
        }else{
            animationControls.start("initial")
        }
    },[isInView,animationControls]);
    async function handleDataLoading(){
        setIsShown(true);
        // try{
        //     const response = await fetchData("comment/","GET",null,setIsLoading);
        //     if(response.comments){
        //         setComments(response.comments);
        //     }
        // }catch (e) {
        //     console.log(e);
        // }
    }
    return (
        <motion.div
            ref={cardRef}
            key={index} 
            className='d-flex flex-column justify-content-evenly align-items-center p-3 glass glass-card feedback-preview'
            initial="initial"
            animate="animate"
            style={{
                height:"300px",
                width:"clamp(300px,30%,450px)"
            }}
            variants={{
                initial: { opacity: 0, x:-50 },
                animate: { opacity: 1, x: 0 }
            }}
            transition={{
                duration: 0.5*index,
                delay: 0.5*index,
                ease: "easeInOut",
                type: "spring"
            }}
            title={item.author.email}
        >
            <div className="feedback-header">
                <img src={Avatar} alt="image" width={70} height={70}/>
                <h3 className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>{item.author.email}</h3>
                <h5 className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>{item.author.name}</h5>
            </div>
            <div className='w-100 d-flex flex-row justify-content-evenly align-items-center gap-2'>
                <p>{item.content}</p>
            </div>
            <div className='w-100 d-flex flex-row justify-content-evenly align-items-center gap-2'>
                <button
                    className="btn btn-outline-light w-100"
                >
                    <AiFillLike />
                    <span>{item.likes}</span>
                </button>
                <button
                    className="btn btn-outline-light w-100"
                >
                    <AiFillDislike/>
                    <span>{item.dislikes}</span>
                </button>
                <button
                    className="btn btn-outline-light w-100"
                    onClick={handleDataLoading}
                >
                    <FaComment size={20}/>
                    <span>{item.comments}</span>
                </button>
            </div>
            {
                isShown && (
                    <Dialog
                        isShown={isShown}
                        setIsShown={setIsShown}
                        updateProfile={false}
                        showData={true}
                        item={item}
                        data={comments}
                    />
                )
            }
        </motion.div>
    )
}
