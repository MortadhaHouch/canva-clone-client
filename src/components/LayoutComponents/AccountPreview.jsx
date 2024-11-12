import { useContext, useEffect, useState } from "react";
import fetchData from "../../../utils/fetchData";
import { ThemeContext } from "../../providers/themeProvider";
import FeedbackImage from "../../../public/assets/feedback.png"
import PostImage from "../../../public/assets/picture.png"
import ProjectImage from "../../../public/assets/project-management.png"
import CommentImage from "../../../public/assets/comment.png"
import { FaPlus} from "react-icons/fa";
import Error404Light from "../../../public/assets/error-404-light.svg"
import Error404Dark from "../../../public/assets/error-404-dark.svg";
import {motion} from "framer-motion"
export default function AccountPreview() {
    const [isLoading,setIsLoading] = useState(false);
    const [userMetaData,setUserMetaData] = useState(null);
    const [tabName,setTabName] = useState("posts");
    const theme = useContext(ThemeContext)
    async function handleDataLoading(){
        try {
            const response = await fetchData("/user/preview","GET",null,setIsLoading);
            if(response.userMetaData){
                console.log(response);
                setUserMetaData(response.userMetaData);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleDataLoading();
    },[])
    return (
        <section className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
            {
                userMetaData && (
                    <>
                        <div className={`d-flex flex-column justify-content-center align-items-center gap-3 ${theme.isDark||JSON.parse(localStorage.getItem('isDark'))?'text-light':'text-dark'}`}>
                            <img src={localStorage.getItem("avatar")} width={100} height={100} style={{borderRadius:"50%"}} alt="" />
                            <h4>{localStorage.getItem("email")}</h4>
                            <h4>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h4>
                            <div className={`w-100 d-flex flex-row justify-content-evenly align-items-center ga-2 ${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4>{userMetaData.followingCount}</h4>
                                    <h6>following</h6>
                                </div>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4>{userMetaData.followersCount}</h4>
                                    <h6>followers</h6>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                            <button
                                className={`btn btn-${tabName === "posts"?"outline-primary":"outline-secondary"} d-flex flex-column justify-content-center align-items-center border-2`}
                                style={{width:"100px"}}
                                onClick={()=>setTabName("posts")}>
                                <img src={PostImage} alt="" width={80} height={80} style={{mixBlendMode:"multiply"}}/><span>posts</span></button>
                            <button
                                className={`btn btn-${tabName === "comments"?"outline-primary":"outline-secondary"} d-flex flex-column justify-content-center align-items-center border-2`}
                                style={{width:"100px"}}
                                onClick={()=>setTabName("comments")}>
                                <img src={CommentImage} alt="" width={80} height={80} style={{mixBlendMode:"multiply"}}/>
                                <span>comments</span>
                            </button>
                            <button
                                className={`btn btn-${tabName === "feedbacks"?"outline-primary":"outline-secondary"} d-flex flex-column justify-content-center align-items-center border-2`}
                                style={{width:"100px"}}
                                onClick={()=>setTabName("feedbacks")}>
                                <img src={FeedbackImage} width={80} height={80} alt="" style={{mixBlendMode:"multiply"}}/>
                                <span>feedbacks</span>
                            </button>
                            <button
                                className={`btn btn-${tabName === "projects"?"outline-primary":"outline-secondary"} d-flex flex-column justify-content-center align-items-center border-2`}
                                style={{width:"100px"}}
                                onClick={()=>setTabName("projects")}>
                                <img src={ProjectImage} width={80} height={80} alt="" style={{mixBlendMode:"multiply"}}/>
                                <span>projects</span>
                            </button>
                        </div>
                        {
                            tabName.toLowerCase() === "posts" &&(
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit={{opacity: 0, x: -50}}
                                    variants={{
                                        initial: {opacity: 0, x: -50},
                                        animate: {opacity: 1, x: 0},
                                        exit: {opacity: 0, x: -50}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.28, 0.96]
                                    }}
                                    className={`d-flex flex-column justify-content-center align-items-center gap-2 p-4 ${theme.isDark||JSON.parse(localStorage.getItem('isDark'))?'text-light':'text-dark'}`}
                                >
                                    <button className="btn btn-primary"><FaPlus size={20}/> <span>add a new post</span></button>
                                    {
                                        userMetaData.postsCount === 0 ? (
                                            theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? (
                                                <>
                                                    <img src={Error404Dark} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={Error404Light} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            )
                                        ) : (
                                            <div className="d-flex flex-column justify-content-center align-items-center"></div>
                                        )
                                    }
                                </motion.div>
                            )
                        }
                        {
                        tabName.toLowerCase() === "comments"  && (
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit={{opacity: 0, x: -50}}
                                    variants={{
                                        initial: {opacity: 0, x: -50},
                                        animate: {opacity: 1, x: 0},
                                        exit: {opacity: 0, x: -50}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.28, 0.96]
                                    }}
                                    className={`d-flex flex-column justify-content-center align-items-center gap-2 p-4 ${theme.isDark||JSON.parse(localStorage.getItem('isDark'))?'text-light':'text-dark'}`}
                                >
                                    {
                                        userMetaData.commentsCount === 0 ? (
                                            theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? (
                                                <>
                                                    <img src={Error404Dark} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={Error404Light} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            )
                                        ) : (
                                            <div className="d-flex flex-column justify-content-center align-items-center"></div>
                                        )
                                    }
                                </motion.div>
                            )
                        }
                        {
                        tabName.toLowerCase() === "feedbacks" && (
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit={{opacity: 0, x: -50}}
                                    variants={{
                                        initial: {opacity: 0, x: -50},
                                        animate: {opacity: 1, x: 0},
                                        exit: {opacity: 0, x: -50}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.28, 0.96]
                                    }}
                                    className={`d-flex flex-column justify-content-center align-items-center gap-2 p-4 ${theme.isDark||JSON.parse(localStorage.getItem('isDark'))?'text-light':'text-dark'}`}
                                >
                                    <button className="btn btn-primary"><FaPlus size={20}/> <span>make a new feedback</span></button>
                                    {
                                        userMetaData.feedbacksCount === 0 ? (
                                            theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? (
                                                <>
                                                    <img src={Error404Dark} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={Error404Light} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            )
                                        ) : (
                                            <div className="d-flex flex-column justify-content-center align-items-center"></div>
                                        )
                                    }
                                </motion.div>
                            )
                        }
                        {
                        tabName.toLowerCase() === "projects" && (
                                <motion.div
                                    initial="initial"
                                    animate="animate"
                                    exit={{opacity: 0, x: -50}}
                                    variants={{
                                        initial: {opacity: 0, x: -50},
                                        animate: {opacity: 1, x: 0},
                                        exit: {opacity: 0, x: -50}
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.43, 0.13, 0.28, 0.96]
                                    }}
                                    className={`d-flex flex-column justify-content-center align-items-center gap-2 p-4 ${theme.isDark||JSON.parse(localStorage.getItem('isDark'))?'text-light':'text-dark'}`}
                                >
                                    <button className="btn btn-primary"><FaPlus size={20}/> <span>create new project</span></button>
                                    {
                                        userMetaData.filesCount === 0 ? (
                                            theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? (
                                                <>
                                                    <img src={Error404Dark} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            ) : (
                                                <>
                                                    <img src={Error404Light} alt="" style={{width: "clamp(300px,30%,450px)"}}/>
                                                </>
                                            )
                                        ) : (
                                            <div className="d-flex flex-column justify-content-center align-items-center"></div>
                                        )
                                    }
                                </motion.div>
                            )
                        }
                    </>
                )
            }
        </section>
    )
}
